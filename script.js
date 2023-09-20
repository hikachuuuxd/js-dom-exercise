function findAverage(array) {
    return array.length == 0 ? 0 : array.reduce((acc, value) => acc + value) / array.length    
  }
 
  function litres(time) {
    const liters = time * 0.5;
    return Math.floor(liters)
  }

  function booleanToString(b){
    return b.toString()
  }

  function getGrade (s1, s2, s3) {
    /*
      grade : 
      90 - 100 = A
      80 - 89 = B
      70 - 79 = C
      60 - 69 = D
      0 - 59 = F
    */

    const average = (s1 + s2 + s3) / 3;
    let grade;
    if(average >= 90 || average == 100){
      grade = 'A'
    }else if(average >= 80 && average < 90){
      grade = 'B'
    }else if(average >= 70 && average < 80){
      grade = 'C'
    }else if(average >= 60 && average < 70){
      grade = 'D'
    }else{
      grade = 'F'
    }

    return grade;
  }


  function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((acc, value) => acc + value) / classPoints.length;

  }


function basicOp(operation, value1, value2)
{
  // eval adalah function untuk operasi dalam bentuk string
  return eval(value1 + operation + value2)
}

const reverseSeq = n => {
  let result = [];
  for(n; n >= 1; n--){
    result.push(n)
  }
  return result;
};

function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
}


function smash (words) {
   return words.map(word => word).join(' ');
};

function greet(name){
  return "Hello, "+name+" how are you doing today?"
}

function removeExclamationMarks(s) {
  let arr  = []
  for(const el of s){
    if(el != '!') arr.push(el)
  }
  return arr.join('');
}

function digitize(n) {
  let arr = [];
  let number = n.toString()
  for(const el of number){
    arr.push(parseInt(el))
  }
  return arr.reverse();
}

function rowSumOddNumbers(n) {
  let first = (n * n) - (n - 1);
  let sum = 0;
  let count = 0;

  while(count < n){
    if(first % 2 !== 0){
      sum += first;
      count++;
    }
  first++;
  }
  return sum;

  // more simple code
  // return n*n*n
}

function getMiddle(s)
{
  let arr = [];
  for(const el of s){
    arr.push(el)
  }
  const genap = arr.length / 2 - 1
  const ganjil = arr.length / 2 

  if(arr.length % 2 == 0 && arr.length > 2){
    return arr.slice(genap, -genap).join('') 
  }else if(arr.length <= 2){
    return arr.join('')
  }else{
    return arr.slice(ganjil, -ganjil).join('')
  }

  
}

function repeatStr (n, s) {
  let rs = ''
  for(let i = 0; i < n; i++){
    rs += s
  }
  return rs;
}

function abbrevName(name){
let [first, last] = name.split(' ')
return first[0].toUpperCase() + '.' + last[0].toUpperCase()
}


function solution(str, ending){
  const splitStr = str.split ("");  
  const eLength = ending.length ;

  let akhir = eLength != 0 ? splitStr.slice(-eLength).join('') : ''
 
  if(akhir == ending){
    return true
  }

  //short code
  // return str.endsWith(ending);
}

var number = function(busStops){
  let naik =  busStops.map(e => e[0] ).reduce((curr, val) => curr + val)
  let turun =  busStops.map(e => e[1] ).reduce((curr, val) => curr + val)

  return naik - turun

  //short code
  // busStops.reduce((rem, [on, off]) => rem + on - off, 0);
}

function squareSum(numbers){
  return numbers.length != 0 ? numbers.map(e => e*e ).reduce((curr, val) => curr + val) : 0

  //short code
  // return numbers.reduce((sum, val) => sum + (val * val), 0 )
}

function boolToWord( bool ){
   return bool ? "Yes" : "No"
}

function friend(friends){
  return friends.filter(friend => friend.length == 4)
}

function past(h, m, s){
  /*
    1 hours = 60 menit x 60 detik = 3600
    1 minute = 60 detik 
    1 detik = 1 detik
  */
    let hours = h * 3600;
    let minute = m * 60
    return ( hours + minute + s ) * 1000
}

function findNeedle(haystack) {
  const index = haystack.indexOf("needle")
  return `found the needle at position ${index}`
}

function squareDigits(num){
  const number = num.toString().split('').map(e => e*e).join('')
  return parseInt(number)
}

function highAndLow(numbers){
 let number = numbers.split(' ').map(e => parseInt(e)).sort((a, b) => b - a)
 return number[0] + ' ' + number[number.length - 1]
}

var summation = function (num) {
  let result = 0;
    for(let i =1; i <= num; i++){
      result += i
    }

  return result;
}

function getAboveThreshold(numbers, threshold) {
    return numbers.filter(e => e >= threshold)
}

function findMaxSecondNumber(numbers) {
    let number =  numbers.sort((a,b) => b - a)
    return number[1]
}


