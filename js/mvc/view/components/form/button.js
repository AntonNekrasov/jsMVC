/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.form.Button = function(settings) {"use strict";

    var defaults = {
        "id": "",
        "text" : "",
        "class": "",
        "placeholder" : ""
    };

    rpApp.view.components.form.Button.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.view.components.form.Button, rpApp.view.components.form.FormElement);

rpApp.view.components.form.Button.prototype.render = function() {"use strict";

    var self = this,
        formElement = rpApp.view.components.form.Button.superclass.render.call(this),
        button = document.createElement("button"),
        id = self.settings.id;

    button.type = "button";
    button.addClassName(self.settings.class);
    button.setAttribute("text", self.settings.text);
    button.id = id;
    
    button.innerText = self.settings.text;
    button.textContent = self.settings.text;
    
    formElement.appendChild(button);

    self.html = formElement;
    
    return formElement;
};