
// write a function that searches for an element in an array and returns the index, if element is not present then return -1 

const arr = [7, 4, 9, 1, 6, 34, 56];

function searchElement(arr, element){
 for(i=0; i <arr.length; i++){
  if(arr[i] === element){
    return i;
  //  return element;
  }
 }
 return -1;
}

// console.log(searchElement(arr, 56));


// write a function that returns the number of negative numbers in an array 

const arr1 = [2, -5, 7, -6, 0, -3, 2];

function countOfNegativeNumbers(arr1){
 
  let count = 0;
  for(let i=0; i<arr1.length; i++){
    if(arr1[i] < 0){
      count = count + 1;
    }
  }
   return count;
}

// console.log(countOfNegativeNumbers(arr1));


// write a function that returns the largest number in array !!


const arr2 = [7, 4, 9, 1, 6, 34, 56];
function largestNumber(arr2){

  //  let largest = -1;  if[-3, -7, -2, -5]; 
    let largest = -Infinity;

  for(let i=0; i<arr2.length; i++){
    if(arr2[i] > largest ){
      largest = arr2[i]
    }
  }
  return largest;
}

// console.log(largestNumber(arr2));

// test cases if if (arr2[i+1] > arr2[i]) { largest = arr2[i+1] }  => const arr = [7, 4, 9, 1, 6, 34, 56], const arr = [10, 20, 5, 8];



// write a function that returns the largest number in array !!

const arr3 = [7, 4, 9, 1, 6, 34, 56];

function smallestNumber(arr3){
   let smallest = arr3[0];
   for(let i=0; i<arr.length; i++){
    if(arr3[i] < smallest){
      smallest = arr3[i];
    }
   }
   return smallest;
}

// console.log(smallestNumber(arr3));


// find the second largest number in array !! 

// const arr4 = [10, 20, 20];
const arr4 = [10, 40, 50, 45, 87, 50]
function secondLargest(arr4){

  if(arr4.length < 2){
    return 'null'
  }

  let largest = -Infinity;
  let  second = -Infinity;
  for(let i=0; i<arr4.length; i++){
    if(arr4[i] > largest){
      second = largest;
      largest = arr4[i];
      
    }else if(arr4[i] > second && arr4[i] < largest){
       second = arr4[i];
    }
  }

  return second === -Infinity ? -1 : second;
}

console.log(secondLargest(arr4));

/**  corner cases !! 
  1. if array is empty 
  2. array has negative number 
  3. array has duplicates 
  4. array has infinite values !! 
  */ 
