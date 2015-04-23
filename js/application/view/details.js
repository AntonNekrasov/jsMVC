/* jshint strict: true */
/*globals rpApp */
rpApp.define("itechart.mvc.project.view.BookDetails", {
    extends : "rpApp.view.components.View",
    id : "bookDetails",
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
        }, {
            "type" : "Text",
            "label" : "Surname",
            "class" : "", //todo: check with class;
            "placeholder" : "type authors surname here..."
        }, {
            "type" : "Text",
            "label" : "Something Else",
            "placeholder" : "type something else here..."
        }]
    }, {
        "items" : [{
            "type" : "Textarea",
            "label" : "This is to be textarea"
        }]
    }, {
        "items" : [{
            separator: true
        }]
    }, {
        "items" : [{
            type: "Button",
            text: "Save"
        }]
    }]
});
