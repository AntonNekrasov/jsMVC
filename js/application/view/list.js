/* jshint strict: true */
/*globals rpApp */
rpApp.define("itechart.mvc.project.view.BookList", {
    extends : "rpApp.view.components.View",
    id : "bookList",
    type : "view", //add type form
    sections : [{
        "name" : "",
        "bordered" : false,
        "class" : "",
        "id" : "bookTitleSection",
        "items" : [{
            "type" : "Text",
            "label" : "Name",
            "class" : "",
            "placeholder" : "type authors name here...",
            "validation" : {} // todo: update;
        }]
    }, {
        "items" : [{
            "type" : "Table"
        }]
    }]
});