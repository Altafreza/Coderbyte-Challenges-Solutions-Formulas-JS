
// ******** FIRST FACTORIAL ********

function FirstFactorial(num) {
    if ((num === 0) || (num === 1))
        return 1;
    else
        return (num * FirstFactorial(num - 1));
}

// keep this function call here 
console.log(FirstFactorial(8));




// ******** FIRST REVERSE ********

// Method - 1:
function FirstReverse(str) {
    var backwardString = "";
    var splitString = str.split("");
    for (var i = splitString.length - 1; i >= 0; i--) {
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

function FindIntersection(strArr) {

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

    if (filter.length === 0) {
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


    let sort = res.sort(function (a, b) {
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

    for (let i = 0; i < str.length; i++) {
        for (let x = i + 1; x < str.length; x++) {

            if (Number(str[i]) + Number(str[x]) === 10) {
                result = true;

                if (str.slice(i, x).split("?").length - 1 != 3) {
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

function PrimeTime(num) {

    if (num < 2) {
        return false
    }

    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    return true;
}
console.log(PrimeTime(19)) // true
console.log(PrimeTime(110)) // false
console.log(PrimeTime(2)) // true


// ***** Method: 2
function PrimeTime(num) {

    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(PrimeTime(19)) // true
console.log(PrimeTime(110)) // false
console.log(PrimeTime(2)) // true




// ******** Consonant Count  ********

function ConsonantCount(str) {

    // let vowel = "aeiouAEIOU"
    let Cons = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    let result = []

    for (let i = 0; i < str.length; i++) {
        for (let x = 0; x < Cons.length; x++) {
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

function ConsonantCount(str) {

    let count = 0
    let Cons = "bcdfghjklmnpqrstvwxyz"

    for (let i = 0; i < str.length; i++) {
        if (Cons.indexOf(str[i].toLowerCase()) > -1) {
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

function CheckNums(num1, num2) {

    if (num2 > num1) {
        return true;
    } else if (num1 == num2) {
        return -1
    } else {
        return false;
    }
}
console.log(CheckNums(3, 122)) // true
console.log(CheckNums(67, 67)) // -1
console.log(CheckNums(3, 1)) // false




// ******** Palindrome Two ********

function PalindromeTwo(str) {
    let String = "aeioubcdfghjklmnpqrstvwxyzAEIOUBCDFGHJKLMNPQRSTVWXYZ"
    let result = []

    for (let i = 0; i < str.length; i++) {
        for (let x = 0; x < String.length; x++) {
            if (str[i] == String[x]) {
                result.push(str[i])
            }
        }
    }

    result = result.join("").toLowerCase()
    // console.log("result:", result) // result: helloworld

    let reverse = result.split("").reverse().join("")
    // console.log("reverse:", reverse) // reverse: dlrowolleh

    if (result == reverse) {
        return true;
    } else return false;

};

console.log(PalindromeTwo("Noel - sees Leon")) // true
console.log(PalindromeTwo("A war at Tarawa!")) // true
console.log(PalindromeTwo("Hello World")) // false


//Note: Nasıl? Uzattıkça uzatmışım dimi :D... Sıkıntılı bir anıma denk geldi, bir ara kısa yolunu da yazarık...


// ******** Method - 2:

function PalindromeTwo(str) {
    let re = /[a-zA-Z]/ // aA'dan zZ'ye kontrol et (Harf dışında başka bir şey içermez)
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).match(re)) { // str'yi regex ile eşleştiriyorum ve içindekileri arr'ye atacağum, böylece harf dışındaki karakterler gelmeyecek
            arr.push(str.charAt(i).toLowerCase())
        }
    }

    let x = arr.join("") // A ve Z harici değerleri "=?!_#" gibi almadık ve join ile aldıklarımı birleştiriyorum
    console.log(arr) // ["k","u","l","l","u","k"] => idü
    console.log(x) // kulluk => oldu

    arrjoin = arr.reverse().join("")
    console.log("arrjoin:", arrjoin) // kulluk (Tersi :D)

    if (arrjoin == x) {
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

    for (i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            x.push(str[i])
        } else if (str[i] === "o") {
            o.push(str[i])
        }
    }

    if (x.length === o.length) {
        return true;
    } else return false;




};
console.log(ExOh("xooxxo")) // true
console.log(ExOh("x")) // false
console.log(ExOh("xooxxxxooxo")) // false




// ******** Consecutive ********

// Minik Hatırlatma:
// let x = [5,10,15]
// console.log("x:",x[0]) // x: 5
// console.log("x:",x[x.length-1]) // x: 15


function Consecutive(arr) {

    let res = []

    // önce arr'yi güçükten büyüğe sıralayalum
    let sortNumbers = arr.sort((a, b) => a - b)

    // daha sonra sıraladıklarımızı for ile getirelim
    // Birinci index'ten başlasın, son index'e kadar olan sayıları bir getirsin bize
    // daha sonra da o sayıları "res" değişkenimize paketleyelim
    for (let i = sortNumbers[0]; i <= sortNumbers[sortNumbers.length - 1]; i++) {
        res.push(i)
    }

    // gerisi zaten easy peasy
    return res.length - arr.length;

}
console.log("result:", Consecutive([5, 10, 15])) // 8 
console.log("result:", Consecutive([-2, 10, 4])) // 10 
console.log("result:", Consecutive([4, 8, 6])) // 2 





// ******** Swap Case ********

function SwapCase(str) {
    let arr = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            arr.push(str[i].toUpperCase())
        } else {
            arr.push(str[i].toLowerCase())
        }
    }

    return arr.join("")

}
console.log(SwapCase("Hello-LOL")) // hELLO-lol
console.log(SwapCase("Hello World")) // hELLO wORLD
console.log(SwapCase("Sup DUDE!!?")) // sUP dude!!?



// *** Another Solution:
function SwapCase(str) {

    let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let Lower = "abcdefghijklmnopqrstuvwxyz"
    let result = "";

    for (let i = 0; i < str.length; i++) {

        if (Upper.indexOf(str[i]) !== -1) {
            result += Lower.charAt(Upper.indexOf(str[i]));
        }

        else if (Lower.indexOf(str[i]) !== -1) {
            result += Upper.charAt(Lower.indexOf(str[i]));
        }

        if (!str[i].match(/[a-zA-Z]/)) {
            result += str[i]
        }

    }

    return result;
};
console.log(SwapCase("Hello-LOL")) // hELLO-lol
console.log(SwapCase("Hello World")) // hELLO wORLD
console.log(SwapCase("Sup DUDE!!?")) // sUP dude!!?


// *** Another Solution-2:
function SwapCase(str) {

    strUp = str.split("").map(x =>
        x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()
    ).join("")

    return strUp;

};
console.log(SwapCase("Hello-LOL")) // hELLO-lol
console.log(SwapCase("Hello World")) // hELLO wORLD
console.log(SwapCase("Sup DUDE!!?")) // sUP dude!!?








// ******** ThreeFive Multiples ********

function ThreeFiveMultiples(num) {

    var arr = [];
    var sum = 0;

    //    for(var i = num - 1; i > 1; i--){
    //         if(i % 5 === 0 || i % 3 === 0) {
    //             arr.push(i);
    //             console.log("arr:",arr)
    //         }
    //     }

    for (var i = 0; i < num; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            arr.push(i);
            //    console.log("arr:",arr)
            //    arr: [0]
            //         [0, 3]
            //         [0, 3, 5]
        }
    }

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        //   console.log("sum:",sum)
        //   sum: 0
        //   sum: 3
        //   sum: 8
    }

    return sum;

}
console.log(ThreeFiveMultiples(6)); // 8
console.log(ThreeFiveMultiples(1)); // 0





// ******** Power Set Count ********

function PowerSetCount(arr) {

    let result = Math.pow(2, arr.length)
    return result;

}
console.log(PowerSetCount([5, 6])) // 4
console.log(PowerSetCount([1, 2, 3])) // 8
console.log(PowerSetCount([1, 2, 3, 4])) // 16




// ***********************************
// Shall we show you the power set too ? ? ? 
function PowerSet(arr) {

    let result = []

    // Power Set'in içereceği toplam Set sayısı
    let total = Math.pow(2, arr.length);
    // console.log("total:",total) // total: 16 > (PowerSetCount'ın cevabı: 2**n)

    // 0 - 2**n'e kadar her bir değer arasında döngü
    for (let i = 0; i < total; i++) {

        let resultSet = [];
        // Power Set'e eklediğimiz kümemiz

        let num = i.toString(2) // tam sayıyı ikiliye çevirecek
        // console.log("num:",num) // 0 1 10 11 100 101 110 111 1000 1001 1010 1011 1100 1101 1110 1111

        //ikili sayıyı doldur, böylece 1 örneğin 001 olucek
        while (num.length < arr.length) {
            num = "0" + num;
        }

        // ikili sayıdaki 1"lerle eşleşen kümeyi oluştur
        for (let x = 0; x < num.length; x++) {
            if (num[x] === "1") {
                resultSet.push(arr[x])
            }
        }
        result.push(resultSet);
        // console.log("resultSet:",resultSet) 
        // [] [4] [3] [3,4] [2] [2, 4] [2, 3] [2, 3, 4] [1] [1, 4] [1, 3] [1, 3, 4] [1, 2]  [1, 2, 4] [1, 2, 3] [1, 2, 3, 4]

        //şimcik bu seti sonucumuza ekleyelüm 
    }

    return result;
};
console.log(PowerSet([1, 2, 3, 4]))




// ******** Even Pairs ********

function EvenPairs(str) {

    let result = false;
    let counter = 0;

    for (let i = 0; i < str.length; i++) {

        // isNaN kullanmamın sebebi sadece numaraları almak istediğimden dolayı.
        if (isNaN(str[i])) {
            counter = 0;
        } else if (str[i] % 2 !== 0) {
        } else if (str[i] % 2 === 0) {
            counter++;
        }

        if (counter === 2) {
            result = true;
        }
    }

    return result;

};
console.log(EvenPairs("3gy41d216")) // true
console.log(EvenPairs("f09r27i8e67")) // false
console.log(EvenPairs("f178svg3k19k46")) // true





// ******** Simple Evens  ********

function SimpleEvens(num) {

    let string = num.toString()
    let result = true

    for (let i = 0; i < string.length; i++) {
        if (string[i] % 2 !== 0) {
            return result = false;
        }
    }

    return result;
}
console.log(SimpleEvens(4602225)) // false
console.log(SimpleEvens(22222022)) // true
console.log(SimpleEvens(208646464652)) // false



// Method - 2:
function SimpleEvens(num) {

    let result = num.toString().split("").map((num) => {
        return (Number(num) % 2 === 0);
    });

    return result.every((e) => e === true)

};
console.log(SimpleEvens(4602225)) // false
console.log(SimpleEvens(22222022)) // true
console.log(SimpleEvens(208646464652)) // false





// ********  Happy Numbers  ********

function HappyNumber(num) {

    let single = num.toString().split("").map(m => m ** 2)
    console.log(single)
    // HappyNumber(1) => [1]
    // HappyNumber(10) => (2) [1, 0]
    // HappyNumber(20) => (2) [4, 0]
    // HappyNumber(22) => (2) [4, 4]
    // HappyNumber(101) => (3) [1, 0, 1]

    let arr = single.reduce(
        (a, b) => a + b
        );

    if (arr == 1) {
        return true
    } else {
        return false
    }

};
console.log(HappyNumber(1)) // true
console.log(HappyNumber(10)) // true
console.log(HappyNumber(20)) // false
console.log(HappyNumber(22)) // false
console.log(HappyNumber(101)) // false






// ******** Fibonacci Checker  ********

function FibonacciChecker(num) {

    let arr = [];
    let res;

    for (let i = 0; ; i++) {
        arr.push(i < 2 ? i : arr[i - 2] + arr[i - 1]) //Fibonacci
        if (arr[i] === num) {
            res = "yes";
            break;
        }
        if (arr[i] > num) {
            res = "no";
            break;
        }
    }
    return res;

}
console.log(FibonacciChecker(5)) // yes
console.log(FibonacciChecker(34)) // yes
console.log(FibonacciChecker(54)) // no




// Method - 2 ( "Sorry for mess :)" )

function FibonacciChecker(num, a=0, b=1) {

    if( num === 0 || num === 1){
        return "yes";
    }

    let nextNumber = a+b;

    // example : FibonacciChecker(5)
    console.log("a+b=",a, "+", b)
    // a+b= 0 + 1
    // a+b= 1 + 1
    // a+b= 1 + 2
    // a+b= 2 + 3

    // FibonacciChecker(5) => console.log("nextNumber:",nextNumber) // 1 2 3 5 
    // FibonacciChecker(6) => console.log("nextNumber:",nextNumber) // 1 2 3 5 8

    if(nextNumber === num){
        return "yes";
    }
    else if (nextNumber > num){
        return "no";
    }

    return FibonacciChecker(num, b, nextNumber)
};
console.log(FibonacciChecker(5)) // yes
console.log(FibonacciChecker(6)) // no
console.log(FibonacciChecker(34)) // yes
console.log(FibonacciChecker(54)) // no







// ******** Number Reverse ********
function NumberReverse(str) {

    return str.toString().split(" ").reverse().join(" ")

}
console.log(NumberReverse("1 2 3")) // 3 2 1
console.log(NumberReverse("10 20 50")) // 50 20 10





// ********  ********







