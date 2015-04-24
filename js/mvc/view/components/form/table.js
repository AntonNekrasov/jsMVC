/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.form.Table = function(settings) {"use strict";

    var defaults = {
        "class": ""
    };

    rpApp.view.components.form.Table.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.view.components.form.Table, rpApp.view.components.form.FormElement);

rpApp.view.components.form.Table.prototype.render = function() {
    "use strict";

    var self = this,
        formElement = rpApp.view.components.form.Table.superclass.render.call(this),
        table = document.createElement("table"),
        thead = document.createElement("thead"),
        tr = document.createElement("tr"),
        th = document.createElement("th");
        
    th.innerText = "Test";
    th.textContent = "Test";    
    
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    
    formElement.appendChild(table);
    self.html = formElement;

    return formElement;
};

rpApp.view.components.form.Table.prototype.row = function() {"use strict";
    var tr = document.createElement("tr");
    return tr;
};

// <table>
      // <thead>
        // <tr>
          // <th>Name</th>
          // <th>Registration Date</th>
          // <th>E-mail address</th>
          // <th>Premium Plan</th>
        // </tr>
      // </thead>
      // <tbody>
        // <tr>
          // <td>John Lilki</td>
          // <td>September 14, 2013</td>
          // <td>jhlilk22@yahoo.com</td>
          // <td>No</td>
        // </tr>
        // <tr>
          // <td>Jamie Harington</td>
          // <td>January 11, 2014</td>
          // <td>jamieharingonton@yahoo.com</td>
          // <td>Yes</td>
        // </tr>
        // <tr>
          // <td>Jill Lewis</td>
          // <td>May 11, 2014</td>
          // <td>jilsewris22@yahoo.com</td>
          // <td>Yes</td>
        // </tr>
      // </tbody>
    // </table>