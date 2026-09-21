class Stack{
     constructor(){
     this.items = [];
    }
    push(element){
        return this.items.push(element);   
    }

    pop(){
        return this.items.pop()
    }
    

    peek(){
        return this.items[this.items.length - 1];
    }



    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }

    clear(){
        return this.items = [];
    }

    toString(){
        return this.items.toString();
    }
}


// function decimaldiv2(decimalNumber){
//     const remainders = new Stack();
//     let number = decimalNumber;
//     let binary = '';

//     while(number > 0){
//         remainders.push(Math.floor(number % 2));
//         number = Math.floor(number / 2);
//     }
//     while(!remainders.isEmpty()){
//         binary += remainders.pop();
//     }
//     return binary;
// }
function baseConverter(decimalNumber, base){
    const remainders = new Stack();
    const digit = '0123456789ABCDEF';
    let number = decimalNumber;
    let result = '';

    while(number > 0){
        remainders.push(Math.floor(number % base));
        number = Math.floor(number / base);
    }
    while(!remainders.isEmpty()){
        result += digit[remainders.pop()];
    }
    return result;
}


console.log(baseConverter(16, 8));