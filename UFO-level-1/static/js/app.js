// from data.js
let tableData = data;
let tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
// YOUR CODE HERE!

tableData.forEach(function(sighting) {
    console.log(sighting);
    let row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
    });
});

button.on("click",function() {
    d3.select("tbody").selectAll("tr").remove();
    console.log("A button was clicked!")
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
    console.log(inputValue);

    let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(sighting) {
        console.log(sighting);
        let row = tbody.append("tr");
    
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });

});
