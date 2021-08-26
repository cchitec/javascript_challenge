// from data.js
var ufos = data;

// YOUR CODE HERE!
//Select table body any existing table data
var tableData = d3.select("table>tbody");

//Clear exisiting data from table
tableData.html("");

//Append table data
ufos.forEach((ufo) => {
    var row = tableData.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value)
    })
});

var submit = d3.select("#filter-btn");
submit.on("click");
function runFilter() {

    d3.event.preventDefault();

// Selecting the input element and getting the raw HTML node
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

//matching the inputted value with that in the stored data
    var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);

console.log(filteredData);


//to clear the webpage output
tableData.html("");


//inputs the filtered data into the table
filteredData.forEach((ufo) => {
    var row = tableData.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value)
    })
});
}
