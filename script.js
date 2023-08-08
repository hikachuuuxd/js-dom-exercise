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
console.log(summation(8))