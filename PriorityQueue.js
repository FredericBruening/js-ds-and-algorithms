/* A Queue is an ordered collection that follows the FIFO principle (First In First Out) */

import Queue from "./Queue.js";

class PriorityQueue extends Queue {

    /* Adds a new item at the corresponding position of the queue */
    enqueue(item, priority) {
        const queueElement = new PriorityQueueElement(item, priority)

        if (this.isEmpty()) {
            this.items.push(queueElement)
        } else {
            let added = false

            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].priority > priority) {
                    this.items.splice(i, 0, queueElement)
                    added = true

                    break
                }
            }

            if (! added) {
                this.items.push(queueElement)
            }
        }
    }
}

class PriorityQueueElement {
    constructor(item, priority) {
        this.item = item
        this.priority = priority
    }
}

export default PriorityQueue