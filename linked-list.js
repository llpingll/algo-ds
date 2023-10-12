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
        if (head === null) {     // If list empty, assign new node as start & end
            head = newNode;
            tail = newNode;
        } else {                 // Else if list not empty
            tail.next = newNode; // Assign last element pointer to new node 
            tail = newNode;      // Assign new element as tail
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
            return console.log("Index number higher than list size");
        }
        let current = head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    const pop = () => {
        const newTail = atIndex(size - 2);
        newTail.next = null;
    }

    const containsValue = (value) => {
        let current = head;
        if (head === null) {
            return console.log("List is empty");
        }
        while (current !== null) {
            if (value === current.val) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    const find = (value) => {
        if (head === null) {
            return console.log("List is empty");
        }
        let index = 0;
        let current = head;
        while (current !== null && value !== current.val) {
            current = current.next;
            index++;
        }
        if (current === null) {
            return null;
        }
        return index;
    }

    return { prepend, append, getSize, getHead, getTail, atIndex, printList, pop, containsValue, find }
}

// Node factory
const Nodee = (val, next = null) => {
    let value = val;
    let nextNode = next;

    return {val, next}
}

// let listA = LinkedList();

// listA.prepend("a");
// listA.prepend("b");
// listA.prepend("c");

// listA.append("a");
// listA.append("b");
// listA.append("c");

// listA.printList();
// console.log(listA.find("1"));
// console.log(listA.containsValue("d"));
// listA.printList();
// console.log(listA.getSize());
// console.log(listA.getHead());
// console.log(listA.getTail());
// console.log(listA.atIndex());