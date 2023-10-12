const LinkedList = () => {
    const head = null;
    const size = 0;
    const tail = null;

    const prepend = (val) => {
        const newNode = Nodee(val);
        if (head !== null) {     // If element with head already exists
            newNode.next = head; // Assign newNode pointer to existing head
            head = newNode;      // Make newNode new head of list
        } else {                 // If list is empty, asign head to new element
            head = newNode;
        }
        size++;
    }

    const append = (val) => {
        // Concept (If you keep track of the tail will the loop be nessissary for appending)?
        const newNode = Nodee(val);
        // If no list asign new node as start & end
        if (head === null) {
            head = newNode;
            tail = newNode;
        }
        
        // if (head !== null) {        // Else if list already exists, loop & find the last node
        //     let current = head;
        //     while (current.next !== null) {
        //         current = current.next;
        //     }
        //     current.next = newNode; // After the loop, current = last node
        // }

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

    return { prepend, append, getSize, getHead }
}

const Nodee = (val, next = null) => {
    let value = val;
    let nextNode = next;

    return {val, next}
}

// const john = Nodee("john");

// john.val = "Sam";
// john.next = "Changed";

// console.log(john.getVal(), john.getNext());