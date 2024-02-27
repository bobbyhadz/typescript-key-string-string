export {};

// EXAMPLE 1 - The {[key: string]: string} type in TypeScript

// 👇️ function returning index signature
// (a key-value structure with key and value strings)
function getObj(): { [key: string]: string } {
  return { name: 'Bobby Hadz', country: 'Chile' };
}

// 👇️ Interface using index signature
interface Person {
  [index: string]: string;
}

// 👇️ const p1: Person
const p1: Person = { name: 'Bobby Hadz', country: 'Chile' };

// ---------------------------------------------------

// // EXAMPLE 2 - Overriding the type of a specific property in an index signature

// interface Person {
//   [index: string]: string | number;
//   age: number;
//   name: string;
// }

// // 👇️ const p1: Person
// const p1: Person = { name: 'Bobby', country: 'Chile', age: 30 };

// ---------------------------------------------------

// // EXAMPLE 3 - Setting an index signature to readonly

// interface ReadonlyObj {
//   readonly [index: string]: string;
// }

// const obj: ReadonlyObj = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// ---------------------------------------------------

// // EXAMPLE 4 - The {[key: string]: any} type in TypeScript

// // 👇️ function returning index signature
// // (a key-value structure with key string and value any)
// function getObj(): { [key: string]: any } {
//   return { name: 'Bobby Hadz', age: 30, pizza: true };
// }

// // 👇️ Interface using index signature
// interface Person {
//   [index: string]: any;
// }

// // 👇️ const p1: Person
// const p1: Person = { name: 'Bobby Hadz', age: 30 };

// ---------------------------------------------------

// // EXAMPLE 5 - Narrowing down the type for specific properties

// interface Person {
//   [index: string]: any;
//   age: number;
//   name: string;
//   languages: string[];
// }

// // 👇️ const p1: Person
// const p1: Person = {
//   name: 'Bobby Hadz',
//   age: 30,
//   country: 'Chile',
//   languages: ['english', 'spanish'],
// };
