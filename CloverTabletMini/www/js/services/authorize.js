angular.module('billsync.services', [])
.factory('authorize', function ($http, $q) {

  var permissionsTable = [
    { id: 1, key: 'view-Invoice', views: [
      'dashboard/dashboard.tpl.html',
      'home/home.tpl.html',
      'home/form.tpl.html',
      'invoice/form.tpl.html',
      'line_items/line_items.tpl.html'
    ], states: [
      'dashboard',
      'home'
    ], actions: [] },
    { id: 2, key: 'manage-Invoice', views: [
      'dashboard/dashboard.tpl.html',
      'home/home.tpl.html',
      'home/form.tpl.html',
      'invoice/form.tpl.html',
      'line_items/line_items.tpl.html'
    ], states: [
      'dashboard',
      'home'
    ], actions: [
      'create-upload-bill',
      'delete-bill',
      'update-edit-bill',
      'mark-as-paid-bill',
      'pay-bill',
      'approve-bill',
      'delay-bill',
      'auto-pay-bill',
      'resend-payment'
    ] },
    { id: 3, key: 'manage-Alert', views: [
      'vendor/vendor.tpl.html',
      'vendor/form.tpl.html',
      'vendor/partials/form/alerts.tpl.html'
    ], states: [
      'vendor'
    ], actions: [
      'edit-vendor-alerts'
    ] },
    { id: 4, key: 'read-Vendor', views: [
      'vendor/vendor.tpl.html',
      'vendor/form.tpl.html',
      'vendor/partials/form/basic_info.tpl.html',
      'vendor/partials/form/auto_pay.tpl.html',
      'vendor/partials/form/alerts.tpl.html',
      'vendor/partials/form/line_items.tpl.html',
      'vendor/partials/form/invoice_fields.tpl.html',
      'vendor/partials/form/merged.tpl.html'
    ], states: [
      'vendor'
    ], actions: [] },
    { id: 5, key: 'manage-Vendor', views: [
      'vendor/vendor.tpl.html',
      'vendor/form.tpl.html',
      'vendor/partials/form/basic_info.tpl.html',
      'vendor/partials/form/auto_pay.tpl.html',
      'vendor/partials/form/alerts.tpl.html',
      'vendor/partials/form/line_items.tpl.html',
      'vendor/partials/form/invoice_fields.tpl.html',
      'vendor/partials/form/merged.tpl.html'
    ], states: [
      'vendor'
    ], actions: [
      'create-vendor',
      'delete-vendor',
      'edit-vendor-basic-information',
      'edit-vendor-payment-terms',
      'edit-vendor-alerts',
      'edit-vendor-accounting'
    ] },
    { id: 6, key: '', views: [], states: [], actions: [] },
    { id: 7, key: '', views: [], states: [], actions: [] },
    { id: 8, key: 'read-today', views: [
      'dashboard/dashboard.tpl.html'
    ], states: [
      'dashboard'
    ], actions: [] },
    { id: 9, key: 'manage-approval', views: [
      'dashboard/dashboard.tpl.html',
      'duplicateinvoice/duplicateinvoice.tpl.html',
      'home/home.tpl.html',
      'home/archive.tpl.html',
      'home/form.tpl.html',
      'invoice/form.tpl.html',
      'line_items/line_items.tpl.html',
      'vendor/vendor.tpl.html',
      'vendor/form.tpl.html',
      'vendor/partials/form/basic_info.tpl.html',
      'vendor/partials/form/auto_pay.tpl.html',
      'vendor/partials/form/alerts.tpl.html',
      'vendor/partials/form/line_items.tpl.html',
      'vendor/partials/form/invoice_fields.tpl.html'
    ], states: [
      'dashboard',
      'home',
      'vendor',
      'archive'
    ], actions: [
      'update-edit-bill',
      'approve-bill',
      'delay-bill'
    ] },
    { id: 10, key: 'read-approval', views: [
      'vendor/vendor.tpl.html',
      'vendor/form.tpl.html',
      'vendor/partials/form/basic_info.tpl.html',
      'vendor/partials/form/auto_pay.tpl.html',
      'vendor/partials/form/alerts.tpl.html',
      'vendor/partials/form/line_items.tpl.html',
      'vendor/partials/form/invoice_fields.tpl.html'
    ], states: [
      'vendor'
    ], actions: [
      'approve-bill',
      'delay-bill'
    ] },
    { id: 11, key: 'update_when_approving-Invoice', views: [
      'dashboard/dashboard.tpl.html',
      'duplicateinvoice/duplicateinvoice.tpl.html',
      'home/home.tpl.html',
      'home/archive.tpl.html',
      'home/form.tpl.html',
      'invoice/form.tpl.html',
      'line_items/line_items.tpl.html'
    ], states: [
      'dashboard',
      'home',
      'archive'
    ], actions: [
      'update-edit-bill',
      'approve-bill',
      'delay-bill'
    ] },
    { id: 12, key: 'approve-Invoice', views: [
      'dashboard/dashboard.tpl.html',
      'duplicateinvoice/duplicateinvoice.tpl.html',
      'home/home.tpl.html',
      'home/archive.tpl.html',
      'home/form.tpl.html',
      'invoice/form.tpl.html',
      'line_items/line_items.tpl.html'
    ], states: [
      'dashboard',
      'home',
      'archive'
    ], actions: [
      'approve-bill'
    ] },
    { id: 13, key: 'update-Invoice', views: [
      'dashboard/dashboard.tpl.html',
      'duplicateinvoice/duplicateinvoice.tpl.html',
      'home/home.tpl.html',
      'home/archive.tpl.html',
      'home/form.tpl.html',
      'invoice/form.tpl.html',
      'line_items/line_items.tpl.html',
      'vendor/vendor.tpl.html',
      'vendor/form.tpl.html',
      'vendor/partials/form/basic_info.tpl.html',
      'vendor/partials/form/auto_pay.tpl.html',
      'vendor/partials/form/alerts.tpl.html',
      'vendor/partials/form/line_items.tpl.html',
      'vendor/partials/form/invoice_fields.tpl.html'
    ], states: [
      'dashboard',
      'home',
      'vendor',
      'archive'
    ], actions: [
      'edit-vendor-accounting',
      'update-edit-bill'
    ] },
    { id: 14, key: 'read-Payment', views: [
      'home/archive.tpl.html'
    ], states: [
      'archive'
    ], actions: [] },
    { id: 15, key: 'record-Payment', views: [
      'dashboard/dashboard.tpl.html',
      'duplicateinvoice/duplicateinvoice.tpl.html',
      'home/home.tpl.html',
      'home/archive.tpl.html',
      'home/form.tpl.html',
      'invoice/form.tpl.html',
      'line_items/line_items.tpl.html'
    ], states: [
      'dashboard',
      'home',
      'archive'
    ], actions: [
      'mark-as-paid-bill'
    ] },
    { id: 16, key: 'read-Account', views: [], states: [], actions: [] },
    { id: 17, key: 'pay_approved-Payment', views: [
      'dashboard/dashboard.tpl.html',
      'home/home.tpl.html'
    ], states: [
      'dashboard',
      'home'
    ], actions: [
      'pay-bill'
    ] },
    { id: 18, key: 'cru-Account', views: [
      'profile/partials/form/profile.tpl.html'
    ], states: [
      'profile'
    ], actions: [
      'update-edit-profile-business-information'
    ] },
    { id: 19, key: 'pay_unapproved-Payment', views: [
      'dashboard/dashboard.tpl.html'
    ], states: [
      'dashboard'
    ], actions: [
      'pay-bill'
    ] },
    { id: 20, key: 'pay_unassigned-Payment', views: [
      'dashboard/dashboard.tpl.html'
    ], states: [
      'dashboard'
    ], actions: [
      'pay-bill'
    ] },
    { id: 21, key: 'read-User', views: [
      'addresses/addresses.tpl.html',
      'addresses/new_address.tpl.html',
      'addresses/multiclass.tpl.html',
      'profile/partials/form/profile.tpl.html',
      'profile/profiles.tpl.html (current user)'
    ], states: [
      'profile'
    ], actions: [] },
    { id: 22, key: 'update-User', views: [
      'addresses/addresses.tpl.html',
      'addresses/new_address.tpl.html',
      'addresses/multiclass.tpl.html',
      'profile/partials/form/profile.tpl.html',
      'profile/profiles.tpl.html (current user)',
      'profile/partials/form/settings.tpl.html'
    ], states: [
      'profile',
      'settings'
    ], actions: [
      'update-edit-profile-business-information'
    ] },
    { id: 23, key: 'read-Role', views: [
      'profile/partials/form/individuals.tpl.html',
      'profile/partials/form/settings.tpl.html'
    ], states: [
      'settings'
    ], actions: [] },
    { id: 24, key: 'manage-Role', views: [
      'profile/partials/form/individuals.tpl.html',
      'profile/partials/form/settings.tpl.html'
    ], states: [
      'settings'
    ], actions: [
      'edit-user'
    ] },
    { id: 25, key: 'read-Individual', views: [
      'profile/partials/form/individuals.tpl.html',
      'profile/partials/form/settings.tpl.html'
    ], states: [
      'settings'
    ], actions: [] },
    { id: 26, key: 'cru-Individual', views: [
      'profile/partials/form/individuals.tpl.html',
      'profile/partials/form/settings.tpl.html'
    ], states: [
      'settings'
    ], actions: [
      'add-delete-user',
      'edit-user'
    ] },
    { id: 27, key: 'read_accounting-Vendor', views: [
      'vendor/partials/form/line_items.tpl.html'
    ], states: [], actions: [] },
    { id: 28, key: 'manage_accounting-Vendor', views: [
      'vendor/partials/form/line_items.tpl.html'
    ], states: [], actions: [
      'edit-vendor-accounting'
    ] },
    { id: 29, key: '', views: [
      'addresses/addresses.tpl.html',
      'addresses/new_address.tpl.html',
      'addresses/multiclass.tpl.html'
    ], states: [], actions: [] },
    { id: 30, key: '', views: [
      'addresses/addresses.tpl.html',
      'addresses/new_address.tpl.html',
      'addresses/multiclass.tpl.html'
    ], states: [], actions: [
      'update-edit-profile-accounting'
    ] },
    { id: 31, key: 'read_terms-Vendor', views: [
      'vendor/partials/form/auto_pay.tpl.html'
    ], states: [], actions: [] },
    { id: 32, key: 'manage_terms-Vendor', views: [
      'vendor/partials/form/auto_pay.tpl.html'
    ], states: [], actions: [
      'edit-vendor-payment-terms'
    ] },
    { id: 33, key: 'synchronize-all', views: [
      'profile/partials/form/accounting.tpl.html'
    ], states: [], actions: [
      'sync-with-accounting-system'
    ] },
    { id: 34, key: 'read_incomplete-Invoice', views: [
      'dashboard/dashboard.tpl.html',
      'vendor/partials/form/line_items.tpl.html'
    ], states: [
      'dashboard'
    ], actions: [
      'update-edit-bill'
    ] },
    { id: 35, key: 'text-Invoice', views: [], states: [], actions: [
      'create-upload-bill'
    ] },
    { id: 36, key: 'email-Invoice', views: [], states: [], actions: [
      'create-upload-bill'
    ] },
    { id: 37, key: 'accountant_approve-Invoice', views: [
      'dashboard/dashboard.tpl.html',
      'profile/partials/form/profile.tpl.html'
    ], states: [
      'dashboard',
      'profile'
    ], actions: [
      'approve-bill-as-accountant'
    ] }
  ];

  return {
    view: view,
    state: state,
    action: action,
    signup:signup
  };

  function view (tplUrl, perms) {
    if (tplUrl === 'error/error.tpl.html' || tplUrl === 'profile/profiles.tpl.html') {
      return true;
    }

    var currentPermissions = perms ? perms : [];

    return currentPermissions.some(function (cp) {
        var allowedViews = _.findWhere(permissionsTable, { key: cp });
        return allowedViews && _.contains(allowedViews.views, tplUrl);
      });

  }

  function state (st, perms) {
    var currentPermissions = perms ? perms : [];

    return currentPermissions.some(function (cp) {
        var allowedStates = _.findWhere(permissionsTable, { key: cp });
        return allowedStates && _.contains(allowedStates.states, st);
      });
  }

  function action (a, perms) {
    var currentPermissions = perms ? perms : [];

    return currentPermissions.some(function (cp) {
        var allowedActions = _.findWhere(permissionsTable, { key: cp });
        return allowedActions && _.contains(allowedActions.actions, a);
      });
  }

  function signup(url, signupData){
    console.log(signupData);

    var request = $http({
        method: "post",
        url: url,
        data: signupData,
        dataType: "json"
    });

    return( request.then( handleSuccess, handleError ) );

  }



  function handleError( response ) {
      if (
          ! angular.isObject( response.data ) ||
          ! response.data.message
          ) {

          return( $q.reject( "An unknown error occurred." ) );

      }
      return( $q.reject( response.data.message ) );
  }

  function handleSuccess( response ) {
      return( response.data );
  }


});
