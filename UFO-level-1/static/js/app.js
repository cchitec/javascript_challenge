// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table
var table = d3.select("table");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Print out the data from data.js
console.log(data);


data.forEach(function(Sighting) {
    console.log(Sighting);
  });
  

  data.forEach(function(Sighting) {
    console.log(Sighting);
    var row = tbody.append("tr");
  });
  
  data.forEach(function(Sighting) {
    console.log(Sighting);
    var row = tbody.append("tr");
  
    Object.entries(Sighting).forEach(function([key, value]) {
      console.log(key, value);
    });
  });
  

  data.forEach(function(Sighting) {
    console.log(Sighting);
    var row = tbody.append("tr");
  
    Object.entries(Sighting).forEach(function([key, value]) {
      console.log(key, value);
   
      var cell = tbody.append("td");
    });
  });
  
// Function to create a table from an array of objects
function createTable(rows){
    rows.forEach(function(element) {
        var row = tbody.append('tr');
        Object.entries(element).forEach(function([key, value]) {
            row.append('td').text(value);
        });
    });
}
var submit = d3.select("#filter-btn");
submit.on("click", function() {

d3.event.preventDefault();

// Selecting the input element and getting the raw HTML node
var inputElement = d3.select("#datetime");

var inputValue = inputElement.property("value");

//matching the inputted value with that in the stored data
var filteredData = tableData.filter(data => data.datetime === inputValue);

console.log(filteredData);


//to clear the webpage output
    tbody.selectAll('tr').remove();

//inputs the filtered data into the table
    filteredData.forEach(function(obj){
        var rows = tbody.append("tr");
        Object.keys(obj).forEach(function(key){
            rows.append("td").text(obj[key]);
        })
    })
});