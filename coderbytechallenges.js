
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





 // ******** Questions Marks ********

function QuestionsMarks(str) { 
    result = false;

    for(let i = 0; i < str.length; i++){
        for(let x = i+1; x < str.length; x++){
         
            if(Number(str[i]) + Number(str[x]) === 10){              
                result = true;

                if(str.slice(i, x).split("?").length -1 != 3){
                  return false;

                // veya 
                //if(str.slice(i,x).split("?").length -1 < 3){  
                // dikkat => "<3"
                }
            }
        }
    }
    return result;
}
console.log(QuestionsMarks("arrb6???4xxbl5???eee5")) // true
console.log(QuestionsMarks("arrb6?4xxbl5?eee5")) // false
console.log(QuestionsMarks("acc?7??sss?3rr1??????5")) // true
console.log(QuestionsMarks("aa6?9")) // false





// ******** Prime Time ********

function PrimeTime(num){

    if(num < 2){
        return false
    }
    
    if(num === 2){
        return true;
    }
    
    if(num % 2 === 0){
    return false;
    } 
    
    return true;
    }
    console.log(PrimeTime(19)) // true
    console.log(PrimeTime(110)) // false
    console.log(PrimeTime(2)) // true


// ***** Method: 2
function PrimeTime(num){

    if(num < 2 ){
        return false;
    }
    
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    
    return true;
    }
    console.log(PrimeTime(19)) // true
    console.log(PrimeTime(110)) // false
    console.log(PrimeTime(2)) // true




// ******** Consonant Count  ********

function ConsonantCount(str){

    // let vowel = "aeiouAEIOU"
    let Cons = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    let result = []

for (let i = 0; i < str.length; i++){
     for(let x = 0; x < Cons.length; x++){
         if (str[i] === Cons[x]) {
            result.push(str[i])
            console.log(result)
         }
     }
}
return result.length;

};
console.log(ConsonantCount("Hello World")) // 7 
console.log(ConsonantCount("Alphabets")) // 6 
console.log(ConsonantCount("Sessiz Sessiz")) // 8 


// ******* Method: 2 

function ConsonantCount(str){

    let count = 0
    let Cons = "bcdfghjklmnpqrstvwxyz"

for (let i = 0; i < str.length; i++){
        if(Cons.indexOf(str[i].toLowerCase()) > -1){
            count++;
        }
     }
return count;
};
console.log(ConsonantCount("Hello World")) // 7 
console.log(ConsonantCount("Alphabets")) // 6 
console.log(ConsonantCount("Sessiz Sessiz")) // 8 

//Note: 
Cons.indexOf(str[i].toLowerCase()) > -1
// -1'den büyük olanları getir dedim çünkü "Cons" ile eşleşmeyenleri -1 olarak getirecek, ben de direkt -1'den büyük olanları getir didim...




// ******** Consonant Count  ********

function CheckNums(num1, num2){

    if(num2 > num1){
        return true;
    } else if(num1 == num2) {
        return -1
    } else{
        return false;
    }
}
console.log(CheckNums(3, 122)) // true
console.log(CheckNums(67, 67)) // -1
console.log(CheckNums(3, 1)) // false




// ******** Palindrome Two ********

function PalindromeTwo(str){
    let String = "aeioubcdfghjklmnpqrstvwxyzAEIOUBCDFGHJKLMNPQRSTVWXYZ"
    let result = []

    for(let i = 0; i < str.length; i++){
        for(let x = 0; x < String.length; x++){
            if(str[i] == String[x]){
                result.push(str[i])
            }
        }
    }

result = result.join("").toLowerCase()
// console.log("result:", result) // result: helloworld

let reverse = result.split("").reverse().join("")
// console.log("reverse:", reverse) // reverse: dlrowolleh

if(result == reverse){
    return true;
} else  return false;

};

console.log(PalindromeTwo("Noel - sees Leon")) // true
console.log(PalindromeTwo("A war at Tarawa!")) // true
console.log(PalindromeTwo("Hello World")) // false


//Note: Nasıl? Uzattıkça uzatmışım dimi :D... Sıkıntılı bir anıma denk geldi, bir ara kısa yolunu da yazarık...


// ******** Method - 2:

function PalindromeTwo(str){
    let re = /[a-zA-Z]/ // aA'dan zZ'ye kontrol et (Harf dışında başka bir şey içermez)
    let arr = [];

    for (let i = 0; i < str.length; i++){
        if(str.charAt(i).match(re)){ // str'yi regex ile eşleştiriyorum ve içindekileri arr'ye atacağum, böylece harf dışındaki karakterler gelmeyecek
        arr.push(str.charAt(i).toLowerCase())
        }
    }
    
    let x = arr.join("") // A ve Z harici değerleri "=?!_#" gibi almadık ve join ile aldıklarımı birleştiriyorum
    console.log(arr) // ["k","u","l","l","u","k"] => idü
    console.log(x) // kulluk => oldu

    arrjoin = arr.reverse().join("")
    console.log("arrjoin:",arrjoin) // kulluk (Tersi :D)

    if(arrjoin == x){
        return true;
    } else {
        return false;
    }
};
console.log(PalindromeTwo("Kulluk!#?")) // true
console.log(PalindromeTwo("Kulluks!!?")) // false
console.log(PalindromeTwo("A war at Tarawa!")) // true
console.log(PalindromeTwo("Hello World")) // false


// ******** Ex Oh ********

function ExOh(str) {

    let x = []
    let o = []

    for (i = 0; i < str.length; i++){
        if (str[i] === "x") {
            x.push(str[i])
        } else if(str[i] === "o"){
            o.push(str[i])
        }
    }

    if(x.length === o.length){
        return true;
    } else return false;




};
console.log(ExOh("xooxxo")) // true
console.log(ExOh("x")) // false
console.log(ExOh("xooxxxxooxo" )) // false




// ******** Consecutive ********

// Minik Hatırlatma:
// let x = [5,10,15]
// console.log("x:",x[0]) // x: 5
// console.log("x:",x[x.length-1]) // x: 15


function Consecutive(arr){
 
    let res = []  

    // önce arr'yi güçükten büyüğe sıralayalum
    let sortNumbers = arr.sort((a,b) => a-b)

    // daha sonra sıraladıklarımızı for ile getirelim
    // Birinci index'ten başlasın, son index'e kadar olan sayıları bir getirsin bize
    // daha sonra da o sayıları "res" değişkenimize paketleyelim
    for (let i = sortNumbers[0]; i <= sortNumbers[sortNumbers.length-1]; i++){
        res.push(i)
    }

    // gerisi zaten easy peasy
    return res.length - arr.length;

}
console.log("result:",Consecutive([5,10,15])) // 8 
console.log("result:",Consecutive([-2,10,4])) // 10 
console.log("result:",Consecutive([4, 8, 6])) // 2 



