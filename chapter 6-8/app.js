// ...............Question 01..................
// let a = prompt("Enter a number")
// document.write(`The value of a is: ${a} <br>`)
// let preIncrement = ++a;
// document.write(`<br>The value of ++a is: ${preIncrement} <br>`)
// document.write(`Now the value of a is: ${preIncrement} <br>`)
// let postIncrement = a++;
// let new_postInc = a;
// document.write(`<br> The value of a++ is: ${postIncrement} <br>`)
// document.write(`Now the value of a is: ${new_postInc} <br>`)
// let predecrement = --a;
// document.write(`<br> The value of --a is: ${predecrement} <br>`)
// document.write(`Now the value of a is: ${predecrement} <br>`)
// let postdecrement = a--;
// let new_postdec = a;
// document.write(`<br> The value of a-- is: ${postdecrement} <br>`)
// document.write(`Now the value of a is: ${new_postdec} <br>`)



// ...............Question 02..................
// let a = 2, b = 1;
// document.write(`a is ${a}<br>`)
// document.write(`b is ${b}<br>`)
// --a;
// --b;
// let answer_1 = a-b;
// document.write(`<br>--a = ${a} <br>`)
// document.write(`--b = ${b} <br>`)
// document.write(`<br>--a - --b = ${answer_1}<br>`)
// ++b;
// document.write(`<br>++b = ${b} <br>`)
// let answer_2 = answer_1 + b;
// document.write(`--a - --b + ++b = ${answer_2}<br>`)
// b--;
// document.write(`<br>b-- = ${b} <br>`)
// let answer_3 = answer_2 + b;
// document.write(`<br>--a - --b + ++b + b-- = ${answer_3}<br>`)
// document.write(`<br>result is ${answer_3}<br>`)




// ...............Question 03..................
// let userInput = prompt('What is your name? ')
// alert(`Hey ${userInput}, Welcome to our website`)



// ...............Question 04..................
// let number = prompt('Enter a number')
// if (number === ""){
//     number = 5;
// }
// for (let table = 1; table<=10; table++){
//     let answer = number * table;
//     document.write(`${number} x ${table} = ${answer}<br>`)
// }



// ...............Question 05..................
// const T_marks = 100;
// const totalMarks = 300;
// let sub_1 = prompt('Enter subject one')
// let sub_2 =prompt('Enter subject two')
// let sub_3 =prompt('Enter subject three')

// let marks_1 = parseInt(prompt('Enter obtained marks of subject one'))
// let marks_2 = parseInt(prompt('Enter obtained marks of subject two'))
// let marks_3 = parseInt(prompt('Enter obtained marks of subject three'))
// let totalObtMarks = parseInt(marks_1 + marks_2 + marks_3);

// let per_1 = parseInt((marks_1/T_marks)*100)
// let per_2 = parseInt((marks_2/T_marks)*100)
// let per_3 = parseInt((marks_3/T_marks)*100)
// let totalPer = parseInt((totalObtMarks/totalMarks) * 100);


// document.write(`<b>Subject Total Marks Obt Marks Percentage</b><br>`)
// document.write(`${sub_1} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  ${T_marks} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${marks_1} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${per_1}% <br>`)
// document.write(`${sub_2} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  ${T_marks} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${marks_2} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${per_2}% <br>`)
// document.write(`${sub_3} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  ${T_marks} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${marks_3} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${per_3}% <br>`)
// document.write(`<br>Total Marks : ${totalMarks} <br>`)
// document.write(`Total Obtained Marks : ${totalObtMarks} <br>`)
// document.write(`Overall Percentage : ${totalPer}% <br>`)