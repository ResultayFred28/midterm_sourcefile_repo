class Node{
    constructor(element){
        this.element = element;
        this.next = null; 
    }

}

class LinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
    }

    append(element){
        const node = new Node(element);

        if(this.head === null){
            this.head = node;
        }
        else{
            let current = this.head;

            while(current.next !== null){
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }

    insert(position,element){
        if(position < 0 || position > this.length) return false;

        const node = new Node(element);
        let current = this.head;

        if(position === 0){
            node.next = current;
            this.head = node;
        }
        else{
            let previous = null;
            let index = 0;

            while(index++ < position){
                previous = current;
                current = current.next;
            }

            node.next = current;
            previous.next = node;

        }
        this.length++;
        return true;
    }

    removeAt(position){
        if(position < 0 || position >= this.length) return null;

        let current = this.head;

        if(position === 0){
            this.head = current.next;
        }
        else{
            let previous = null;
            let index = 0;

            while(index++ < position){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
        return current.element;
    }

    indexOf(element){
        let current = this.head;
        let index = 0;

        while(current !== null){
            if(current.element === element){
                return index;
            }

            current = current.next
            index++
        }
        
        return -1;
    }

    remove(element){
        const position = this.indexOf(element);
        return this.removeAt(position);
    }

    isEmpty(){
        return this.length === 0;
    }   

    size(){
        return this.length;
    }
    toString() {
        if (this.head === null) return '';
        let current = this.head;
        let string = `${current.element}`;
        
        while (current.next !== null) {
            current = current.next;
            string = `${string} -> ${current.element}`;
        }
        return string;
    }

}


const list = new LinkedList();

list.append(5);
list.append(10);
list.append(15);
list.insert(2, 20);

console.log(list.toString());
console.log(list.indexOf(15));

list.remove(20);
console.log(list.toString());
console.log(list.size());



