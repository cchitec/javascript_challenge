// from data.js
var ufoSightings = data;

// YOUR CODE HERE!
//Select table body any existing table data
var tableData = d3.select("table>tbody");

//Clear exisiting data from table
tableData.html("");

//Append table data
ufoSightings.forEach((ufoSighting) => {
    var row = tableData.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value)
    })
});

  //data.forEach(function(Sighting) {
   // console.log(Sighting);
   // var row = tbody.append("tr");
  
  //  Object.entries(Sighting).forEach(function([key, value]) {
  //    console.log(key, value);
   
   //   var cell = tbody.append("td");
  //  });
 // });
  

var submit = d3.select("#filter-btn");
submit.on("click",function() {

    d3.event.preventDefault();

// Selecting the input element and getting the raw HTML node
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

//matching the inputted value with that in the stored data
    var filteredData = ufoSightings.filter(ufoSighting => ufoSighting.datetime === inputValue);

console.log(filteredData);


//to clear the webpage output
tableData.html("");

//inputs the filtered data into the table
filteredData.forEach((ufoSighting) => {
    var row = tableData.append("tr");
    Object.entries(sufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value)
        })
    })
});