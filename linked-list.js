// Linked list factory
const LinkedList = () => {
    let head = null;
    let size = 0;
    let tail = null;

    const printList = () => {
        if (head === null) {
            return console.log("List empty");
        }
        let current = head;
        while (current !== null) {
            console.log(current.val);
            current = current.next;
        }
    }

    const prepend = (val) => {
        const newNode = Nodee(val);
        if (head !== null) {     // If element with head already exists
            newNode.next = head; // Assign newNode pointer to existing head
            head = newNode;      // Make newNode new head of list
        } else {                 // If list is empty, asign head & tail to new element
            head = newNode;
            tail = newNode;
        }
        size++;
    }

    const append = (val) => {
        const newNode = Nodee(val);
        // If no list, assign new node as start & end
        if (head === null) {
            head = newNode;
            tail = newNode;
        }

        if (head !== null) {        // If list not empty
            tail.next = newNode;    // Assign last element pointer to new node
            tail = newNode;         // Assign new element as tail
        }
        size++;
    }

    const getSize = () => {
        return size;
    }

    const getHead = () => {
        return head;
    }

    const getTail = () => {
        return tail;
    }

    const atIndex = (index) => {
        if (index >= size) {
            return;
        }
        let current = head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // const pop = () => {

    // }

    return { prepend, append, getSize, getHead, getTail, atIndex, printList }
}

// Node factory
const Nodee = (val, next = null) => {
    let value = val;
    let nextNode = next;

    return {val, next}
}

let listA = LinkedList();

listA.prepend("a");
listA.prepend("b");
listA.prepend("c");

// listA.append("a");
// listA.append("b");
// listA.append("c");

listA.printList();
// console.log(listA.getSize());
console.log(listA.getHead());
console.log(listA.getTail());
// console.log(listA.atIndex(1));