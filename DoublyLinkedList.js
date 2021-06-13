class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }


    /* Appends an element to the end of the list */
    append(element) {
        element = new Node(element)

        if (this.isEmpty()) {
            this.head = element
            this.tail = element
        } else {
            let current = this.tail

            element.prev = current
            current.next = element

            this.tail = current.next
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
                if (!this.head) {
                    this.head = node
                    this.tail = node
                } else {
                    node.next = current
                    current.prev = node

                    this.head = node
                }
            } else if (position === this.size()) {
                current = this.tail
                current.next = node
                node.prev = current

                this.tail = node
            } else {
                while (position > index++) {
                    previous = current
                    current = current.next
                }

                node.next = current
                previous.next = node
                current.prev  = node
                node.prev = previous
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

    /* Removes an element at the specified position */
    removeAt(position) {
        if (position > -1 && position < this.size()) {
            let current = this.head,
                previous,
                index = 0

            if (position === 0) {
                this.head = current.next

                if (this.size() === 1) {
                    this.tail = null
                } else {
                    this.head.prev = null
                }
            } else if (position === this.size() - 1) {
                current = this.tail
                this.tail = current.prev
                this.tail.next = null
            } else {
                while (position > index++) {
                    previous = current
                    current = current.next
                }

                previous.next = current.next
                current.next.prev = previous
            }

            this.length--

            return current.element
        }

        return null
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
    constructor(element) {
        this.element = element
        this.next = null
        this.prev = null
    }
}

export default DoublyLinkedList