// function getCount(input) {
//   let vowelsCount = 0;
//   let inputLetters = input.split("");
  
//   const vowels = ["a","e","i","o","u"];
  
//   vowels.forEach(function(vowel) {
//     inputLetters.forEach(function(inpLetter) {
//       if (inpLetter === vowel) {
//         vowelsCount++;
//       }
//     });
//   });
  
//   return vowelsCount;
// }

// function DNAStrand(dna){
//   return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
// }

// let str = ("Hello There")
// let unreversedArr = str.split(" ")
// let reversedArr = []
// for (let i =0; i<unreversedArr.length; i++){
//   unreversedArr[i].reverse()
//   reversedArr.push(unreversedArr[i])
  
  

// };
// console.log(reversedArr)

// function wordsReverser(string){
//   let rev = string.split('').reverse().join('');
//   return rev
// }
// console.log(wordsReverser(bing bong));


// function test() {
//   var sub_array = [];
//   var super_array = [];
//   for (var i = 1; i <= 3; i++) {
//       sub_array.push(i);
//       super_array.push(sub_array.slice(0));
//   }
//   console.log(super_array);
// }
// test()



// function reverseWords(str) {
//   let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
//   return reverseWordArr.join(" ");
// }
// console.log(reverseWords("I Hate Mondays"))





// let arr = str.split('')

// for (let i =0; i++; i<arr.length)
// arr = arr.reverse()
// joinedReversed = arr.join('')
// console.log(joinedReversed)