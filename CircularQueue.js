import Queue from "./Queue.js";

class CircularQueue extends Queue {
     hotPotato(number) {
        while (this.size() > 1) {
           for (let i = 0; i < number; i++) {
               this.enqueue(this.dequeue())
           }

            console.log(`${this.dequeue()} was eliminated`)
        }

        return this.dequeue()
    }
}

export default CircularQueue