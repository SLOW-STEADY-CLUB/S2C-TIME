// //default parameters 기본 매개변수

// // const react =  (nick, age) => {
// //     return `안녕 나는 ${nick}이고, 나이는 ${age}살 이야`;
// //     // return `안녕 나는 ${nick}이고, 나이는 ${age}살 이야`;
// // }
// const react =  (nick, age) => {
//     return  "별명은 " + nick + "나이는" + age + "살 이야";
//     // return `안녕 나는 ${nick}이고, 나이는 ${age}살 이야`;
// }

// console.log(react('javascript', 12));

//array object

console.clear()
let study = {
    react: '😀',
    javascript: '🪙',
    typescript: '🤓'
};
// console.log(study.react);
let {react, javascript: JS, typescript} = study;


console.log(react); 