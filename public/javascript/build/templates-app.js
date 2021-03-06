angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html', 'vendor/edit.tpl.html', 'vendor/new.tpl.html', 'vendor/vendor.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row-fluid\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <div class =\"table-responsive col-sm-12\">\n" +
    "  <table class=\"table\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "      <th>Something</th>\n" +
    "      <th>Something 2</th>\n" +
    "      <th>Something</th>\n" +
    "      <th>Something 2</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "      <tr>\n" +
    "        <td>1</td>\n" +
    "        <td>1</td>\n" +
    "        <td>1</td>\n" +
    "        <td>1</td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>1</td>\n" +
    "        <td>1</td>\n" +
    "        <td>1</td>\n" +
    "        <td>1</td>\n" +
    "      </tr>\n" +
    "    </tbody>\n" +
    "  </table>\n" +
    "</div>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"icon-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"icon-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Non-Trivial AngularJS Made Easy</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    Everything you need to kickstart AngularJS projects: a best-practice\n" +
    "    directory structure, an intelligent build system, and the best web design\n" +
    "    libraries around.\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"inline social-buttons\">\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=joshdmiller&amp;repo=ng-boilerplate&amp;type=watch&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"110\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=joshdmiller&amp;repo=ng-boilerplate&amp;type=fork&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"95\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "       <iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"\n" +
    "        src=\"https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fbit.ly%2FngBoilerplate&counturl=http%3A%2F%2Fjoshdmiller.github.com%2Fng-boilerplate&text=Check%20out%20ng-boilerplate%20-%20an%20awesome%20kickstarter%20for%20web%20projects%20%7C&hashtags=angularjs&via=joshdmiller&related=joshdmiller\"\n" +
    "        style=\"width:130px; height:20px;\"></iframe>\n" +
    "    </li>\n" +
    "    <li plus-one></li>\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\">\n" +
    "    <a href=\"https://github.com/joshdmiller/ng-boilerplate#readme\" class=\"btn btn-large\">\n" +
    "      <i class=\"icon-book\"></i>\n" +
    "      Read the Docs\n" +
    "    </a>\n" +
    "    <a href=\"https://github.com/joshdmiller/ng-boilerplate\" class=\"btn btn-large btn-success\">\n" +
    "      <i class=\"icon-download\"></i>\n" +
    "      Download\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"marketing\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-thumbs-up\"></i> Good to Go!</h4>\n" +
    "      <p>\n" +
    "        Kickstarts your project quickly, with everything you need, so you can \n" +
    "        focus on what matters: your app.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-magic\"></i> Complete Build System</h4>\n" +
    "      <p>\n" +
    "        A smart, <a href=\"http://gruntjs.com\">Grunt</a>-based build system \n" +
    "        designed to save you time and energy.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-retweet\"></i> Modularization</h4>\n" +
    "      <p>\n" +
    "        Supports a structure that maintains separation of concerns while\n" +
    "        ensuring maximum code reuse.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-star\"></i> AngularJS</h4>\n" +
    "      <p>\n" +
    "        JavaScript framework that augments browser-based, single-page \n" +
    "        applications with MVC functionality.\n" +
    "        <a href=\"http://angularjs.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-resize-small\"></i> LESS CSS</h4>\n" +
    "      <p>\n" +
    "        The dynamic stylesheet language that extends CSS with efficiency.\n" +
    "        <a href=\"http://lesscss.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-twitter\"></i> Twitter Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Sleek, intuitive, and powerful front-end framework for faster and easier\n" +
    "        web development.\n" +
    "        <a href=\"http://getbootstrap.com\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-circle\"></i> Angular UI Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Pure AngularJS components for Bootstrap written by the \n" +
    "        <a href=\"https://github.com/angular-ui?tab=members\">AngularUI Team</a>.\n" +
    "        <a href=\"http://angular-ui.github.com/bootstrap\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-flag\"></i> Font Awesome</h4>\n" +
    "      <p>\n" +
    "        The iconic font designed for use with Twitter Bootstrap.\n" +
    "        <a href=\"http://fortawesome.github.com/Font-Awesome\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-asterisk\"></i> Placeholders</h4>\n" +
    "      <p>\n" +
    "        Client-side image and text placeholder directives written in pure \n" +
    "        AngularJS to make designing mock-ups wicked-fast.\n" +
    "        <a href=\"http://joshdmiller.github.com/angular-placeholders\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div>\n" +
    "  <h1>Login</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"login_error.message\" class=\"error\">\n" +
    "  <p>{{login_error.message}}</p>\n" +
    "</div>\n" +
    "<div class=\"body\">\n" +
    "  <div ng-class=\"{error: login_error.errors.email}\">Email: <input ng-model=\"login_user.email\" />\n" +
    "    <div ng-show=\"login_error.errors.email\">\n" +
    "      <div ng-repeat=\"field_error in login_error.errors.email\">{{field_error}}</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-class=\"{error: login_error.errors.password}\">Password: <input type=\"password\" ng-model=\"login_user.password\" />\n" +
    "    <div ng-show=\"login_error.errors.password\">\n" +
    "      <div ng-repeat=\"field_error in login_error.errors.password\">{{field_error}}</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <button ng-click=\"login()\" class=\"btn btn-primary\" >Login</button>\n" +
    "  <button ng-click=\"logout()\" class=\"btn btn-primary\" >Logout</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("vendor/edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("vendor/edit.tpl.html",
    "<div>\n" +
    "	<h1>Edit Vendor: {{ vendor.name }}</h1>\n" +
    "</div> \n" +
    "<div class=\"body\">\n" +
    "<tabset>\n" +
    "    \n" +
    "    <tab heading=\"Contact\">\n" +
    "	    <input ng-model=\"$parent.vendor.name\" value = \"$parent.vendor.name\" placeholder=\"Vendor Name\">\n" +
    "	    <input ng-model=\"$parent.vendor.address1\" value = \"$parent.vendor.address1\" placeholder = \"Address Line 1\">\n" +
    "	    <input ng-model=\"$parent.vendor.address2\" value = \"$parent.vendor.address2\" placeholder = \"Address Line 2\">\n" +
    "	    <input ng-model=\"$parent.vendor.address3\" value = \"$parent.vendor.address3\" placeholder = \"Address Line 3\">\n" +
    "	    <input ng-model=\"$parent.vendor.city\"  value = \"$parent.vendor.city\" placeholder = \"City\">\n" +
    "	    <input ng-model=\"$parent.vendor.state\"  value = \"$parent.vendor.state\" placeholder = \"State\">\n" +
    "	    <input ng-model=\"$parent.vendor.zip\"  value = \"$parent.vendor.zip\" placeholder = \"Zipcode\">\n" +
    "	    <input ng-model=\"$parent.vendor.fax_number\"  value = \"$parent.vendor.fax_number\" placeholder = \"Fax Number\">\n" +
    "	    <input ng-model=\"$parent.vendor.cell_number\"  value = \"$parent.vendor.zip\" placeholder = \"Zipcode\">\n" +
    "	    <input ng-model=\"$parent.vendor.email\"  value = \"$parent.vendor.email\" placeholder = \"E-Mail\">\n" +
    "	</tab>\n" +
    "    \n" +
    "    <tab heading=\"Payment\">\n" +
    "	    <input ng-model=\"$parent.vendor.routing_number\"  value = \"$parent.vendor.routing_number\" placeholder = \"Bank Routing Number\">\n" +
    "	    <input ng-model=\"$parent.vendor.bank_account_number\"  value = \"$parent.vendor.bank_account_number\" placeholder = \"Bank Account Number\">\n" +
    "	    <input ng-model=\"$parent.vendor.tax_id_number\"  value = \"$parent.vendor.tax_id_number\" placeholder = \"Tax ID Number\">\n" +
    "	    <input ng-model=\"$parent.vendor.payment_term\"  value = \"$parent.vendor.payment_term\" placeholder = \"Payment Term\">\n" +
    "	    <input ng-model=\"$parent.vendor.after_bill_date\"  value = \"$parent.vendor.after_bill_date\" placeholder = \"After Bill Date\">\n" +
    "	    <input ng-model=\"$parent.vendor.before_due_date\"  value = \"$parent.vendor.before_due_date\" placeholder = \"Before Due Date\">\n" +
    "	    <input ng-model=\"$parent.vendor.after_due_date\"  value = \"$parent.vendor.after_due_date\" placeholder = \"After Due Date\">\n" +
    "	    <input ng-model=\"$parent.vendor.day_of_the_month\"  value = \"$parent.vendor.day_of_the_month\" placeholder = \"Day of the Month\">\n" +
    "	    <input ng-model=\"$parent.vendor.after_recieved\"  value = \"$parent.vendor.after_recieved\" placeholder = \"Days After Recieved\">\n" +
    "	    <input ng-model=\"$parent.vendor.end_after_payments\"  value = \"$parent.vendor.end_autopay_over_amount\" placeholder = \"End Auto Pay If Over Amount\">\n" +
    "	    <input ng-model=\"$parent.vendor.auto_amount\"  value = \"$parent.vendor.auto_amount\" placeholder = \"Automatic Payment Amount\"> \n" +
    "    </tab>\n" +
    "    \n" +
    "    <tab heading=\"Alerts\">\n" +
    "    	<input ng-model=\"$parent.vendor.alert_over\"  value = \"$parent.vendor.alert_over\" placeholder = \"Alert over this amount\">\n" +
    "    </tab>\n" +
    "    \n" +
    "    <tab heading=\"Line Items\">\n" +
    "      Line Items Coming Soon!\n" +
    "    </tab>\n" +
    "    \n" +
    "    <tab heading=\"Invoices\">\n" +
    "      Invoices Comming Soon!\n" +
    "    </tab>\n" +
    "  </tabset>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<button ng-click=\"vendorupdate()\" class=\"btn-theme\">Save</button> <button ng-click=\"vendorcancel()\" class=\"btn-theme\" ng-click=\"vendorcancel()\">Cancel</button>");
}]);

