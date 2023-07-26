import { ArrayImpl } from "./implement/ArrayImpl";
import { LinkedListImpl } from "./implement/LinkedListImpl";
import { Queue } from "./list/Queue";
import { Stack } from "./list/Stack";

const arrayQueue = new Queue<String>(new ArrayImpl<String>());

arrayQueue.enQueue("aaa");
arrayQueue.enQueue("bbb");
arrayQueue.enQueue("ccc");

console.log(arrayQueue.deQueue());
console.log(arrayQueue.deQueue());
console.log(arrayQueue.deQueue());
console.log("===============================");

const linkedQueue = new Queue<String>(new LinkedListImpl<String>());
linkedQueue.enQueue("aaa");
linkedQueue.enQueue("bbb");
linkedQueue.enQueue("ccc");

console.log(linkedQueue.deQueue());
console.log(linkedQueue.deQueue());
console.log(linkedQueue.deQueue());
console.log("===============================");

const arrayStack = new Stack<String>(new ArrayImpl<String>());
arrayStack.push("aaa");
arrayStack.push("bbb");
arrayStack.push("ccc");

console.log(arrayStack.pop());
console.log(arrayStack.pop());
console.log(arrayStack.pop());
console.log("===============================");

const linkedStack = new Stack<String>(new LinkedListImpl<String>());
linkedStack.push("aaa");
linkedStack.push("bbb");
linkedStack.push("ccc");

console.log(linkedStack.pop());
console.log(linkedStack.pop());
console.log(linkedStack.pop());
