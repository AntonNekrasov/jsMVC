/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.form.FormElement = function(defaults, settings) {
    "use strict";
    rpApp.view.components.form.FormElement.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.view.components.form.FormElement, rpApp.BaseComponent);

rpApp.view.components.form.FormElement.prototype.render = function() {
    "use strict";
    var item = document.createElement("div");
    item.addClassName("rp-container-section");
    
    return item;
};