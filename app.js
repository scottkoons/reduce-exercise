// ------------ extractValue -------------
// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

// const arr = [
//   { name: "Elie" },
//   { name: "Tim" },
//   { name: "Matt" },
//   { name: "Colt" },
// ];

function extractValue(arr, key) {
  return arr.reduce(function (acc, nextVal) {
    acc.push(nextVal[key]);
    return acc;
  }, []);
}

// console.log(extractValue(arr, "name"));
// extractValue(arr, "name"); // ['Elie', 'Tim', 'Matt', 'Colt']
// ---------------------------------------

// ------------ vowelCount -------------
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str) {
  //   console.log(str);
  const vowels = "aeiou";
  const splitStr = str.split("");
  //   console.log(splitStr);
  return splitStr.reduce(function (acc, nextLetter) {
    let lowerCase = nextLetter.toLowerCase();
    // console.log(lowerCase);
    if (vowels.indexOf(lowerCase) !== -1) {
      if (acc[lowerCase]) {
        acc[lowerCase]++;
      } else {
        acc[lowerCase] = 1;
      }
    }
    return acc;
  }, {});
}

// console.log(vowelCount("I Am awesome and so are you"));
// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
// ---------------------------------------

// ------------ addKeyAndValue -------------
// Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

// const arr = [
//   { name: "Elie" },
//   { name: "Tim" },
//   { name: "Matt" },
//   { name: "Colt" },
// ];

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, nextVal, index) {
    acc[index][key] = value;
    return acc;
  }, arr);
}

// console.log(addKeyAndValue(arr, "title", "Instructor"));
// ---------------------------------------

// ------------ partition -------------
// Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.

// Define first example of cb function and arr
function isEven(val) {
  return val % 2 === 0;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Define second example of cb function and arr
function isLongerThanThreeCharacters(val) {
  return val.length > 3;
}
const names = ["Elie", "Colt", "Tim", "Matt"];

// partician function
function partition(arr, cb) {
  return arr.reduce(
    function (acc, nextVal) {
      if (cb(nextVal)) {
        acc[0].push(nextVal);
      } else {
        acc[1].push(nextVal);
      }
      return acc;
    },
    [[], []]
  );
}

console.log(partition(arr, isEven));
// partition(arr, isEven); // [[2,4,6,8], [1,3,5,7]];

console.log(partition(names, isLongerThanThreeCharacters));
// partition(names, isLongerThanThreeCharacters); // [['Elie', 'Colt', 'Matt'], ['Tim']]
