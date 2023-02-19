class Stack {
    constructor() {
        this.elements = [];
    }
// ilk giren elemanın son çıktığı- dizi şeklinde bir veri yapısı, iki operasyon var:push ekleme yapar
    push(elem) {
        this.elements.push(elem);
    }
// pop- en son eklenen elemanı çıkarır ve dödürür
    pop() {
        return this.elements.pop();
    }
}
let myStack = new Stack();
myStack.push("a");
myStack.push("b");
console.log(myStack.elements);

let item = myStack.pop();
console.log(item, myStack.elements);