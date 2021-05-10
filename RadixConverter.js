import Stack from "./Stack.js";


const radixConverter = (number, radix = 2) => {
    const remaindersStack = new Stack()
    const digits = '0123456789ABCDEF'
    let baseString = ''

    while (number > 0) {
        remaindersStack.push(Math.floor(number % radix))

        number = Math.floor(number / radix)
    }

    while (!remaindersStack.isEmpty()) {
        baseString += digits[remaindersStack.pop()]
    }

    return baseString
}

export default radixConverter