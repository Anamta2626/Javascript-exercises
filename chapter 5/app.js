// ...........Question 01...........
// let num1 = prompt('Enter 1st number')
// let num2 = prompt('Enter 2nd number')
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// let sum = num1 + num2;
// document.write('Sum of ' + num1 + ' and '+ num2 + ' is ' + sum);


// ...........Question 02...........
// let num1 = prompt('Enter 1st number')
// let num2 = prompt('Enter 2nd number')
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// let difference = num1 - num2;
// let product = num1 * num2;
// let division = num1 / num2;
// let modulus = num1 % num2;
// document.write('Difference of ' + num1 + ' and '+ num2 + ' is ' + difference + "<br>");
// document.write('Product of ' + num1 + ' and '+ num2 + ' is ' + product + "<br>");
// document.write('Division of ' + num1 + ' and '+ num2 + ' is ' + division + "<br>");
// document.write('Modulus of ' + num1 + ' and '+ num2 + ' is ' + modulus);


// ...........Question 03..........
// let value;
// document.write('Value after variable declaration is '+ value + '<br>')
// value = 5;
// document.write('Initial value : '+ value + '<br>')
// value++;
// document.write('Value after increment is : '+ value + '<br>')
// let sum = value + 7;
// document.write('Value after addition is : ' + sum + '<br>')
// sum--;
// document.write('Value after decrement is : ' + sum + '<br>')
// let rem = sum % 3;
// document.write('The remainder is : ' + rem)



// ...........Question 04..........
// let t_price = 600;
// let t_cost = t_price * 5;
// document.write('Total cost to buy 5 tickets to a movie is '+ t_cost + 'PKR')



// ...........Question 05..........
// let num = prompt("Enter a number to display its multiplication table:");
// num = parseInt(num);
// if (!isNaN(num)) {
//     document.write("<h3>Multiplication Table of " + num + "</h3>");
//     for (var i = 1; i <= 10; i++) {
//         document.write(num + " x " + i + " = " + (num * i) + "<br>");
//     }
// } else {
//     document.write("Invalid input! Please enter a valid number.");
// }



// ...........Question 06..........
        // let celsius_Temp = 37; 
        // let fahrenheit_Temp = (celsius_Temp * 9/5) + 32;
        // document.write(celsius_Temp + "°C is " + fahrenheit_Temp + "°F<br>");
        // let fahrenheit = 86; 
        // let celsius = (fahrenheit - 32) * 5/9;
        // document.write(fahrenheit + "°F is " + celsius.toFixed(2) + "°C");



// ...........Question 07..........
// let price1 = 650;
// let price2 = 100;
// let sh_charges = 100;
// let q_item1 = prompt('Enter the quantity of 1st item: ')
// let q_item2 = prompt('Enter the quantity of 2nd item: ')
// let cost1 = price1 * q_item1;
// let cost2 = price2 * q_item2;
// let T_cost = cost1 + cost2 + sh_charges;
// document.write('Price of item 1 is ' + price1 + '<br>')
// document.write('Quantity of item 1 is ' + q_item1 + '<br>')
// document.write('Price of item 2 is ' + price2 + '<br>')
// document.write('Quantity of item 2 is ' + q_item2 + '<br>')
// document.write('Shipping charges ' + sh_charges + '<br>')
// document.write('<br>Total cost of your order is ' + T_cost)



// ...........Question 08..........
// let T_marks = 980;
// let marksObtained = prompt('Enter your obtained marks: ')
// let per = (marksObtained/T_marks) * 100 
// document.write('Total marks: ' + T_marks + '<br>')
// document.write('Marks Obtained: ' + marksObtained + '<br>')
// document.write('Percentage: ' + per + '%')



// ...........Question 09..........
// const usdToPkr = 104.80;
// const sarToPkr = 28.00;
// let usdAmount = 10;
// let sarAmount = 25;
// const totalPkr = (usdAmount * usdToPkr) + (sarAmount * sarToPkr);
// document.write(`Total currency in PKR: ${totalPkr}`);



// ...........Question 10..........
// let number = 4;
// let answer = ((number + 5) * 10) / 2;
// document.write(answer)


// ...........Question 11..........
// let currentYear = prompt('Enter current year: ')
// let birthYear = prompt('Enter your birth year: ')
// let age = currentYear - birthYear;
// document.write("<h1>", "Age Calculator" , "</h1>")
// document.write('Current Year: ' , currentYear, "<br>")
// document.write('Birth Year: ', birthYear, "<br>")
// document.write('Your age is: ', age)



// ...........Question 12..........
// let radius = 5; 
// const pi = 3.142;
// let circumference = 2 * pi * radius;
// let area = pi * radius * radius;
// document.write("<h1>", "The Geometrizer" , "</h1>")
// document.write("Radius of a circle: ", radius, "<br>")
// document.write("The circumference is: ", circumference, "<br>")
// document.write("The area is: ", area)



// ...........Question 13..........
// let favSnack = prompt('Enter your favourite snack');
// let myAge = prompt('Enter your age');
// let maxAge = prompt('Enter your estimated maximum age')
// let snacksPerDay = prompt('Enter Amount of snacks per day')
// let age = maxAge - myAge;
// let answer = age * snacksPerDay;
// document.write("<h1>", "The Lifetime Supply Calculator" , "</h1>")
// document.write("Favourite Snack: ", favSnack , "<br>")
// document.write("Current age: ", myAge , "<br>")
// document.write("Estimated Maximum Age: ", maxAge , "<br>")
// document.write("Amount of snacks per day: ", snacksPerDay , "<br>")
// document.write("You will need ", answer ," ", favSnack, " to last you until the ripe old age of ", maxAge)