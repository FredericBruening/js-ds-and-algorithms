
/* STACK */

console.log("---Testing stack---")

import Stack from "./Stack.js";
const stack = new Stack();

console.log("assert stack is empty: ", true === stack.isEmpty())

stack.push(5)
console.log("assert stack can add one item: ", 1 === stack.size())

stack.push(1, 7, 3)
console.log("assert stack can add more than two items at the same time: ", 4 === stack.size())
console.log("assert stack is not empty: ", false === stack.isEmpty())

stack.pop()
stack.pop()
console.log("assert stack pops items: ", 2 === stack.size())
console.log("assert stack pops the top items: ", ("5,1" === stack.print()))

console.log("--- using Stack ---")

import radixConverter from "./RadixConverter.js";

console.log(radixConverter(10))
console.log("assert radixConverter, converts to binary by default: ", "1010" === radixConverter(10));
console.log("assert radixConverter converts octal: ", "20" === radixConverter(16, 8));
console.log("assert radixConverter converts hexadecimal: ", "FF" === radixConverter(255, 16));
