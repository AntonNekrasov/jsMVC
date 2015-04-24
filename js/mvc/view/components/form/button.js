/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.form.Button = function(settings) {"use strict";

    var defaults = {
        "id": "",
        "text" : "",
        "class": "rp-button", //todo: update;
        "placeholder" : ""
    };

    rpApp.view.components.form.Button.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.view.components.form.Button, rpApp.view.components.form.FormElement);

rpApp.view.components.form.Button.prototype.render = function() {"use strict";

    var self = this,
        formElement = rpApp.view.components.form.Button.superclass.render.call(this),
        button = document.createElement("div"),
        id = self.settings.id;

    button.addClassName(self.settings.class);
    button.setAttribute("class", self.settings.class);
    button.id = id;
    
    button.innerText = self.settings.text;
    button.textContent = self.settings.text;
    
    formElement.appendChild(button);

    self.html = formElement;
    
    return formElement;
};