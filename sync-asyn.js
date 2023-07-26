//Snchronous JavaScript - Code Example

console.log('First');
console.log('Second');
console.log('Third');

//OUTPUT - First
//         Second
//         Third


//Asynchronous Javascript - Code Example

console.log('First');

// Set timeout for 2 seconds
setTimeout(() => console.log('Second'), 2000);

console.log('Third');

// OUTPUT - First
//          Third
//          Second

