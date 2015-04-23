/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.form.Textarea = function(settings) {"use strict";

    var defaults = {
        "id" : "",
        "label" : "",
        "class" : "rp-textarea",
        "placeholder" : "",
        "validation" : {} // todo: update;
    };

    rpApp.view.components.form.Textarea.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.view.components.form.Textarea, rpApp.view.components.form.FormElement);

rpApp.view.components.form.Textarea.prototype.render = function() {"use strict";

    var self = this, 
        formElement = rpApp.view.components.form.Textarea.superclass.render.call(this), 
        textarea = document.createElement("textarea"), 
        label = document.createElement("label"), 
        id = self.settings.id;

    textarea.addClassName(self.settings.class);
    textarea.setAttribute("placeholder", self.settings.placeholder);
    textarea.id = id;

    label.setAttribute("for", id);
    label.textContent = self.settings.label;
    label.innerText = self.settings.label;

    formElement.appendChild(label);
    formElement.appendChild(textarea);

    self.html = formElement;

    return formElement;
};
