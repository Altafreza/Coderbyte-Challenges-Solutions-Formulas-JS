#  <strong> Coderbyte Challenges, Solutions and Formulas
![Coderbyte](https://media.giphy.com/media/AhjXalGPAfJg4/giphy.gif)

<br>

## First Factorial 
<br>
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
<br>
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.

For the test cases, the range will be between 1 and 18 and the input will always be an integer.

<br>

Examples

```

Input: 4

Output: 24


Input: 8

Output: 40320

```
<br>
<hr>

<br>

## First Reverse 
<br>
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
<br>
 For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.


<br>

Examples

```

Input: "coderbyte"

Output: etybredoc



Input: "I Love Code"

Output: edoC evoL I

```
<br>
<hr>

<br>

## Find Intersection
<br>

Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.


<br>

Examples

```

Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]

Output: 1,4,13



Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]

Output: 1,9,10

```
<br>
<hr>


<br>

## Longest Word
<br>

Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"


<br>

Examples

```

Input: "Hello world123 567"

Output: world123



Input: "fun&!! time"

Output: time

```
<br>
<hr>

<br>

## Questions Marks
<br>

Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.


<br>

Examples

```

Input: "aa6?9"
Output: false


Input: "acc?7??sss?3rr1??????5"
Output: true

```
<br>
<hr>
<br>

## Prime Time
<br>

Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.

<br>

Examples

```
Input: 19
Output: true


Input: 110
Output: false

```
<br>
<hr>
<br>

## Consonant Count 
<br>

Have the function ConsonantCount(str) take the str string parameter being passed and return the number of consonants the string contains.

<br>

Examples

```

Input: "Hello World"
Output: 7


Input: "Alphabets"
Output: 6

```
<br>
<hr>
<br>

## Check Nums
<br>

Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.

<br>

Examples

```

Input: 3 & num2 = 122
Output: true


Input: 67 & num2 = 67
Output: -1

```
<br>
<hr>
<br>

## Palindrome Two
<br>

Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. 

For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.

<br>

Examples

```

Input: "Noel - sees leon"
Output: true


Input: "A war at Tarawa!"
Output: true

```
<br>
<hr>
<br>

## Ex Oh
<br>

Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. 

For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

<br>

Examples

```

Input: "xooxxo"
Output: true


Input: "x"
Output: false

```
<br>
<hr>
<br>

## Consecutive
<br>

Have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. 

For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements.  

<br>

Examples

```

Input: new int[] {5,10,15}
Output: 8


Input: new int[] {-2,10,4}
Output: 10

```
<br>
<hr>
<br>

## Swap Case
<br>

Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.  

<br>

Examples

```

Input: "Hello-LOL"
Output: hELLO-lol


Input: "Sup DUDE!!?"
Output: sUP dude!!?

```
<br>
<hr>
<br>

## ThreeFive Multiples
<br>

Have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5 that are below num. For example: if num is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, so your program should return 23. The integer being passed will be between 1 and 100.

<br>

Examples

```

Input: 6
Output: 8


Input: 1
Output: 0

```
<br>
<hr>
<br>

## Power Set Count
<br>

Have the function PowerSetCount(arr) take the array of integers stored in arr, and return the length of the power set (the number of all possible sets) that can be generated. For example: if arr is [1, 2, 3], then the following sets form the power set:

[] <br>
[1] <br>
[2] <br>
[3] <br>
[1, 2] <br>
[1, 3] <br>
[2, 3] <br>
[1, 2, 3] <br>

You can see above all possible sets, along with the empty set, are generated. Therefore, for this input, your program should return 8.


<br>

Examples

```

Input: new int[] {1, 2, 3, 4}
Output: 16


Input: new int[] {5, 6}
Output: 4

```
<br>
<hr>
<br>

## Even Pairs
<br>

Have the function EvenPairs(str) take the str parameter being passed and determine if a pair of adjacent even numbers exists anywhere in the string. If a pair exists, return the string true, otherwise return false. For example: if str is "f178svg3k19k46" then there are two even numbers at the end of the string, "46" so your program should return the string true. Another example: if str is "7r5gg812" then the pair is "812" (8 and 12) so your program should return the string true.


<br>

Examples

```

Input: "3gy41d216"
Output: true


Input: "f09r27i8e67"
Output: false

```
<br>
<hr>
<br>