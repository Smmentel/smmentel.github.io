//GCD Function with two inputs
function GCD(int1, int2){
let output = 0;
  
 // looping from 1 to number1 and number2
for (let i = 1; i <= int1 && i <= int2; i++) {

    // check if is factor of both integers
    if( int1 % i == 0 && int2 % i == 0) {
        output = i;
    }
}
  //print result to user
  document.getElementById("gcd").innerHTML = output;
}

//computeSum function with one input
function computeSum(input){
  let sum  = 0; 
  
  //loop through each index of string
 for(let i = 0; i <= input.length){
   sum += parseFloat(input.indexOf(i));
 }
  
  //print results
  document.getElementById("sum").innerHTML = sum;
}
