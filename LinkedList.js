class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    /* Appends an element to the end of the list */
    append(element) {
        element = new Node(element)

        if (this.isEmpty()) {
            this.head = element
        } else {
            let current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = element
        }

        this.length++
    }

    /* Inserts the element at a specified position */
    insert(position, element) {
        if (position >= 0 && position <= this.size()) {
            let node = new Node(element),
                current = this.head,
                previous,
                index = 0

            if (position === 0) {
                node.next = this.head
                this.head = node
            } else {
                while (position > index++) {
                    previous = current
                    current = current.next
                }

                node.next = current
                previous.next = node
            }

            this.length++

            return true
        }

        return false
    }

    /* Removes the element from the linked list */
    remove(element) {
        return this.removeAt(this.indexOf(element))
    }

    /* Return the index of the element in the linked list */
    indexOf(element) {
        let current = this.head,
            index = 0

        while (current) {
            if (current.element === element) {
                return index
            }

            index++

            current = current.next
        }

        return -1
    }

    /* Removes an element at the specified position */
    removeAt(position) {
        if (position > -1 && position < this.size()) {
            let current = this.head,
                previous,
                index = 0

            if (position === 0) {
                this.head = this.head.next
            } else {
                while (position > index++) {
                    previous = current
                    current = current.next
                }

                previous.next = current.next
            }

            this.length--

            return current.element
        }

        return null
    }

    /* Returns true if the linked list is empty */
    isEmpty() {
        return this.length === 0
    }

    /* Returns the numbers of nodes in the linked list */
    size() {
        return this.length
    }

    toString() {
        let current = this.head,
            string = ''

        while (current.next) {
            string += current.element
            current = current.next
        }

        return string
    }
}

class Node {
    constructor(element, next) {
        this.element = element
        this.next = null
    }
}

export default LinkedList