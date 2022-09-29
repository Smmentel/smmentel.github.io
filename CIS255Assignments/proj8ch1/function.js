/* define your functions here */

/* Function to calculate the product total */
function calculateTotal(quantity, price){
    return  quantity * price;
}

/*Function to return Cart Row */
function outputCartRow(item, total){
    var table = document.getElementById("table-fill");
  var row = table.insertRow(0);

  for (let i = 0; i < 9; i++) {
    var i = table.insertRow(i);
  }

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}