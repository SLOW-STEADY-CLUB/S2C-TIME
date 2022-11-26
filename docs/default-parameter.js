// //default parameters 기본 매개변수

// // const 수정 =  (nick, age) => {
// //     return `안녕 나는 ${nick}이고, 나이는 ${age}살 이야`;
// //     // return `안녕 나는 ${nick}이고, 나이는 ${age}살 이야`;
// // }
// const 수정 =  (nick, age) => {
//     return  "별명은 " + nick + "나이는" + age + "살 이야";
//     // return `안녕 나는 ${nick}이고, 나이는 ${age}살 이야`;
// }

// console.log(수정('토리', 52));

//array object

console.clear()
let study = {
    수정: '멍청',
    선용: '천재',
    하경: '바보'
};
// console.log(study.선용);
let {수정, 선용: 영건, 하경} = study;


console.log(선용); 