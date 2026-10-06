let text = "Learning JavaScript is fun!";
let hasJavaScript = text.includes("JavaScript");
let funPosition = text.indexOf("fun");
console.log(hasJavaScript); // true
console.log(funPosition); // 21

let originalString = " CODE BOOTCAMP ";
let transformedString = originalString.trim().toLowerCase();
let finalResult = transformedString.replace("bootcamp", "JavaScript");
console.log(finalResult); // "code JavaScript"

let sentence = "Coding is fun and educational";
let wordsArray = sentence.split(" ");
console.log(wordsArray); // ["Coding", "is", "fun", "and", "educational"]

let str = "Bootcamp";
let firstChar = str.charAt(0);
let extractedWord = str.slice(4);
console.log(firstChar); // "B"
console.log(extractedWord); // "camp"

let customerInfo = "Customer: John Doe\nOrder: Apple, Banana, Grape\nTotal: $20.50";
let customerName = customerInfo.split("\n")[0].split(": ")[1];
let orderItems = customerInfo.split("\n")[1].split(": ")[1].split(", ");
let totalPrice = customerInfo.split("\n")[2].toUpperCase();
console.log(customerName); // "John Doe"
console.log(orderItems); // ["Apple", "Banana", "Grape"]
console.log(totalPrice); // "TOTAL: $20.50"

let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
let hasJavaScriptInInput = inputString.includes("JavaScript");
let codingPosition = inputString.indexOf("Coding");
let trimmedString = inputString.trim();
let startsWithWelcome = trimmedString.startsWith("Welcome");
let endsWithToday = trimmedString.endsWith("today.");
let lowercaseString = inputString.toLowerCase();
let uppercaseString = inputString.toUpperCase();
let replacedString = trimmedString.replace("JavaScript", "coding");
let wordsArrayFromInput = trimmedString.split(" ");
let firstCharacter = trimmedString.charAt(0);
let extractedBootcamp = trimmedString.slice(
  trimmedString.indexOf("Bootcamp"),
  trimmedString.indexOf("Bootcamp") + "Bootcamp".length
);
