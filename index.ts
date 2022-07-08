// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h3>${checkIfPalindrome('racecar')}</h3><h3>${checkIfPalindrome(
  'yes'
)}</h3><h3>${checkIfPalindrome('naisian')}</h3>

`;

('use strict');

function checkIfPalindrome(str: string) {
  class Stack {
    private data: string[];
    constructor() {
      this.data = [];
    }
    push(n: string) {
      this.data.push(n);
    }
    pop() {
      return this.data.pop();
    }
    size(): number {
      return this.data.length;
    }
  }

  class Queue {
    private data: string[];
    constructor() {
      this.data = [];
    }
    enqueue(n: string) {
      this.data.push(n);
    }
    dequeue(): string {
      return this.data.shift();
    }
    size(): number {
      return this.data.length;
    }
  }

  const stacky = new Stack();
  const queuey = new Queue();
  for (let i = 0; i < str.length; i++) {
    stacky.push(str[i]);
    queuey.enqueue(str[i]);
  }

  for (let i = 0; i < str.length; i++) {
    if (stacky.pop() !== queuey.dequeue()) {
      return `The word, ${str}, is not a palindrome.`;
      break;
    } else if (i === str.length - 1) {
      return `The word, ${str}, is a palindrome.`;
    }
  }
}
