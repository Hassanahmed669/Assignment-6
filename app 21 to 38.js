

// ALL Questions are Answered and all codes are working perfect. //



// CHAPTER 21 to 38




// Q1
// var firstName = prompt("Please enter your first name!");
// var lastName = prompt("Please enter your last name!");

// var fullName = firstName+lastName;
// alert("Welcome to my website " + firstName + " " + lastName);




// Q2
// var model = prompt("Your favorite mobile model:");

// var len = model.length;
// document.write("My favorite phone is: " + model + "<br>");
// document.write("Length of string: " + len);




// Q3
// var country = "Pakistani";
// var index = country.indexOf("n");

// document.write("String: " + country + "<br>");
// document.write("Index of 'n': " + index);




// Q4
// var text = "Hello World";
// var segIndex = text.lastIndexOf("l");

// document.write("String: " + text + "<br>");
// document.write("Last index of 'l': " + segIndex);




// Q5
// var country = "Pakistani";
// var firstChar = country.charAt(3)

// document.write("String: " + country + "<br>");
// document.write("Character at index of 3: " + firstChar);




// Q6
// var firstName = prompt("Please enter your first name! ");
// var space = " ";
// var lastName = prompt("Please enter your last name!");

// var fullName = firstName.concat(space, lastName);
// alert("Welcome to my website " + fullName);




// Q7
// var str = "Hyderabad";
// var rep = str.replace("Hyder", "Islam");

// document.write("City: " + str + "<br>")
// document.write("After replacement: " + rep);




// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep = message.replace(/and/g, "&");

// document.write("Message: " + message + "<br>");
// document.write("After replacement: " + rep);




// Q9
// var str = "472";
// var typeStr = typeof str;
// var num = parseInt(str);
// var typeNum = typeof num;

// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeStr + "<br>");
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeNum);




// Q10
// var userInput = prompt("Please enter your favorite food:");

// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + userInput.toUpperCase() + "<br>");




// Q11
// var userInput = prompt("Please enter your favorite food:");
// var firstChar = userInput.slice(0,1);
// var otherChar = userInput.slice(1);

// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + firstChar.toUpperCase() + otherChar.toLowerCase() + "<br>");




// Q12
// var num = 35.36;
// var str = num.toString();
// var rmDot = str.replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("Result: " + rmDot);




// Q13 incomplete
// var name = prompt("Enter your username!");

// for (i = 0; i < name.length; i++){
//     if (name[i] == '@' || name[i] == '.' || name[i] == ',' || name[i] == '!'){
//         alert("Please enter a valid username.");
//         break;
//     }
// }
// alert("You have entered this username: " + name)




// Q14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/maam?")
// var input = userInput.toLowerCase();

// var a = arr.indexOf(input);
// if (a != -1)
// 	{
// 		document.write(arr[a] + " is <b> available </b> at index " + a + " in our bakery")
// }
// else
// 	{
// 		document.write("We are sorry. " + userInput + " is <b>not available </b> in our bakery")
// }





// // Q15
// function alphaNumericPassword(str) {

// 	var patt1 = /[a-zA-Z]/g; 
// 	var patt2 = /[0-9]/g; 
// 	var result1 = str.match(patt1);
// 	var result2 = str.match(patt2);
// 	var fLetter = str.charAt(0);

// 	if ((result1 != null) && (result2 != null)){
// 		if( fLetter.match(/[0-9]/g) == null){
// 			if(str.length > 6){
// 				document.write("Password is good enough!");
// 			}
// 			else{
// 				document.write("Please enter at least 6 characters long password!");
// 			}
// 		}
// 		else{
// 			document.write("Please don't start with numbers!");
// 		}
// 	}
// 	else{
// 		document.write("Please enter password with alphabets and numbers <br>");
// 	}
// }
	
// var str = prompt("Please input your password");

// alphaNumericPassword(str);





// Q16
// var university = "University of Karachi";

// for(i = 0; i < university.length; i++){
//     document.write(university[i] + "<br>")
// }




// Q17
// var str = prompt("Please enter any word and this program will give you the last character of that word!");
// var lastChar = str[str.length - 1];

// document.write("User input: " + str + "<br>");
// document.write("Last character of input: " + lastChar);




// Q18
// var str = "The quick brown fox jumps over the lazy dog";
// var smallStr = str.toLowerCase();
// var count = 0;

// for (var i = 0; i < smallStr.length; i++) {
//     if (smallStr.slice(i, i + 3) === "the") {
//         count = count + 1;
//     }
// }

// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrence(s) of word 'the' ");





// CHAPTER 26 to 30





// Q1
// var num = parseFloat(prompt("Please enter a number:"));
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num)

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + round + "<br>");
// document.write("Floor value: " + floor + "<br>");
// document.write("Ceil value: " + ceil + "<br>");





// Q2
// var num = parseFloat(prompt("Please enter a number:"));
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num)

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + round + "<br>");
// document.write("Floor value: " + floor + "<br>");
// document.write("Ceil value: " + ceil + "<br>");




