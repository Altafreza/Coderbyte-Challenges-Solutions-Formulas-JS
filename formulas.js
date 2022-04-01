


.match(/d(\?\?\?)d/gi)  // 3 tane arka arkaya "?"
 
.match(/\d+/g) // sadece digitler

.match(/\d+|([a-zA-Z])\w+/g) // büyük küçük harf ve digitler(rakamlar)

let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let regexUpper = /[A-Z]/

let Lower = "abcdefghijklmnopqrstuvwxyz"
let regexLower = /[a-z]/

let String = "aeioubcdfghjklmnpqrstvwxyzAEIOUBCDFGHJKLMNPQRSTVWXYZ"
.match(/([a-zA-Z])\w+/g)

let Vowel = "aeiouAEIOU"
.match(/([aeiouAEIOU])/g) 

let Consonant = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"

.replace(/\s/g, ""); // virgülden önceki tüm boşlukları boş bir dize ile değiştirerek kaldırıyoruz.



// **************************************************************

let numbers =  [1, 2, 3, 4]
let string = ["cat", "dog"]

let numbersPush = numbers.push(5)
console.log("push:", numbers); // push: (5) [1, 2, 3, 4, 5]

let numbersPop = numbers.pop();
console.log("pop:", numbers); // pop: (4) [1, 2, 3, 4]

let numbersShift = numbers.shift();
console.log("shift:", numbers); // shift: (3) [2, 3, 4]

let numbersUnshift = numbers.unshift(0);
console.log("unshift:", numbers); // unshift: (4) [0, 2, 3, 4]

let stringConcat = string.concat("bird");
console.log("concat:", stringConcat); // concat: (3) ['cat', 'dog', 'bird']

let stringJoin = string.join(" +++ "); 
console.log("join:", stringJoin); // join: cat +++ dog

let numbersSlice = numbers.slice(1);
console.log("slice:", numbersSlice); // slice: (3) [2, 3, 4]

let numbersSlice2 = numbers.slice(1, 3);
console.log("slice2:", numbersSlice2); // slice2: (2) [2, 3]

let stringIndexOf = string.indexOf("a");
console.log("indexOf:", stringIndexOf); // indexOf: -1

let stringIndexOf2 = string.indexOf("cat");
console.log("indexOf2:", stringIndexOf2); // indexOf2: 0

let stringIncludes = string.includes("cat");
console.log("includes:", stringIncludes); // includes: true

let numbers2 =  [3, 5, 6, 8]

let numbers2Find = numbers2.find((f) => f % 2 === 0);
console.log("find:", numbers2Find); // find: 6

let numbers2Filter = numbers2.filter((f) => f % 2 === 0);
console.log("filter:", numbers2Filter); // filter: (2) [6, 8]

let numbers2FindIndex = numbers2.findIndex((x) => x % 2 !== 0);
console.log("findIndex:", numbers2FindIndex); // findIndex: 0 (index numarası [0], yani -3-)

let numbers2Map = numbers2.map((m) => m * 2);
console.log("map:", numbers2Map); // map: (4) [6, 10, 12, 16]

let numbers2Reduce = numbers2.reduce((a, b) => a + b);
console.log("reduce:", numbers2Reduce); // map: (6+10+12+16) => output: 22

let numbers2Every = numbers2.every((e) => e > 3);
console.log("every:", numbers2Every); // every: false

let numbers2Some = numbers2.some((s) => s > 3);
console.log("some:", numbers2Some); // some: true

let numbers2Reverse = numbers2.reverse();
console.log("reverse:", numbers2Reverse); // reverse: (4) [8, 6, 5, 3]

let line = ["a", "b", "c", "d", "e"]

let lineCharAt = line.at(-2);
console.log("at:", numbers2CharAt); // at: d

let lineCharAt2 = line.at(2);
console.log("at:", numbers2CharAt2); // at: c

let myName =  "Ali Kartal"

let lineLast = myName.lastIndexOf("a")
console.log("last:", lineLast); // last: 8

let lineSearch = myName.search("Kar")
console.log("search:", lineSearch); // search: 4

let lineReplace = myName.replace("Ali", "Aliço")
console.log("replace:", lineReplace); // replace: Aliço Kartal

let lineSplit = myName.split("")
console.log("split:", lineSplit); // split: (10) ['A', 'l', 'i', ' ', 'K', 'a', 'r', 't', 'a', 'l']

let newName = "Dean,Winchester"

let newNameSplit = newName.split(",")
console.log("split2:", newNameSplit); // split2: (2) ['Dean', 'Winchester']






//EXAMPLE-1: İki dizeyi karşılaştırıp, ortakları yeni bir dize de birleştirelim:
let no1 = [1, 2, 3, 4, 5]
let no2 = [1, 3, 5, 7, 9]

let same = no1.filter(x => no2.indexOf(x) !== -1)
console.log("same:",same); // same: (3) [1, 3, 5]

//Note: < no2.indexOf(x) !== -1 >  => Yani indexOf ile iki dizeyi karşılaştırdık 
// ve birbirine eşit olmayanlar hariç dedik, o yüzden -1 kullandık.
// indexOf() kullandığımızda, eğer eşleşmiyorsa bize -1 olarak döndürür.



//EXAMPLE-2: İki dizeyi birleştirip, en büyük sonucu döndürelim:
let no3 = [1, 2, 3, 4, 5]
let no4 = [1, 3, 5, 7, 9]

let cat = no3.concat(no4)
console.log("concat:",cat); // concat: (10) [1, 2, 3, 4, 5, 1, 3, 5, 7, 9]

let catSort = cat.sort((a,b) => b-a);
console.log("sort", catSort); // sort (10) [9, 7, 5, 5, 4, 3, 3, 2, 1, 1]

let result = catSort.find(x => x > catSort[1])
console.log("find:", result); // find: 9

// Cevap olarak 9'u bulmuş olduk. Find methodu bulduğu ilk sonucu döndürür. Başka sonuç da yok zaten :)














