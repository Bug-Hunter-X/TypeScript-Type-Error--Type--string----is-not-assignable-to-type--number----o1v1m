function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

function combineGeneric<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

function isNumberArray(arr: any[]): arr is number[] {
  return arr.every(item => typeof item === 'number');
}

function combineSafe(arr1: any[], arr2: any[]): number[] | string[] {
  if (isNumberArray(arr1) && isNumberArray(arr2)) {
    return arr1.concat(arr2);
  } else if (Array.isArray(arr1) && Array.isArray(arr2)) {
    return arr1.concat(arr2);
  } else {
    throw new Error('Invalid input arrays');
  }
}

const numArr1 = [1, 2, 3];
const numArr2 = [4, 5, 6];
const strArr1 = ['a', 'b', 'c'];
const strArr2 = ['d', 'e', 'f'];

console.log(combine(numArr1, numArr2)); // Works correctly
console.log(combineGeneric(numArr1, numArr2)); // Works correctly
console.log(combineGeneric(strArr1, strArr2)); // Works correctly with generics
console.log(combineSafe(numArr1, numArr2)); // Works correctly with type guard
console.log(combineSafe(strArr1, strArr2)); // Works correctly with type guard