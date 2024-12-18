// let a = 10;
// let b = 0;

// try {
//     if (b === 0) {
//         throw new Error("Divide by zero")
//     }
//     let result = a / b;
//     console.log(result);
// } catch (err) {
//     console.error(err, "Error")
// }

// const ab = {
//     "name": "Sayon",
//     "age": "23",
//     "occupation": "Student"
// }

// console.log(JSON.stringify(ab)) //change object into json


fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data)).catch((e) => {
        console.log(e)
    })


console.log("hello")