/* jshint strict: true */
/* globals rpApp */

rpApp.BaseComponent = function(defaults, settings) {"use strict";
    var ID_LTH = 10;

    if (!settings.id) {
        settings.id = this.genId(ID_LTH);
    }

    this.html = "";
    //todo: add check for id;
    this.settings = rpApp.mergeLeft(defaults, settings);

    this.render();
};

rpApp.BaseComponent.prototype = {
    constructor : rpApp.BaseComponent,

    render : function() {"use strict";
        throw "Component needs implementation!";
    },
    genId : function(lth) {"use strict";
        var text = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < lth; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}; 