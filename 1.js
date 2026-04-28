// console.log('hello Node.js')
// BOM
// console.log(window);
// console.log(history);
// console.log(location);
// // DOM
// console.log(document);


// console.log('i love you')
// setTimeout(() => {
//   console.log('love too')
// }, 1000)

// // global顶级对象
// console.log(global);
// console.log(globalThis === global);

// let buf = Buffer.alloc(10);
// console.log(buf);

// let buf2 = Buffer.allocUnsafe(10);
// console.log(buf2);

// let buf3 = Buffer.from('hello')
// console.log(buf3);

let buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf4.toString());