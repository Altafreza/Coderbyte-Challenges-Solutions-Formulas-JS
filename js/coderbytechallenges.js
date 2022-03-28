
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
    return str.split("").reverse().join("")
           
  }
     
  // keep this function call here 
  FirstReverse(readline());



// ******** Find Intersection ********

function FindIntersection(strArr){

    let arr1 = strArr[0].split(",")
    // console.log("arr1",arr1) // arr1 (5) ['1', ' 3', ' 4', ' 7', ' 13']

    let arr2 = strArr[1].split(",")
    // console.log("arr2",arr2) // arr2 (5) ['1', ' 2', ' 4', ' 13', ' 15']

    let filter = arr1.filter(x => arr2.includes(x))
    // console.log("filter", filter) // filter (3) ['1', ' 4', ' 13']

    // filter'ın farklı yazılışı :)
    // let filter = arr1.filter(function(value){ 
    //     return arr2.includes(value); 
    // });

    if(filter.length === 0){ 
        return false; 
      } else { 
        return filter.join(",").replace(/\s/g, "");
      }

}
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])) // 1,4,13
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"])) // 1,9,10

// Aşağıdaki 3 farklı ornekte ise hata aldık? -6,11- ve -false- ve -4- sonuçları çıktı enteresan :D
// Burayı okuyan varsa beni de aydınlatsın plüz ;)
console.log(FindIntersection(["1, 5, 6, 7, 10, 11, 12", "5, 6, 8, 11, 17"])) //  5,6,11
console.log(FindIntersection(["2, 3, 4", "3"])) // 3
console.log(FindIntersection(["1, 2, 4, 5, 6, 9", "2, 3, 4, 8, 10"])) // 2,4

// NOTE:
replace(/\s/g, ""); // virgülden önceki tüm boşlukları boş bir dize ile değiştirerek kaldırıyoruz.





  // ******** Longest Word ********

  function LongestWord(sen) { 

    //regex2(digits + words) = /\d+|([a-zA-Z])\w+/g

    let res = sen.split(" ").toString().match(/\d+|([a-zA-Z])\w+/g)
    // console.log("res",res)


    let sort = res.sort(function(a,b) {
        return b.length - a.length
    })
    // console.log("s",sort)

    return sort[0]

  
  }
  console.log(LongestWord("Hello world123 567")); // world123
  console.log(LongestWord("fun&!! time")); // time
  console.log(LongestWord("x love dogs")); // love
















