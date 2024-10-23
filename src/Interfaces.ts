// Interfaces allows us to define structure of an object

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;

// user1 = new Person("Max");
user1 = new Person();
// user1.name = "Manu";

user1.greet("Hi there - I am");
console.log(user1);

// ///interface as function

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let adds: AddFn;

adds = (n1: number, n2: number) => {
  return n1 + n2;
};
