// SUPER KEYWORD: if we have a derived class and in that derived class we have a constructor defined whether default or parameterized then it is necessary to put super keyword in the der ived class's constructor.super ke andar argument pass krdenge toh parent class ke parameterizeed constructor ke parameter ko value mil jayegi .....agar hm derived class ke koi fucntion me parent class ke function ka use krna chah rhe toh direct nhi use kr skte ..blki .super.eat() ...agar
// ASYNC AWAIT: await only affects the execution flow within the async function where it's declared. It doesn't have any direct impact on the code outside the function's scope.await apne environment i.e apne function scope next line pe jaane se rokta hai ...but await has no effect
//              out of function scope..jo cheez hm resolve me send krte hain, wo.then me milti hai.aur jo cheez ham reject me bhejte hain, wo hme.catch me milti hai..async await ke liye saare ko ek function me daal ke..iife is used when  unneccessary function call krne parti hai ...
//RESOLVE AND REJECT :THESE ARE THE CALLBACK PROVIDED BY JS
//CREATE PROMISE IN JS :
//                       function getData (dataId) {
//                           return  new Promise( (resolve, reject)=>{
//                               setTimeout(() => {
//                                   if (dataId === 1) {
//                                       resolve("Data fetched successfully");
//                                   }
//                                   else {
//                                       reject("Data not found");
//                                   }
//                               },5000)

//                           });
//                       }
//                       getData(5)
//                                 .then((ans) => { console.log(ans) }) //will print success
//                                 .catch((error)=>{console.log(error)}) //will print error




// NEW KEYWORD VS PROMSE.RESOLVE:In JavaScript, when creating a promise, you have two main options: using the new Promise constructor or using static methods like Promise.resolve() or Promise.reject().When you use new Promise, you're creating a new Promise object explicitly by invoking the Promise constructor.This approach allows you to define the executor function (the function passed to the Promise constructor) inline. The executor function receives two arguments: resolve and reject, which are functions provided by the JavaScript runtime to handle the promise's state.You have full control over the promise's state and can manually call either resolve or reject based on the outcome of some asynchronous operation.Using Promise.resolve() or Promise.reject():These methods are static methods of the Promise object.Promise.resolve() returns a promise that is resolved with the given value.Promise.reject() returns a promise that is rejected with the given reason (error).These methods are useful when you want to create a promise that resolves or rejects immediately with a specific value, without performing any asynchronous operations inside the executor function.
// class A{
//     // constructor() {
//     //     this.brand="BMW"
//     // }
//     eat() {
//         console.log("I am eating")
//     }
// }
// class B extends A{
//     constructor() {
//         //super()
//         this.brand="Mercedes"
//     }
//     sleep() {
//         console.log("I am sleeping")
//     }
// }
// const obj=new B()

//import { get } from "mongoose"
// obj.eat()
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data Id", dataId)
//             resolve("success")
//         }, 4000)
//     })
// }
// async function getAllData() {
//     await getData(1)
//     console.log("got data 1")
//     await getData(2)
//     console.log("got data 2")
//     await getData(3)
//     console.log("got data 3")
// }
// getAllData()
// console.log("after all data")


const obj = {
    name: "John",
    sayName: function () {
        console.log(this.name);
    }
};

const boundSayName = obj.sayName.bind(obj); // Bind this to obj
boundSayName(); // This will log "John" (correct output)


const obj2 = {
    name: "Jo",
    sayName: function () {
        const innerFunc = () => {
            console.log(this.name); // "this" here refers to the outer context's "this"
        };
        innerFunc();
    }
};

obj2.sayName(); // This will log "John"

const obj3 = {
    name: "Joh",
    sayName: function () {
        const innerFunc = function () {
            console.log(this.name); // This will log "John"
        }.bind(this); //Without the .bind(this), the this inside innerFunc would refer to the global object (in non-strict mode) or undefined (in strict mode) because innerFunc is a standalone function and not a method of any object. This behavior is due to how functions work in JavaScript: the value of this inside a function depends on how the function is called.
        innerFunc();
    }
};

obj3.sayName(); // This will log "John"

console.log('\n\n\n')
console.log('new line')
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const BoundPerson = Person.bind(null, 'John');
const john = new BoundPerson(25);
console.log(john); // Output: find output ?Person { name: 'John', age:25 }