// Q3
// var num = parseInt(prompt("Please enter a number:"));
// var abs = Math.abs(num);

// document.write("The absolute value of " + num + " is " + abs);




// Q4
// var randNumber = Math.random() * 6;
// var ceil = Math.ceil(randNumber);

// document.write("Random dice value: " + ceil + "<br>");




// Q5
// var randNumber = Math.random() * 2;
// var ceil = Math.ceil(randNumber);


// if(ceil == 1){
//     document.write(ceil + "<br>Random coin value: Tails");
// }   

// else{
//     document.write(ceil + "<br>Random coin value: Heads");
// }




// Q6
// var randNumber = Math.random() * 100;
// var ceil = Math.ceil(randNumber);

// document.write("Random number between 1 to 100: " + ceil );




// Q7
// var weight = parseFloat(prompt("Enter your weight in kilograms:"));

// document.write("The weight of user is " + weight + " kilograms");




// Q8
// var userInput = parseInt(prompt("Enter a number between 1 to 10:"));
// var randNumber = Math.random() * 10;
// var ceil = Math.ceil(randNumber);

// if (userInput == ceil){
//     document.write("Congrats! you guess the right number");
// }
// else{
//     document.write("Try Again")
// }




// CHATPER 31 to 34




// Q1
// var rightNow = new Date();
// document.write(rightNow);




// Q2
// var rightNow = new Date();
// var theMonth = rightNow.getMonth();
// var monthName = ["January", "Feberary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var nameOfMonth = monthName[theMonth]; 

// alert("Current month: " + nameOfMonth);




// Q3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// alert("Today is " + nameOfToday);




// Q4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// if(theDay == 0 || theDay == 6){
//     document.write("It's Fun day");
// }
// else{
//     document.write(nameOfToday);
// }




// Q5
// var rightNow = new Date();
// var theDate = rightNow.getDate();

// if( theDate < 16 ){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }





// Q6
// var rightNow = new Date();
// var millsSince = rightNow.getTime();
// var theMinutes = millsSince/60;

// document.write("Current Date: " + rightNow + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millsSince + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + theMinutes);




// Q7
// var rightNow = new Date();
// var theHour = rightNow.getHours();

// if( theHour < 12 ){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }




// Q8
// var laterDate = new Date("December 31, 2020"); 

// document.write("Later date: " + laterDate)




// Q9
// var today = new Date();
// var doomsday = new Date("June 18, 2015");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff = msToday - msDoomsday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// var floor = Math.floor(dDiff);

// document.write(floor + " days have been passed since 1st Ramandan, 2015");




// Q10
// var startDate = new Date("Jan 1,2015");
// var endDate = new Date("Dec 05, 2015 22:50:16");
// var startMS = startDate.getTime();
// var endMS = endDate.getTime();
// var diffMS = endMS - startMS;
// var dDiff =  diffMS / (1000 * 60);
// var ceil = Math.ceil(dDiff);

// document.write("On reference date " + endDate + ", " + ceil + " seconds had passed since beginning of 2015");




// Q11
// var startDate = new Date();
// var oneHourAgo = 1000 * 60 * 60;
// var finalDate = new Date(startDate - oneHourAgo);

// document.write("Current date: " + startDate);
// document.write("<br>1 hour ago, it was " + finalDate);




// Q12
// var startDate = new Date();
// var hundredYear = 1000 * 60 * 60 * 24 * 365 * 100;
// var finalDate = new Date(startDate - hundredYear);

// alert("Current date: " + startDate + "\n100 years back, it was " + finalDate);




// Q13
// var userAge = parseInt(prompt("Enter your age"));
// var startDate = new Date();
// var userOldage = 1000 * 60 * 60 * 24 * 365 * userAge;
// var finalDate = new Date(startDate - userOldage);
// var birthYear = finalDate.getFullYear();

// document.write("Your age is " + userAge + "<br>Your birth year is " + birthYear)




// Q14
// var customName = prompt("Customer Name: ");
// var currentMonth = prompt("Month: ");
// var numberofUnits = parseInt(prompt("Number of units: "));
// var chargesPerunit = parseInt(prompt("Charges per units: "));
// var lateCharges = 350;

// var netAmount = numberofUnits * chargesPerunit;
// var grossAmount = ((+netAmount) + (+lateCharges))


// document.write("<h2>K-Electric Bill</h3>");
// document.write("Customer Name: <b>" + customName + "</b><br>")
// document.write("Month: <b>" + currentMonth + "</b><br>")
// document.write("Number of units: <b>" + numberofUnits + "</b><br>")
// document.write("Charges per unit: <b>" + chargesPerunit + "</b></br><br>")
// document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>")
// document.write("Late payment surcharge: <b>" + lateCharges + "</b><br>")
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b>")





// CHAPTER 35 to 38




// Q1
// function tellTime() {
//     var now = new Date();
//     document.write(now);
//     }

// tellTime();





// Q2
// function fullName() {
//     var firstName = prompt("Enter your First name: ");
//     var lastName = prompt("Enter your Last name: ");

//     document.write("Welcome to my page " + firstName + " " + lastName);
//     }

