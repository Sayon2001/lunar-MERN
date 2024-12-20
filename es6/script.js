// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i)

// function fun() {
//     return 0;
// }

// const fun = () => 0;


//obj desturcturing ====>

// const obj = {
//     fullName: "John",
//     age: 30,
//     occupation: "Developer"
// };

// const { fullName, age, occupation } = obj;

// console.log(age)


//spread and rest operator =====>

//rest
// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [6, 7, 8, 9, 10]

// const [first, second, ...others] = arr1;
// console.log("first:", first)
// console.log("second:", second)
// console.log("others:", others)

// //spread
// const arr3 = [...arr2, 11, 12, 13, 14, 15]

// console.log(arr3);


//usecase
// const user = {
//     name: "John",
//     email: "john@gmail.com",
//     password: "john@123"
// }

// const { password, ...info } = user;
// // res.send(info)

//Template literals =====>

// const name = "Sagar";
// const age = 20;
// const occupation = "Developer";
// const address = "Dharan";

// const str = "Welcome " + name + " your age is " + age + " and you are a " + occupation + " and you live in " + address;
// const str2 = `Welcome ${name} your age is ${age} and you are a ${occupation} and you live in ${address}`

// console.log(str);
// console.log(str2);

