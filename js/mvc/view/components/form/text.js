/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.form.Text = function(settings) {"use strict";

    var defaults = {
        "label" : "",
        "class": "",
        "placeholder" : "",
        "validation" : {} // todo: update;
    };

    rpApp.view.components.form.Text.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.view.components.form.Text, rpApp.view.components.form.FormElement);

rpApp.view.components.form.Text.prototype.render = function() {
    "use strict";

    var self = this,
        formElement = rpApp.view.components.form.Text.superclass.render.call(this),
        text = document.createElement("input");
    
    text.type = "text";
    text.addClassName(self.settings.class);

    formElement.appendChild(text);
    
    self.html = formElement;
    
    return formElement;
};
