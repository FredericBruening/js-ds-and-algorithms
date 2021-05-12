/* A Queue is an ordered collection that follows the FIFO principle (First In First Out) */

class Queue {
    constructor() {
        this.items = []
    }

    /* Adds a new item (or several items) at the back of the queue */
    enqueue(...items) {
        return this.items.push(...items)
    }

    /* Removes the first item from the queue and returns it. (the item that is in the front of the queue) */
    dequeue() {
       return this.items.shift()
    }

    /* Returns the first item from the queue without removing it */
    front() {
       return this.items[0]
    }

    /* Returns true if the queue does not contain any elements */
    isEmpty() {
       return this.items.length === 0
    }

    /* Returns how many items the queue contains */
    size() {
        return this.items.length
    }

    print() {
        return this.items.toString()
    }
}

export default Queue