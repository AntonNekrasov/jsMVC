/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.form.Spacer = function(settings) {"use strict";

    var defaults = {
        "separator": false,
        "class": ""
    };

    rpApp.view.components.form.Spacer.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.view.components.form.Spacer, rpApp.view.components.form.FormElement);

rpApp.view.components.form.Spacer.prototype.render = function() {
    "use strict";

    var self = this,
        formElement = rpApp.view.components.form.Spacer.superclass.render.call(this),
        spacerType = self.settings.separator ? "hr" : "br",
        spacer = document.createElement(spacerType);
        
    formElement.appendChild(spacer);
    self.html = formElement;

    return formElement;
};
