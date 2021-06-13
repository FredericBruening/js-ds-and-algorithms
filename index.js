/**
 * STACK
 */

console.log("---Testing Stack---")

import Stack from "./Stack.js"
const stack = new Stack()

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

import radixConverter from "./RadixConverter.js"

console.log(radixConverter(10))
console.log("assert radixConverter, converts to binary by default: ", "1010" === radixConverter(10))
console.log("assert radixConverter converts octal: ", "20" === radixConverter(16, 8))
console.log("assert radixConverter converts hexadecimal: ", "FF" === radixConverter(255, 16))


/**
 * QUEUE
 */

console.log("--- Testing Queue ---")

import Queue from "./Queue.js"
const queue = new Queue()

console.log("assert queue is empty: ", true === queue.isEmpty())

queue.enqueue('John')
console.log("assert queue can enqueue one item: ", 1 === queue.size())

queue.enqueue('Jack', 'Jason')
console.log("assert queue can enqueue multiple items: ", 3 === queue.size())
console.log("assert queue is not empty: ", false === queue.isEmpty())

console.log("assert queue can dequeue an item: ", 'John' === queue.dequeue() && 2 === queue.size())

/* PRIORITY QUEUE */

console.log("--- Testing Priority Queue ---")

import PriorityQueue from "./PriorityQueue.js"
const priorityQueue = new PriorityQueue()

console.log("assert queue is empty: ", true === priorityQueue.isEmpty())

priorityQueue.enqueue('John', 2)
priorityQueue.enqueue('Jack', 1)
priorityQueue.enqueue('Camila', 1)
console.log("assert priority queue enqueues items in the correct priority: ", 'Jack' === priorityQueue.dequeue().item)


/**
 * CIRCULAR QUEUE
 */

console.log("--- Testing Circular Queue with the Hot potato game ---")

import CircularQueue from "./CircularQueue.js"
const circularQueue = new CircularQueue()

circularQueue.enqueue('John', 'Jack', 'Camila', 'Carl', 'Ingrid')
console.log(circularQueue.hotPotato(2), 'is the winner')


/**
 * LINKED LIST
 */

console.log("--- Testing LinkedList ---")

import LinkedList from "./LinkedList.js"
const linkedList = new LinkedList()

linkedList.append(1)

console.log("assert the LinkedList can append an element: ", linkedList.size() === 1)
console.log("assert the LinkedList can remove the first element: ", linkedList.removeAt(0) === 1)

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
console.log("assert the LinkedList can remove the third element: ", linkedList.removeAt(2) === 3)

console.log("assert the LinkedList can insert an element at a specified position: ",
    linkedList.insert(2, 4) === true &&
    linkedList.size() === 3
)

console.log("assert the LinkedList gives the index of an existing element: ", linkedList.indexOf(4) === 2)
console.log("assert the LinkedList can remove an element: ", linkedList.remove(4) === 4 && linkedList.size() === 2)



/**
 * DOUBLY LINKED LIST
 */

console.log("--- Testing LinkedList ---")

import DoublyLinkedList from "./DoublyLinkedList.js"
const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.append(1)
doublyLinkedList.append(2)
doublyLinkedList.append(3)

console.log("assert doublyLinkedList can append elements: ", doublyLinkedList.size() === 3)
doublyLinkedList.insert(1, 10)
console.log("assert doublyLinkedList can insert element at any position: ", doublyLinkedList.size() === 4 && doublyLinkedList.indexOf(10) === 1)
console.log("assert doublyLinkedList can remove element at any position: ", doublyLinkedList.removeAt(1) === 10)
console.log("assert doublyLinkedList has a tail: ", doublyLinkedList.tail.element === 3)
