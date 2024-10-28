// /////Generic types

// // 1.Array
// const names: Array<string> = [];
// // names[0].split(" ");

// // 2.Promise
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// //////Generic function
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max", hobbies: ["Sport"] }, { age: 30 });

console.log(mergeObj.age);
console.log(mergeObj.name);

///////Count and Describe Generic function type

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 elemnt";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " element.";
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi there.."));

// console.log(countAndDescribe(["Sports", "Cooking"]));

// //// The 'Keyof' Constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value:" + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

//// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Max");
textStorage.addItem("Renu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Max" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Renu" });

// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

// /////Generic Utility Type

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  //   return { title: title, description: description, completeUntil: date };

  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Renu");
// names.pop();
