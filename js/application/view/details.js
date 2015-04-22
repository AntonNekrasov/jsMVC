/* jshint strict: true */
/*globals rpApp */
rpApp.define("itechart.mvc.project.view.BookDetails", {
        extends: "rpApp.view.components.View",
        id: "bookDetails",
        type: "view", //add type form
        sections: [
            {
                "name": "",
                "bordered": false,
                "class": "",
                "id": "bookTitleSection",
                "items": [
                    {
                        "type": "Text",
                        "label": "Title",
                        "class": "",
                        "placeholder": "type book title here...",
                        "validation": {} // todo: update;
                    }, {

                    }, {

                    }
                ]
            }, {
                "name": "",
                "bordered": false,
                "class": "",
                "items": []
            }, {
                "name": "",
                "bordered": false,
                "class": "",
                "id": "thirdSection",
                "items": []
            }
        ]
    }
);