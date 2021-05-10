class Stack {
    constructor() {
        this.items = []
    }

    /* Adds one or several items to the top of the stack */
    push(...elements) {
        this.items.push(...elements)
    }

    /* Removes the top element from the stack, and returns it */
    pop() {
        return this.items.pop()
    }

    /* It returns the top element of the stack, without modifying the stack*/
    peek() {
       return this.items[this.items.length - 1]
    }

    /* Returns true if the stack does not contain any elements or false otherwise */
    isEmpty() {
       return this.items.length === 0
    }

    /* Removes all elements from the stack */
    clear() {
       this.items = []
    }

    /* Returns the count of elements in the stack */
    size() {
       return this.items.length
    }

    print() {
        return this.items.toString()
    }
}

export default Stack