angular.module("vendor/new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("vendor/new.tpl.html",
    "<div>\n" +
    "	<h1>New Vendor: {{ vendor.name }}</h1>\n" +
    "</div> \n" +
    "<div class=\"body\">\n" +
    "  <form name=\"vendorForm\" novalidate ng-submit=\"vendorsave()\">\n" +
    "	<tabset>\n" +
    "\n" +
    "	    <tab heading=\"Basic Information\">\n" +
    "			<div class =\"box col-md-10 col-xs-12\">\n" +
    "			    	<div class=\"box-header\">\n" +
    "			    		<div class='title'>Contact</div>\n" +
    "			    	</div>\n" +
    "			    	<div class= \"box-content\">		    \n" +
    "					    <div class=\"form-inline\">\n" +
    "					    	<input class=\"form-control\" name=\"name\" type=\"text\" ng-model=\"$parent.vendor.name\" placeholder=\"Vendor Name\" required ng-minlength=\"3\" ng-focus /> \n" +
    "					    	<div class=\"error-block\" ng-show=\"vendorForm.name.$dirty && vendorForm.name.$invalid && !vendorForm.name.$focused\"> \n" +
    "					    		<p ng-show=\"vendorForm.name.$error.required\" class=\"error-text\"> A vendor name is required </p>\n" +
    "					    		<p ng-show=\"vendorForm.name.$error.minlength\" class=\"error-text\">Vendor name must be at least 3 characters long</p>\n" +
    "					    	</div>\n" +
    "					    	<input ng-model=\"$parent.vendor.tax_id_number\"  placeholder = \"Tax ID Number\" type = \"text\">\n" +
    "					    </div>\n" +
    "					    <div class=\"form-group\">\n" +
    "					    	<input class=\"form-control\" name= \"faxnumber\" type=\"text\" ng-model=\"$parent.vendor.fax_number\"  placeholder = \"Fax Number\" />\n" +
    "					    	<input class=\"form-control\" type=\"text\" ng-model=\"$parent.vendor.cell_number\" placeholder = \"Cell Number\">\n" +
    "					    </div>\n" +
    "					    <div class=\"form-group\">\n" +
    "					    	<input class=\"form-control\" name= \"email\" type=\"email\" ng-model=\"$parent.vendor.email\"  placeholder = \"E-Mail\" ng-focus />\n" +
    "					    	<div class=\"error-block\" ng-show=\"vendorForm.email.$dirty && vendorForm.email.$invalid && !vendorForm.email.$focused\"> \n" +
    "					    		<p ng-show=\"vendorForm.email.$invalid\">Please enter a valid email</p>\n" +
    "					    	</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "		    <div class =\"box col-md-10 col-xs-12\">\n" +
    "			    	<div class=\"box-header\">\n" +
    "			    		<div class='title'>Payment Method</div>\n" +
    "			    	</div>\n" +
    "			    	<div class= \"box-content\"> \n" +
    "					    	<p ng-show=\"(vendorForm.routing.$pristine && vendorForm.account.$pristine) && (vendorForm.address1.$pristine && vendorForm.city.$pristine && vendorForm.state.$pristine && vendorForm.zipcode.$pristine)\"><strong>Please enter valid bank account information OR a valid address to send payments. </strong> If both are entered it will default to wire.</p>\n" +
    "			    			<h4>By Wire</h4>\n" +
    "							<input name= \"routing\" ng-model=\"$parent.vendor.routing_number\" type= \"text\"  placeholder = \"Bank Routing Number\" ng-pattern=\"/^((0[0-9])|(1[0-2])|(2[1-9])|(3[0-2])|(6[1-9])|(7[0-2])|80)([0-9]{7})$/\" ng-focus />\n" +
    "							<div class=\"error-block\" ng-show=\"vendorForm.routing.$dirty && vendorForm.routing.$invalid && !vendorForm.routing.$focused\"> \n" +
    "					    		<p ng-show=\"vendorForm.routing.$error.pattern\">Please enter a valid routing number</p>\n" +
    "					    	</div>\n" +
    "\n" +
    "		    				<input ng-model=\"$parent.vendor.bank_account_number\" name= \"account\"  type= \"text\" placeholder = \"Bank Account Number\">\n" +
    "			    			<h4>By Check</h4>\n" +
    "						    <div class=\"form-group\">\n" +
    "						    	<input class=\"form-control col-md-6\" name= \"address1\" type=\"text\" ng-model=\"$parent.vendor.address1\" placeholder = \"Address Line 1\"><br>\n" +
    "						    	<input class=\"form-control col-md-6\" type=\"text\" ng-model=\"$parent.vendor.address2\"  placeholder = \"Address Line 2\"><br>\n" +
    "						    	<input class=\"form-control col-md-6\" type=\"text\" ng-model=\"$parent.vendor.address3\"  placeholder = \"Address Line 3\"><br>\n" +
    "						    </div>\n" +
    "						    <div class=\"form-group\">\n" +
    "						    	<input class=\"col-md-3\" type=\"text\" ng-model=\"$parent.vendor.city\"   placeholder = \"City\" name=\"city\">\n" +
    "						    	<select class=\"col-md-1\" name=\"state\" type=\"text\" ng-model=\"$parent.vendor.state\" placeholder = \"State\">\n" +
    "									<option value=\"AL\">AL</option>\n" +
    "									<option value=\"AK\">AK</option>\n" +
    "									<option value=\"AR\">AR</option>\n" +
    "									<option value=\"AZ\">AZ</option>\n" +
    "									<option value=\"CA\">CA</option>\n" +
    "									<option value=\"CO\">CO</option>\n" +
    "									<option value=\"CT\">CT</option>\n" +
    "									<option value=\"DC\">DC</option>\n" +
    "									<option value=\"DE\">DE</option>\n" +
    "									<option value=\"FL\">FL</option>\n" +
    "									<option value=\"GA\">GA</option>\n" +
    "									<option value=\"HI\">HI</option>\n" +
    "									<option value=\"IA\">IA</option>\n" +
    "									<option value=\"ID\">ID</option>\n" +
    "									<option value=\"IL\">IL</option>\n" +
    "									<option value=\"IN\">IN</option>\n" +
    "									<option value=\"KS\">KS</option>\n" +
    "									<option value=\"KY\">KY</option>\n" +
    "									<option value=\"LA\">LA</option>\n" +
    "									<option value=\"MA\">MA</option>\n" +
    "									<option value=\"MD\">MD</option>\n" +
    "									<option value=\"ME\">ME</option>\n" +
    "									<option value=\"MI\">MI</option>\n" +
    "									<option value=\"MN\">MN</option>\n" +
    "									<option value=\"MO\">MO</option>\n" +
    "									<option value=\"MS\">MS</option>\n" +
    "									<option value=\"MT\">MT</option>\n" +
    "									<option value=\"NC\">NC</option>\n" +
    "									<option value=\"ND\">ND</option>\n" +
    "									<option value=\"NE\">NE</option>\n" +
    "									<option value=\"NH\">NH</option>\n" +
    "									<option value=\"NJ\">NJ</option>\n" +
    "									<option value=\"NM\">NM</option>\n" +
    "									<option value=\"NV\">NV</option>\n" +
    "									<option value=\"NY\">NY</option>\n" +
    "									<option value=\"OH\">OH</option>\n" +
    "									<option value=\"OK\">OK</option>\n" +
    "									<option value=\"OR\">OR</option>\n" +
    "									<option value=\"PA\">PA</option>\n" +
    "									<option value=\"RI\">RI</option>\n" +
    "									<option value=\"SC\">SC</option>\n" +
    "									<option value=\"SD\">SD</option>\n" +
    "									<option value=\"TN\">TN</option>\n" +
    "									<option value=\"TX\">TX</option>\n" +
    "									<option value=\"UT\">UT</option>						\n" +
    "									<option value=\"VA\">VA</option>\n" +
    "									<option value=\"VT\">VT</option>\n" +
    "									<option value=\"WA\">WA</option>\n" +
    "									<option value=\"WI\">WI</option>\n" +
    "									<option value=\"WV\">WV</option>	\n" +
    "									<option value=\"WY\">WY</option>\n" +
    "								</select>\n" +
    "						    	<input class=\"col-md-2\" name=\"zipcode\" type=\"text\" ng-model=\"$parent.vendor.zip\"  placeholder = \"Zip Code\" ng-pattern= \"/^\\d{5}(?:[-\\s]\\d{4})?$/\" ng-focus />\n" +
    "						    	<div class=\"error-block\" ng-show=\"vendorForm.zipcode.$dirty && vendorForm.zipcode.$invalid && !vendorForm.zipcode.$focused\">\n" +
    "						    		<p ng-show=\"vendorForm.zipcode.$error.pattern\">Must be a US zipcode following one of the following formats: 12345, 12345-6789, 12345 6789</p>\n" +
    "						    	</div>\n" +
    "						    </div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class= \"box col-md-10 col-sm-12\">\n" +
    "				<div class = \"box-header\">\n" +
    "					<div class=\"title\">Payment Terms</div>\n" +
    "				</div>\n" +
    "				<div class= \"box-content\">\n" +
    "				    Use auto-pay for this vendor (BillSync will automatically pay bills from this vendor and send you an alert when something looks unusual)<br>\n" +
    "				    \n" +
    "				    <h4>Payment Timing</h4>\n" +
    "				    <div class='radio'>\n" +
    "				    	<label><input type= \"radio\" name=\"paymentterm\" ng-model=\"$parent.vendor.payment_term\" value =\"DoNotAutoPay\" checked=\"checked\"> AutoPay is off <br></label>\n" +
    "				    </div>\n" +
    "				    <form role=\"form\">\n" +
    "					    <label><input type= \"radio\" name=\"paymentterm\" ng-model=\"$parent.vendor.payment_term\" value =\"DaysAfterRecieved\" style=\"vertical-align: middle; margin: 0px;\"> Pay </label>\n" +
    "					    <input type= \"text\" ng-model=\"$parent.vendor.after_recieved\"  placeholder = \"# of\" class=\"col-md-1\" style=\"vertical-align: middle; margin: 0px;\"> <label>AFTER bill is recieved</label><br><br>\n" +
    "					</form>\n" +
    "\n" +
    "				    <input type= \"radio\" name=\"paymentterm\" ng-model=\"$parent.vendor.payment_term\" value =\"AfterBillDate\" style=\"vertical-align: middle; margin: 0px;\"> Pay\n" +
    "				    <input type=\"text\" ng-model=\"$parent.vendor.after_bill_date\"   placeholder = \"# of\" class=\"col-md-1\" style=\"vertical-align: middle; margin: 0px;\"> buisiness day(s) AFTER the BILL date<br><br>\n" +
    "				\n" +
    "\n" +
    "				    <input type= \"radio\" name=\"paymentterm\" ng-model=\"$parent.vendor.payment_term\" value =\"BeforeDueDate\" style=\"vertical-align: middle; margin: 0px;\"> Pay\n" +
    "				    <input type= \"text\" ng-model=\"$parent.vendor.before_due_date\"   placeholder = \"# of\" class=\"col-md-1\" style=\"vertical-align: middle; margin: 0px;\"> buisness day(s) BEFORE the DUE date <br> <br>\n" +
    "\n" +
    "				    <input type= \"radio\" name=\"paymentterm\" ng-model=\"$parent.vendor.payment_term\" value =\"AfterDueDate\" style=\"vertical-align: middle; margin: 0px;\"> Pay\n" +
    "				    <input type= \"text\" ng-model=\"$parent.vendor.after_due_date\"  placeholder = \"# of\" class=\"col-md-1\" style=\"vertical-align: middle; margin: 0px;\"> buisness day(s) AFTER the DUE date<br><br>\n" +
    "\n" +
    "				    \n" +
    "				    <input type= \"radio\" name=\"paymentterm\" ng-model=\"$parent.vendor.payment_term\" value =\"DayoftheMonth\" style=\"vertical-align: middle; margin: 0px;\"> Pay\n" +
    "				    <input type= \"text\" ng-model=\"$parent.vendor.day_of_the_month\"  placeholder = \"#\" class=\"col-md-1\" style=\"vertical-align: middle; margin: 0px;\"> day of the month<br>\n" +
    "\n" +
    "				    \n" +
    "\n" +
    "				    <h4>Payment Amount</h4>\n" +
    "				    <input ng-model=\"$parent.vendor.end_after_payments\"   placeholder = \"End Auto Pay If Over Amount\">\n" +
    "				    <input ng-model=\"$parent.vendor.auto_amount\"   placeholder = \"Automatic Payment Amount\"> \n" +
    "				</div>\n" +
    "			</div>\n" +
    "	    </tab>\n" +
    "	  	  \n" +
    "	    <tab heading=\"Alerts\">\n" +
    "	    \n" +
    "	    	<input ng-model=\"$parent.vendor.alert_over\" placeholder = \"Alert over this amount\">\n" +
    "	    \n" +
    "	    </tab>\n" +
    "	  \n" +
    "	    <tab heading=\"Line Items\">\n" +
    "	    	Line Items Coming Soon!\n" +
    "	    </tab>\n" +
    "	  \n" +
    "	    <tab heading=\"Invoices\">\n" +
    "	    	Invoices Comming Soon!\n" +
    "	    </tab>\n" +
    "	</tabset>\n" +
    "\n" +
    "  <hr>\n" +
    "\n" +
    "  <button type=\"submit\" class=\"btn-theme\" ng-disabled=\"vendorForm.$invalid\">Save</button> <button ng-click=\"vendorcancel()\" class=\"btn-theme\" ng-click=\"vendorcancel()\">Cancel</button>\n" +
    "  </form>\n" +
    "  </div>");
}]);

