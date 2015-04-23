/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.Container = function(settings) {"use strict";
//todo: replace framework classes with settings styles where this does makes sense
    var defaults = {
        "class" : "",
        "name" : "",
        "items" : [],
        "id" : ""
    };

    this.containerWidths = {
        "1" : "one",
        "2" : "two",
        "3" : "three",
        "4" : "four",
        "5" : "five",
        "6" : "six",
        "7" : "seven",
        "8" : "eight",
        "9" : "nine",
        "10" : "ten"
    };

    rpApp.view.components.Container.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.view.components.Container, rpApp.BaseComponent);

rpApp.view.components.Container.prototype.render = function() {"use strict";
    var self = this, 
        container = document.createElement("div"),
        items = self.settings.items, 
        lth = items.length, 
        widthCls = self.containerWidths[lth],
        formElements = rpApp.view.components.form;

    container.id = self.settings.id;
    container.addClassName("rp-container"); //todo: remove superfluous properties
    container.addClassName(self.settings.class);

    if (widthCls) {
        container.addClassName(widthCls);
    }

    for (var i = 0; i < lth; i++) {
        var item = items[i],
            elt;
            
        if (item.type && formElements[item.type]) {
            elt = new formElements[item.type](item).html;
            //todo: add components reference to container
        } else {
            elt = new formElements.Spacer(item).html;
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