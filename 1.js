var num3 = 10; // basically giving type to a variable
function calc(num1, num2) {
    return num1 + num2;
}
// console.log("file: 1.ts:8 ~ calc('3',5);:", calc('3',5));
// give error=== 1.ts:7:50 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log("file: 1.ts:8 ~ calc('3',5);:", calc(3, 5));
// to compile this => tsc 1.ts
