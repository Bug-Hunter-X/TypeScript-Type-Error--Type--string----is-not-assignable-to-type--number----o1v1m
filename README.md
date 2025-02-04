# TypeScript Type Error: Type 'string[]' is not assignable to type 'number[]'

This repository demonstrates a common TypeScript type error and its solution. The error occurs when a function expecting number arrays is called with string arrays.  The solution involves using type guards or generics to handle different array types effectively.

## Bug

The `combine` function is defined to accept two number arrays and return a new array containing all elements. However, if you call it with string arrays, TypeScript will throw a type error because the `concat` method will return a string array, not a number array.

## Solution

The solution uses a type guard to check the type of the input arrays before concatenation, ensuring type safety.  Alternatively, Generics could handle various array types.

## How to reproduce

1. Clone this repository.
2. Open the project in a TypeScript environment.
3. Run the `bug.ts` file. You should see the TypeScript compiler error.
4. Run the `bugSolution.ts` file to see the corrected code. 