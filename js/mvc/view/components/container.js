/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.Container = function(settings) {
    "use strict";

    var defaults = {
        "class": "",
        "name": "",
        "bordered": false,
        "items": [],
        "id": ""
    };

    this.containerWidths = {
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten"
    };
    
    rpApp.view.components.Container.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.view.components.Container, rpApp.BaseComponent);

rpApp.view.components.Container.prototype.render = function() {
    "use strict";
    var self = this,
        container = document.createElement("DIV"),
        items = self.settings.items,
        lth = items.length,
        widthCls = self.containerWidths[lth];
    
    container.id = self.settings.id;
    container.addClassName("rp-container");
    container.addClassName(self.settings.class);

    if(widthCls) {
        container.addClassName(widthCls);
    }
    
    for(var i = 0; i < lth; i++) {
        var item = items[i],
            elt;
        if(item.type && rpApp.view.components.form[item.type]) {
            elt = new rpApp.view.components.form[item.type](item).html;//todo: add components reference to container
        } else {
            elt = document.createElement("DIV");
            elt.addClassName("rp-container-section");
        }
        container.appendChild(elt);

        // var item = document.createElement("DIV");
            // item.addClassName("rp-container-section");
        // container.appendChild(item);
        // todo: add component;
    }

    self.html = container;
    
    return container;
};