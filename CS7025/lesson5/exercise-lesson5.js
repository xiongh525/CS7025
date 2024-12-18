//1
let artists = ["Taylor Swift", "Lana Del Rey", "Charli XCX", "The 1975", "Phoebe Bridgers"];
console.log("Original Array of Artists:", artists);

console.log("First artist:", artists[0]);
console.log("Third artist:", artists[2]);


//2
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matrix[0][0]);
  console.log(matrix[1][2]);
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
  


  //3
let originalArray = [1, 2, 3, 4];

let shallowCopy1 = originalArray.slice();
console.log(shallowCopy1);

let shallowCopy2 = [...originalArray];
console.log(shallowCopy2);

let shallowCopy3 = [].concat(originalArray);
console.log(shallowCopy3);

shallowCopy1[0] = 10;
console.log(originalArray);
console.log(shallowCopy1);


//4
let arr = [];

arr.push(1); // [1]
arr.push(2); // [1, 2]
arr.push(3); // [1, 2, 3]
console.log(arr);

arr.pop(); // [1, 2]
console.log(arr);

arr.unshift(0); // [0, 1, 2]
console.log(arr);

arr.shift(); // [1, 2]
console.log(arr);

arr.length = 5; 
console.log(arr);
