// default values
let loans = [
    { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 
let int = 0;
let payments;

//returns a comma after 3 digits 
function toComma(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//returns toComma value with decimal to two places
let toMoney = (value) => {
  return `\$${toComma(value.toFixed(2))}`; 
}
//4.Save form using local storage
let saveForm = () => {
  localStorage.setItem(`as06`, JSON.stringify(loans));
}
//4.Retrieve loan array data from storage
let loadForm = () => {
  if(localStorage.getItem(`as06`) != null){
     loans = JSON.parse(localStorage.getItem(`as06`));
     updateForm();
  } else {
     alert(`Error: no saved values`);
  }
}

// display the entry form
function loadDoc() {
  // pre-fill defaults for first loan year    
  var defaultYear = loans[0].loan_year; 
  $("#loan_year0" + 1).val(defaultYear++);      
  var defaultLoanAmount = loans[0].loan_amount;
  $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
  var defaultInterestRate = loans[0].loan_int_rate;
  $("#loan_int0" + 1).val(defaultInterestRate);
  var loanWithInterest 
    = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  $("#loan_bal0" + 1).text(toMoney(loanWithInterest));
    
  // pre-fill defaults for other loan years
  for(var i=2; i<6; i++) {
    $(`#loan_year0${i}`).val(defaultYear++);
    $(`#loan_year0${i}`).attr("disabled","true"); //note disabled bc once user enters first year program can do the rest
    $(`#loan_year0${i}`).css({
      "backgroundColor":"grey","color":"white"
    });
    $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2));
    $(`#loan_int0${i}`).val(defaultInterestRate);
    $(`#loan_int0${i}`).attr("disabled","true"); //note disabled bc interest rate will be same
    $(`#loan_int0${i}`).css({
      "backgroundColor":"grey","color":"white"
    });
    loanWithInterest 
      = (loanWithInterest + defaultLoanAmount) 
      * (1 + defaultInterestRate);
    $("#loan_bal0" + i).text(toMoney(loanWithInterest));//display yearBalance
  } 
    
  //https://api.jquery.com/focus/
  //focus set focus on input box  when user selects or tabs to it
  //selects the input and changes the background color
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "lightyellow");
  }); 
  //once clicked or tabbed away from the input box will change to light grey indicating entry  has been modified, then calls function updateLoansArray to  update the loan array with the new input that has just been added
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "lightgrey");
    updateLoansArray();  //2.  update screen instantly as it changes
  });
   
} // end: function loadDoc()

function updateLoansArray() {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  //3.  validation of input fields
  let yearP = /^(19|20)\d{2}$/; //year(1900-2099) 19 0r 20 followed by two digits
  let amtP = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/; //monetary value 
  //first between 1-9 and after that any amount of digits from 0-9 optionally add decimal up to two places
  let intP =/^0?\.[0-9]+$/; //interest decimal amount, could start with a zero is optional, digits[0-9]

  let valid = true;
  //3. Tests to determine whether the year entered by the user is valid
  if(!yearP.test($(`#loan_year01`).val())){  //if year entered doesn't pass test
    valid = false; //change validity
    $(`#loan_year01`).css("background-color", "red"); //display error to user
  }
  
  //Since there  are 6 fields for amount: loop
  for (i = 1; i < 6; i++) {
    //3. Tests to determine whether the loan amount entered by user is valid
    if(!amtP.test($(`#loan_amt0${i}`).val())) { //if amount entered does not pass test
      valid = false; 
      $(`#loan_amt0${i}`).css("background-color", "red");
    } 
  }
  //3. Tests to determine whether the loan interest entered by user is valid
  if(!intP.test($(`#loan_int01`).val())) {
    valid = false; //change validity
    $(`#loan_int01`).css("background-color", "red"); //display error to user
  }

  //when all entered input is valid
  if(valid) {
    loans[0].loan_year = parseInt($("#loan_year01").val()); //intitialize loan year
    for(var i=1; i<5; i++) { //loop for rest  of years
      loans[i].loan_year = loans[0].loan_year + i;   //incrementing count for additional year
    }
    for(i = 1; i<6; i++){  
      let amt = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2); 
      loans[i-1].loan_amount = amt; //initialize loan amounts
    }
    let rate = parseFloat($("#loan_int01").val());
    for(i=0; i<5; i++){
      loans[i].loan_int_rate = rate; //intialize interest amounts
    }
    //now update the form with the array with valid data we just entered in loans array 
    updateForm();
  }
} 

//2.  update form values with JQUERY
let updateForm = () => {
  loanWithInterest = 0;
  let totalAmt = 0;
  //for each year
  for(i = 1; i < 6; i++) {
    $(`#loan_year0${i}`).val(loans[i - 1].loan_year);
    let amt = loans[i - 1].loan_amount; //find the amount
    $(`#loan_amt0${i}`).val(amt);
    totalAmt += parseFloat(amt); //add to total
    $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate);//interest rate
    loanWithInterest 
      = (loanWithInterest + parseFloat(amt)) 
      * (1 + loans[0].loan_int_rate); //calculate loan amount with interest
    $("#loan_bal0" + i).text(toMoney(loanWithInterest)); //display yearly balance
  }
  int = loanWithInterest - totalAmt; //interest accured
  $(`#loan_int_accrued`).text(toMoney(int)); //display to user
  
} 
//https://www.w3schools.com/angular/angular_modules.asp
//5. Add angular to populate  table form
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.payments = [];
  $scope.populate = function () {
    
    //ensure current values
    updateForm();
    
    let total = loanWithInterest;
    let iRate = loans[0].loan_int_rate;
    let r = iRate / 12;
    let n = 11;
    //loan payment formula
    //https://www.thebalance.com/loan-payment-calculations-315564
    let pay = 12 * (total / ((((1+r)**(n*12))-1)/(r *(1+r)**(n*12))));
    
    //creates 10 payments
    for (let i = 0; i < 10; i++) {
      total -= pay 
      let int = total * (iRate); 
      $scope.payments[i] = {  //update variables accordingly
        "year":loans[4].loan_year + i + 1,
        "payment": toMoney(pay), 
        "amt": toMoney(int),
        "ye": toMoney(total += int)
      }
    }
    //last payment
    $scope.payments[10] = {
        backgroundColor: lightyellow,
      "year":loans[4].loan_year + 11,
      "payment": toMoney(total),
      "amt": toMoney(0),
      "ye":toMoney(0)
    }
  }
});