function accum(s) {
  let huruf = s.split('').reverse()
let arr = []
let result = []
for(let i = 0; i < s.length; i++){
    for(let j = i + 1; j <= s.length; j++){
       arr.push(huruf[i])
    }
    
}

for(let i = 0; i < arr.length; i++){
  arr[i] == arr[i + 1] ? result.push(arr[i].toLowerCase()) : result.push(arr[i].toUpperCase())

}

return result.reverse().join('')

}



function solution(str){
  return str.split('').reverse().join('')
}

class SmallestIntegerFinder {

  findSmallestInt(args) {
    const small =  args.sort((a, b) => a - b ) 
    return small[0]
  }
}

function findShort(s){
  let words = s.split(' ').map(e => e.length).sort((a, b) => a - b)
  return words[0]
}

function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9
}

function SeriesSum(n)
{
  if(n == 0) return '0.00'
  let start = 1
  for(let i = 1; i < n; i++){
    start += 1/(1+3*i)
  }
  return start.toFixed(2)
}     

function positiveSum(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      sum
    }else{
       sum += arr[i]
    }
  }
  return sum;
}

function bmi(weight, height) {
  /*
  calculate
  bmi = weight / height2

  rules
  if bmi <= 18.5 return "Underweight"
  0 - 18
  if bmi <= 25.0 return "Normal"
  19 - 25
  if bmi <= 30.0 return "Overweight"
  26 - 30
  if bmi > 30 return "Obese
  31 - 100
  */
  const total = weight / (height * height);
  let result;
  if(total <= 18.5){
    result = "Underweight"
  }else if(total <= 25.0 && total > 18.5){
    result = "Normal"
  }else if(total <= 30.0 && total > 25.0 ){
    result = "Overweight"
  }else{
    result = "Obese"
  }
  return result;
}

function oddOrEven(array) {
  if(array.length == 0) return "even"
  const num = array.reduce((index, val) => index + val)
  return num % 2 == 0 ? "even" : "odd"
}

var countSheep = function (num){
  let sheep = ' sheep...'
  let result = ''
  for(let i = 1; i <= num; i++){
    result += i + sheep
  }
  return result
}

function likes(names) {
  let rs;
  if(names.length == 0){
    rs = "no one likes this"
  }else if(names.length == 1){
    rs = names.join('') + " likes this"
  }else if(names.length == 2){
    rs = `${names[0]} and ${names[1]} like this`
  }else if(names.length == 3){
    rs = `${names[0]}, ${names[1]} and ${names[2]} like this`
  }else{
    rs = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

function getCount(str) {
  return str.split('').filter(e => e == 'a' || e == 'i' || e == 'u' || e == 'e' || e == 'o').length
}

function makeNegative(num) {
  return num == 0 || num < 0 ? num : -num
}

function high(x){
  const words = x.split(' ');
  const num = Array(words.length).fill(0);
  for (let i = 0; i < words.length; ++i) {
    const word = words[i];
    for (let j = 0; j < word.length; ++j) {
      num[i] += word.charCodeAt(j) - 96;
    }
  }
  const nums = num.slice()
  const high = nums.sort((a, b) => b - a)
  const index = num.indexOf(high[0])
  return words[index];
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft ? true : false
};

function reverseWords(str) {
  let words = str.split('').reverse().join('')
  return words.split(' ').reverse().join(' ');
}

function disemvowel(str) {
  return str.split('').filter(e => e != 'a' && e != 'A' && e != 'i' && e != 'I' && e != 'u' && e != 'U' && e != 'e' && e != 'E' && e != 'o'&& e != 'O').join('');
// with regex
//   return str.replace(/[aeiou]/gi, '');
}
function alphabetPosition(text) {
  const words = text.toLowerCase().replace(/[^a-z]/gi, '').split('');
  const num = Array(words.length).fill(0);
  for (let i = 0; i < words.length; ++i) {
    const word = words[i];
    for (let j = 0; j < word.length; ++j) {
      num[i] = word.charCodeAt(j) - 96;
    }
  }
  return words
}

function DNAStrand(dna){
  /*
    A = T
    T = A
    G = C
    C = G
  */

 let word = dna.split('')
 return word.map(e => {
  if(e == "A"){
    return e = "T"
  }else if(e == "T"){
    return e = "A"
  }else if(e == "G"){
    return e = "C"
  }else if(e == "C"){
    return e = "G"
  }
 
 }).join('')

 // use regex
 /*
 return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
 */
}

function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b) => a - b).slice(0, 2).reduce((curr, val) => curr + val)
}

function opposite(number) {
  return number >= 0 ? -number : -number 
}

function towerBuilder(floors) {
  let space,star, tower = []; 
  for (i = 1; i <= floors; i++)
  {
   space = " ".repeat(floors - i); 
   star = "*".repeat ((2*i) - 1); 
   tower.push(`${space}${star}${space}`); 
  } 
return tower; 

}

console.log(towerBuilder(3))

