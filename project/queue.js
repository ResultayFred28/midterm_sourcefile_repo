class Queue{
    constructor(){
        this.items = [];
    }
    /* enqueue(element, priority){
        const newItem = {element , priority};
        let added = false;

        for(let i = 0; i < this.items.length;i++){
            if(newItem.priority < this.items[i].priority){
                this.items.splice(i,0,newItem);
                added = true
                break;
            }
        }

        if(!added){
            this.items.push(newItem);
        }
    } */

    enqueue(element){
        return this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }
    front(){
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    toString(){
        return this.items.map(item => item.element).toString();
    }
}

 /* const queues  = new Queue();

queues.enqueue('russ', 3);
queues.enqueue('fred',5);
queues.enqueue('eric',1);
queues.enqueue('jared',2);


/* console.log(queues.front());
console.log(queues.size());

console.log(queues.dequeue());
console.log(queues.dequeue()); */
function hotPotato(names,passes){
    const queues = new Queue()

    for(neyga in names){
        queues.enqueue(neyga);
    }

    while(queues.size() > 1){
        for(let i = 0; i < passes; i++){
            queues.enqueue(queues.dequeue());
        }
        console.log(` ${queues.dequeue()}, was elimanated`);
    }

    return queues.dequeue();
}

const names = ['fred' , 'jared' , 'russ', 'eric'];

const winner = hotPotato(names, 7);
console.log(`the winner is ${winner}`);

