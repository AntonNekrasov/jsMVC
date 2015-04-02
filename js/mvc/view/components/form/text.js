/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.form.Text = function(settings) {
    "use strict";

    var defaults = {
        "class": "rp-container",//to do: make it extensible;
        "name": "",
        "bordered": false,
        "items": []
    };

    rpApp.view.components.form.Text.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.view.components.form.Text, rpApp.BaseComponent);

rpApp.view.components.form.Text.prototype.render = function() {
    "use strict";
    //var self = this,
    //    container = document.createElement("DIV"),
    //    items = this.settings.items,
    //    lth = items.length,
    //    widthCls = self.containerWidths[lth];
    //
    //container.id = this.settings.id;
    //container.setAttribute("class", this.settings.class);
    //container.addClassName(this.settings.class);
    //
    //if(widthCls) {
    //    container.addClassName(widthCls);
    //}
    //
    //for(var i = 0; i < lth; i++) {
    //    var item = document.createElement("DIV");
    //    item.addClassName("rp-container-section");
    //    container.appendChild(item);
    //    // todo: add component;
    //}
    //
    //this.html = container;
    //return container;
};
