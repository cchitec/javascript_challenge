// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table
var table = d3.select("table");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Print out the data from data.js
console.log(data);

// Function to create a table from an array of objects
function createTable(rows){
    rows.forEach(function(element) {
        var row = tbody.append('tr');
        Object.entries(element).forEach(function([key, value]) {
            row.append('td').text(value);
        });
    });
}