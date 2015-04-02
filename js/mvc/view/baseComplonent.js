/* jshint strict: true */
/* globals rpApp */

rpApp.BaseComponent = function(defaults, settings) {
    "use strict";

    this.html = "";
    //todo: add check for id;
    this.settings = rpApp.mergeLeft(defaults, settings);
    this.render();
};

rpApp.BaseComponent.prototype = {
    constructor: rpApp.BaseComponent,

    render: function() {
        "use strict";
        throw "Component needs implementation!";
    }
};