class Mturk::TurkTransactions::Creator < TurkTransaction
  attr_accessor :mt_worker_id, :mt_assignment_id, :mt_hit_id

  validates :total, :description, :assignment_id, :invoice_id, :worker_id, presence: true

  normalize_attribute :description, with: [:squish, :blank] do |value|
    value.present? && value.is_a?(String) ? value.squish.downcase.titleize : value
  end

  before_save :squish_description

  def self.create_items_with(params, invoice)

    return false unless params[:turk_transactions]
    return false unless hit = Hit.find_by(mt_hit_id: params[:mt_hit_id])

    worker = Worker.find_or_create_by(mt_worker_id: params[:mt_worker_id])
    assignment = Mturk::Assignments::Creator.build_from(params[:mt_assignment_id], worker, hit)
    return false unless assignment.save

    items = []
    params[:turk_transactions].each do |turk_transaction_params|
      this_params = turk_transaction_params
      this_params.merge!({invoice_id: invoice.id, worker_id: worker.id,
        hit_id: hit.id, assignment_id: assignment.id})
      items << create(this_params)
    end

    async_params = {
      mt_hit_id: params[:mt_hit_id],
      invoice_id: invoice.id
    }

    errors = []

    items.each do |item|
      errors << item.errors.full_messages if errors.any?
    end
    if errors.any?
      items.each {|e| e.destroy if e.persisted? }
      return false
    end

    LineItemsWorker.delay_for(2.minutes).perform_async(async_params)
  end

  private

  def squish_description
    return true unless description.present? && description.is_a?(String)
    self.description = description.squish
    true
  end
end