/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.form.Text = function(settings) {"use strict";

    var defaults = {
        "id": "",
        "label" : "",
        "class": "rp-text",
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
        text = document.createElement("input"),
        label = document.createElement("label"),
        id = self.settings.id;
    
    text.type = "text";
    text.addClassName(self.settings.class);
    text.setAttribute("placeholder", self.settings.placeholder);
    text.id = id;
    
    label.setAttribute("for", id);
    label.textContent = self.settings.label;
    label.innerText = self.settings.label;
    
    formElement.appendChild(label);
    formElement.appendChild(text);
    
    self.html = formElement;
    
    return formElement;
};
