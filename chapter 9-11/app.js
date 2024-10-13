// ...............Question 01..................
// let userInput = prompt('Enter your city name')
// if(userInput === "karachi" || userInput === "Karachi"){
//     alert('Welcome to City of Lights')
// }


// ...............Question 02..................
// let gender = prompt("Enter your Gender")
// if(gender === "Male" || gender === "male"){
//     alert("Good Morning Sir.")
// }
// else if(gender === "Female" || gender === "female")
//     {
//     alert("Good Morning Madam.")
// }



// ...............Question 03..................
// let color = prompt("Enter any traffic signal color e.g (Red, Yellow, Green)")
// if(color === "Red" || color === "red"){
//     alert("Must Stop")
// }
// else if(color === "Yellow" || color === "yellow"){
//     alert("Ready to move")
// }
// else if(color === "Green" || color === "green"){
//     alert("Move now")
// }
// else{
//     alert("Please enter traffic signal color")
// }





// ...............Question 04..................
// let userInput = prompt('Enter remaining fuel  in car in litres')
// userInput = parseInt(userInput);
// if (userInput < 0.25){
//     alert('Please refill the fuel in your car')
// }



// ...............Question 05..................
// .......Part a.........
// let a = 4;
// if (++a === 5){
//     alert('Given condition for variable a is true.')
// }
// document.write("Message displayed")


// .......Part b.........
//  var b = 82;
//  if (b++ === 83){
//     alert("Given condition for variable b is true.")
//  }
// document.write("Message not displayed")


// .......Part c.........
//  var c = 12;
//  if(c++ === 13){
//     alert("Condition 1 is true.");
//  }
//  if (c === 13){
//     alert("Condition 2 is true.");
//  }
//  if(++c < 14){
//     alert("Condition 3 is true.");
//  }
//  if(c === 14){
//     alert("Condition 4 is true.");
//  }
//  document.write("Message of condition 2 and 4 is displayed")



// .......Part d.........
// var materialcost = 20000;
// var laborCost = 2000;
// var totalCost = materialcost + laborCost;
// if (totalCost === laborCost + materialcost) {
//     alert("The cost equals")
// }
// document.write("Message displayed")


// .......Part e.........
// if(true){
//     alert("true")
// }
// if(false){
//     alert("false")  
// }
// document.write("Message displayed of condition true")



// .......Part f.........
// if ("car" < "cat"){
//     alert("car is smaller than cat")
// }
// document.write("Message displayed")



// ...............Question 06..................
// let obt_marks = parseInt(prompt("Enter obtained marks of your three subjects"))
// let totalMarks = 300;
// let per = parseInt((obt_marks/totalMarks) * 100);
// document.write("Total Marks : " + totalMarks + "<br>")
// document.write("Marks obtained : " + obt_marks+ "<br>")
// document.write("Percentage : " + per +"%"+ "<br>")
// if( per >= 80){
//     document.write("Grade : A-one" + "<br>")
//     document.write("Remarks : Excellent" + "<br>")
// }
// else if( per >= 70){
//     document.write("Grade : A" + "<br>")
//     document.write("Remarks : Good" + "<br>")
// }
// else if( per >= 60){
//     document.write("Grade : B" + "<br>")
//     document.write("Remarks : You need to improve" + "<br>")
// }
// else if( per < 60){
//     document.write("Grade : Fail")
//     document.write("Remarks : Sorry" + "<br>")
// }







// ...............Question 07..................
// let secret_num = 2;
// let userInput = parseInt(prompt("Guess the secret number from 1 to 10"));
// if( userInput === secret_num){
//     alert("Bingo! Correct answer.");
// }
// else if(userInput === secret_num + 1){
//     alert("Close enough to the correct answer.");
// }
// else{
//     alert("Oops, Wrong answer.");
// }




// ...............Question 08..................
// let userValue = parseInt(prompt("Enter any number"));
// let rem = userValue % 3;
// if (rem === 0){
//     alert("Given number is divisible by 3")
// }else{
//     alert("Given number is not divisible by 3")
// }



// ...............Question 09..................
// let num = parseInt(prompt("Enter a number"))
// let rem = num % 2;
// if(rem === 0){
//     alert("Even number")
// }else{
//     alert("odd number")
// }



// ...............Question 10..................
// let T = parseInt(prompt("Enter Temperature"))
// if (T > 40){
//     alert("It is too hot outside.")
// }
// else if(T > 30){
//     alert("The weather today is normal.")
// }
// else if(T > 20){
//     alert("Today's weather is cool.")
// }
// else if(T > 10){
//     alert("OMG! Today's weather is so cool.")
// }



// ...............Question 11..................
// let firstNumber = parseFloat(prompt("Enter the first number:"));
// let secondNumber = parseFloat(prompt("Enter the second number:"));
// let operation = prompt("Enter the operation (+, -, *, /, %):");
// let result;
// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//     } else {
//         result = "Error! Division by zero.";
//     }
// } else if (operation === "%") {
//     result = firstNumber % secondNumber;
// } else {
//     result = "Invalid operation!";
// }
// alert("The result is: " + result);



