// Progression #1: Greatest of the two numbers
greatest_of_two_number(p1,p2)
{if(p1>p2){
  return(p1);
}else
{
  return(p2);
}
}
console.log(greatest_of_two_number(10,12))

// Progression #2: The lengthy word
const alpha = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  var c = 0;
  for(var i =0;i<words.length;i++){
    var z = words[i].length;
    if(z>c){
    var j =words[i];
      c=z
    }
  }console.log(c);console.log(j);
}
console.log(findScaryWord(alpha))

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netprice(words){
  var c = 0;
  for(var i =0;i<words.length;i++){
  c = c+words[i];
  }
  console.log(c)
}
console.log(netprice(numbers));
//progression #3.1(bonus):
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add_multiple(words)
{
  var c = 0;
  for(var i = 0;i<words.length;i++)
  {
    if(typeof words[i]=="number")
    {
    c = c+words[i];
    }
    if(typeof words[i]=="string")
    {
    c=c+words[i].length;
    }
    if(typeof words[i]=="boolean")
    { if(words[i]==true)
         {c+=1;
         }
         else
         {
         c+=0;
         }
    }
  }
  console.log(c);
}
console.log(add_multiple(ac))
// Progression #4: Calculate the average

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netprice(words){
  var c = 0;
  for(var i =0;i<words.length;i++){
  c = c+words[i];
  }
  console.log(c/words.length)
}
console.log(netprice(numbers))

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(words){
  var c = 0;
  for(var i =0;i<words.length;i++){
  c = c+words[i];
  }
  console.log(c/words.length)
}
console.log(midPointOfLevels(numbers))


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(words){
c = 0;
for(var i  = 0;i<words.length;i++)
  {
    c=c+words[i].length;
    
  }console.log(c/words.length)
}
console.log(wordsArr)


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(words){
const unis = (value, index, self) => {
  return self.indexOf(value) === index
}

const uniqueAger = words.filter(unis)

console.log(uniqueAger)
}


// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(words,ser){
var x = words.includes(ser);
console.log(x);
}
gf = "machine";
console.log(searchElement(wordsFind,gf));
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(words,ser){
var c = 0;
  for(var i=0;i<words.length;i++)
  {if(words[i]==ser)
  {c+=1
  }
  }
console.log(x);
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix){
  var i =0,j=0;
  var c= 0;
  
  for(var  k = 0;k<10;k++)
  {
    for(var m = 0;m<10;m+2)
    {
    c = c+matrix[m][k]*matrix[m+1][k];
  }
    console.log(c);
}
}
