/* define your functions here */

/* Function to calculate the product total */
function calculateTotal(quantity, price){
    return  quantity * price;
}

/*Function to return Cart Row */
function outputCartRow(item, total){
  
  //prompt for tax and shipMinimum
 let tax = parseFloat(prompt("What is the tax?", "0.10"));
 let shipMinimum = parseFloat(prompt("What is the shipping threshold?", "300"))
    
 //create table
  var table = document.getElementById("table-fill")[0];
  var row = table.insertRow(0);
//fill with rows
  for (let i = 1; i < cart.length; i++) {
    let x = table.insertRow(i);
  }
 //fill rows with cells
  for (let j = 0; j < 5; j++) {
    let y = row.insertCell(j);
  }
 
  //
  for(let n = 0; n < cart.length; n++){
   
  let quantity = cart[i].quantity;
  let price = cart[i]
  let curTotal = calculateTotal(quantity, price).toFixed(2);
    subtotal += parseFloat(curTotal);
  
  cell0.innerHTML = "<img src = images/" + cart[i].product.filename + ">"; // image
    cell1.innerHTML = cart[i].product.title; // product
    cell2.innerHTML = quantity;              // quantity
    cell3.innerHTML = "$" + price;                 // price
    cell4.innerHTML = "$" + curTotal;    // total
    
    //Align Text and adjust image table cell
    cell0.style.width = "150px";
    cell2.style.textAlign = "center";
    cell3.style.textAlign = "center";
    cell4.style.textAlign = "right";
    }
    
    let shipping = (subtotal < shipMinimum) ? 40 : 0

    //After page load, update bottom of table with correct total amounts
    let totals = document.getElementsByClassName('totals');
    totals[0].getElementsByTagName("td")[1].innerHTML = "$" + subtotal.toFixed(2);
    totals[1].getElementsByTagName("td")[1].innerHTML = "$" + (subtotal * tax).toFixed(2);
    totals[2].getElementsByTagName("td")[1].innerHTML = "$" + shipping.toFixed(2);
    totals[3].getElementsByTagName("td")[1].innerHTML = "$" + parseFloat(subtotal + (subtotal * tax) + shipping).toFixed(2);
    
    


outputCartRow();
  
}
