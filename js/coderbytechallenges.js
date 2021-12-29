
// ******** FIRST FACTORIAL ********

function FirstFactorial(num) { 
    if ((num === 0) ||  (num === 1) )
    return 1;
    else
    return (num * FirstFactorial(num - 1)); 
}
   
// keep this function call here 
console.log(FirstFactorial(8)); 