// fullName();





// Q3
// function sum() {
//     var firstNumber = parseInt(prompt("Enter your First name: "));
//     var secondNumber = parseInt(prompt("Enter your Last name: "));
//     var sumOftwoNumbers = ((+firstNumber) + (+secondNumber));

//     return sumOftwoNumbers;
//     }

// document.write("This is the Sum: " +sum());





// Q4
// function calculator(val1, val2, sign){

//     if (sign === '+'){
//         alert((+val1)+(+val2));
//     }
//     else if (sign === '-'){
//         alert(val1-val2);
//     }
//     else if (sign === '*'){
//         alert(val1*val2);
//     }
//     else if (sign === '/'){
//         alert(val1/val2);
//     }
//     else if (sign === '%'){
//         alert(val1/val2*100);
//     }
// }

// var val1 = prompt("Enter your 1st value: ");
// var val2 = prompt("Enter your 2nd value: ");
// var sign = prompt("Enter operator: ");

// calculator(val1, val2, sign);





// Q5
// function square(x) {
//     return x * x;
//  }

// var value = parseInt(prompt("Enter any number and this program will return you the square of it:"));
// var sqr = square(value);

// document.write("Square of " + value + " is: " + sqr);





// Q6
// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }

// var value = parseInt(prompt("Enter any number and this program will return you the factorial of it:"));
// var result = factorialize(value);

// document.write(result);





// Q7
// function counting(start, end) {
//     document.write("<h3>Your Desired Counting: </h3>")
//     for(i = start; i <= end; i++){
//         document.write(i + "<br>")
//     }
// }

// var start = parseInt(prompt("Enter starting point for counting:"));
// var end = parseInt(prompt("Enter ending point for counting:"));

// counting(start, end);





// // Q8
// function calculateHypotenuse(base, perp){

//     function calculateSquare(x){

//         var sqr = x * x;
//         return sqr;
//     }

//     var b = calculateSquare(base);
//     var p = calculateSquare(perp);

//     var hypo = ((+b) + (+p));
//     var final = Math.pow(hypo, 2);

//     document.write("The base is " + base + " and the perpendicular is " + perp + "<br>");
//     document.write("The hypotenuse is " + final);

// }

// var base = parseFloat(prompt("Please enter the base: "));
// var perp = parseFloat(prompt("Please enter the perpendicular: "));

// calculateHypotenuse(base, perp);





// Q9
// // Arguments as value
// function rec(width, height){
//     var recArea = width * height;
//     return recArea;
// }

// document.write("This is the rectangle area by arguments as value: " +  rec(10, 15));

// // Arguments as variables
// function rec(width, height){
//     var recArea = width * height;
//     return recArea;
// }

// var width = parseInt(prompt("Please enter the width of rectangle:"));
// var height = parseInt(prompt("Please enter the height of rectangle:"));

// document.write("This is the rectangle area by arguments as variable: " +  rec(width, height));




// Q10
// function palinDrome(word){
//     var reverseOrder = '' ;

//     for (i = word.length; i > 0;  i--){
//         reverseOrder += word[i-1];
//     }
//     if (word === reverseOrder){
//         document.write(word + " is a palindrome word.");
//     }
//     else{
//         document.write(word + " is not a palindrome word.");
//     }
// }

// var word= prompt("Please enter a word then this program will tell you it's palindrome or not!");
// var lowerCaseWord = word.toLowerCase();

// palinDrome(lowerCaseWord);




// // Q11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }

// var str = prompt("Please type string and this program will converts the first letter of each word of the string in upper case");
// document.write(uppercase(str));




// Q12
// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;

//     for(var i = 0; i < strSplit.length; i++){

//         if(strSplit[i].length > longestWord){
//         longestWord = strSplit[i].length;
//         var longest = strSplit[i];
//         }
//     }
//     return longest;
// }

// var line = "Web Development Tutorial";

// document.write(line + "<br><br>");
// document.write("This is the longest word in the above string: " + findLongestWord(line));




// // Q13
// function sameLetter(str, ch){
    
//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (smallStr.slice(i, i + 1) === ch) {
//             count = count + 1;
//         }
//     }
//     return count;
// }

// var str = prompt("Please enter any string:");
// var ch = prompt("Please enter a character to check the occurence of this word in the above string:");
// var smallStr = str.toLowerCase();
// var smallch = ch.toLowerCase();


// document.write("Text: " + str + "<br>");
// document.write("There are " + sameLetter(smallStr, smallch) + " occurrence(s) of word: " + ch);




// // Q14
// function calcCircumference(radius){

//     var cir = 2 * 3.142 * radius;
//     document.write(radius + " is is the radius of the circle and the circumference of this circle is: " + cir + "<br>")
    
// }

// function calcArea(radius){

//     var area = 3.142 * (radius*radius);
//     document.write(radius + " is the radius of circle and the circumference of this circle is: " + area + "<br>")
// }

// var radius = parseFloat(prompt("Please enter the radius of the circle: "));

// calcCircumference(radius);
// calcArea(radius);













