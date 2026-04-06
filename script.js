var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var num1 = "5";
var num2 = "10";
var word = "Hello World!";
var float = "6.7";
var UsPoppulation = 348675601;
if (month < 10) 
    {
        month = "0" + month;
    }
if (day < 10) 
    {
        day = "0" + day;
    }
document.getElementById('date-display').innerHTML = "<h2> Today is " + month  + "/" + day + "/" + year + " <br></h2>";
document.getElementById('conversion-display').innerHTML += "<h2> Original vaue: '" + num1 + "' Converted: '" + Number(num1) + "' isNAN: '" + Number.isNaN(Number(num1)) + "' isInteger: '" + Number.isInteger(Number(num1)) + "'<br></h2>";
document.getElementById('conversion-display').innerHTML += "<h2> Original vaue: '" + num2 + "' Converted: '" + Number(num2) + "' isNAN: '" + Number.isNaN(Number(num2)) + "' isInteger: '" + Number.isInteger(Number(num2)) + "'<br></h2>";
document.getElementById('conversion-display').innerHTML += "<h2> Original vaue: '" + word + "' Converted: '" + Number(word) + "' isNAN: '" + Number.isNaN(Number(word)) + "' isInteger: '" + Number.isInteger(Number(word)) + "'<br></h2>";
document.getElementById('conversion-display').innerHTML += "<h2> Original vaue: '" + float + "' Converted: '" + Number(float) + "' isNAN: '" + Number.isNaN(Number(float)) + "' isInteger: '" + Number.isInteger(Number(float)) + "'<br></h2>";
document.getElementById('math-display').innerHTML += "<h2> 5 + 10 = " + (5 + 10) + "<br></h2>";
document.getElementById('math-display').innerHTML += "<h2> 5 * 10 = " + (5 * 10) + "<br></h2>";
document.getElementById('math-display').innerHTML += "<h2> The current us population" + UsPoppulation.toLocaleString()+ "<br></h2>";