
// ******** FIRST FACTORIAL ********

function FirstFactorial(num) { 
    if ((num === 0) ||  (num === 1) )
    return 1;
    else
    return (num * FirstFactorial(num - 1)); 
}
   
// keep this function call here 
console.log(FirstFactorial(8)); 


// ******** FIRST REVERSE ********

// Method - 1:
function FirstReverse(str){
    var backwardString = "";
    var splitString = str.split("");
    for (var i = splitString.length - 1; i >= 0; i--){
        backwardString += splitString[i];
    }
    return backwardString;
}
//console.log(FirstReverse("coderbyte")); // etybredoc



// Method - 2:
function FirstReverse(str) { 

    // code goes here  
    return str.split('').reverse().join(''); 
           
  }
     
  // keep this function call here 
  FirstReverse(readline());









  