angular.module("vendor/vendor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("vendor/vendor.tpl.html",
    "\n" +
    "  <div class='page-header page-header-with-buttons'>\n" +
    "    <h1 class='pull-left'>\n" +
    "      <span>Vendors</span>\n" +
    "    </h1>\n" +
    "    <div class='pull-right'>\n" +
    "      <button class=\"btn-theme\" ng-click = \"newvendor()\">+ Vendor</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "<div>\n" +
    "  <table class='table responsive-table'>\n" +
    "    <thead>\n" +
    "      <th>Company</th>\n" +
    "      <th>Category</th>\n" +
    "      <th>Payment Method</th>\n" +
    "      <th>Total Outstanding</th>\n" +
    "      <th>Less Than 30</th>\n" +
    "      <th>More Than 30</th>\n" +
    "      <th>Edit/Remove</th>\n" +
    "    </thead>\n" +
    "    <tr ng-repeat = \"vendor in vendors\">\n" +
    "      <td>{{ vendor.name }}<br><small>{{ vendor.address1 }}<span ng-hide=\"!vendor.address1\">, </span>{{ vendor.city }}<span ng-hide=\"!vendor.city\">, </span>{{ vendor.state }} </small></td>\n" +
    "      <td>Add Category Here</td>\n" +
    "      <td><center>Auto-Pay</center></td>\n" +
    "      <td><center>$0</center></td>\n" +
    "      <td><center>$0</center></td>\n" +
    "      <td><center>$0</center></td>\n" +
    "      <td> <center><button class=\"btn-theme\" ng-click =\"editvendor(vendor.id)\"><i class=\"icon-pencil\"></i></button> <button class=\"btn-theme\" ng-click =\"removevendor(vendor)\"><i class=\"icon-trash\"></i></button></center></td>\n" +
    "    </tr>\n" +
    "  </table>\n" +
    "");
}]);
