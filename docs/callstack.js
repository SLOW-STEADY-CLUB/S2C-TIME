//1
function a() {
    setTimeout(()=>{
        for(let i = 0; i < 9000000000000000000000000000000000000000000000; i++);
    },[3000] )
    
    return 1;
}
//2
function b() {
    return a() + 1;
}
//3
function c() {
    return b() + 1;
}
console.log('실행됐다.');
const result = c();
console.log(result)
//하 3-2-1, 3
//선 1-2-3, 3
//수 1-2-3, 3
console.clear();
console.log(rive);
console.log(sieo);
// console.log(dog);
var rive;
var sieo = 'cute';
let dog;
dog = 'mung';

console.log(typeof noah);