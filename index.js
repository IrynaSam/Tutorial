// let cost;
// const subscription = "light";

// if (subscription === "pro") {
// 	cost = 100;
// } else {
// 	cost = 0;
// }

// console.log(cost);

// let cost;
// const subscription = "light";

// if (subscription === "free") {
// 	cost = 0;
// } else if (subscription === "pro") {
// 	cost = 100;
// } else if (subscription === "premium") {
// 	cost = 500;
// } else if (subscription === "light") {
// 	cost = 50;
// } else {
// 	console.log(`Invalid subscription type - ${subscription}`);
// }

// console.log(cost); // 500

// let a = prompt("jhgfds");

// function checkPassword(password) {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
// 	let message;

// 	if (password === null) {
// 		// Change this line
// 		message = "Canceled by user!";
// 	} else if (password === ADMIN_PASSWORD) {
// 		// Change this line
// 		message = "Welcome!";
// 	} else {
// 		message = "Access denied, wrong password!";
// 	}

// 	return message;
// }
// console.log(checkPassword("jqueryismyjam"));

// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// function checkStorage(available, ordered) {
// 	let message;
// 	// Change code below this line
// 	if (ordered === 0) {
// 		message = "There are no products in the order!";
// 	} else if (ordered > available) {
// 		message = "Your order is too large, there are not enough items in stock!";
// 	} else {
// 		message = "The order is accepted, our manager will contact you";
// 	}
// 	// Change code above this line
// 	return message;
// }

// confirm(checkStorage(150, 0));

// const message = "Welcome";
// console.log(message.length); // 19

// const age = 15;
// const type = age >= 18 ? "adult" : "child";
// console.log(type);

// const num1 = 5;
// const num2 = 10;
// let biggerNumber = num1 > num2 ? `${num1}` : `${num2}`;
// console.log(biggerNumber);
// let cost;
// const subscription = "pro";

// switch (subscription) {
// 	case "free":
// 		cost = 0;
// 		break;

// 	case "pro":
// 		cost = 100;
// 		break;

// 	case "premium":
// 		cost = 500;
// 		break;

// 	default:
// 		console.log("Invalid subscription type");
// }

// console.log(cost); // 500
// let message;
// let a = 100;

// switch (a) {
// 	case 5:
// 		message = "noooo";
// 		break;
// 	case 12:
// 		message = "yes";
// 		break;
// 	case 25:
// 		message = "too much";
// 		break;
// 	default:
// 		message = "nothing";
// }
// console.log(message);
// subType = "pro";
// function checkIfCanAccessContent(subType) {
// 	const canAccessContent = (subType = "pro" || subType = "vip"); // Change this line

// 	return canAccessContent;
// }
// console.log(canAccessConten);
// function checkPassword(password) {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
// 	let message;
// 	// Change code below this line
// 	switch (password) {
// 		case null:
// 			message = "Canceled by user!";
// 			break;
// 		case password === ADMIN_PASSWORD:
// 			message = "Welcome!";
// 			break;
// 		default:
// 			message = "Access denied, wrong password!";
// 	}

// 	// Change code above this line
// 	return message;
// }

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic;
// const firstElement = courseTopic;
// const lastElement = courseTopic;

// let password = "";

// do {
// 	password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
// 	console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
// 	console.log(character);
// }
// const arr = "I will love you";
// function endsWith(string) {
// 	let stringLength = string.length;
// 	return string[stringLength - 1];
// }
// console.log(endsWith(arr));
// Change code below this line

// const bookShelf = {
// 	books: ["The last kingdom", "Haze", "The guardian of dreams"],
// 	updateBook(oldName, newName) {
// 		let index = this.books.indexOf(oldName);
// 		this.books.splice(index, 1, newName);

// 		// Change code below this line
// 		// Change code above this line
// 	},
// };
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// function calculateTotalPrice(orderedItems) {
// 	let totalPrice = 0;
// Change code below this line
// orderedItems.forEach(function calculateTotalPrice(orderedItems) {
// 	console.log(orderedItems);
// 	totalPrice += orderedItems;
// });

// for (let i = 0; i < orderedItems.length; i += 1) {
// 	totalPrice += orderedItems[i];
// }

// Change code above this line
// 	function filterArray(numbers, value) {
// function filterArray(numbers, value) {
// 	const filteredNumbers = [];
// Change code below this line

// numbers.forEach(function filterArray(number) {
// 	console.log(number);
// 	if (number > value) {
// 		filteredNumbers.push(number);
// 	}
// });

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

// Change code above this line
// 	return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// function getCommonElements(firstArray, secondArray) {
// 	const commonElements = [];
// Change code below this line

// firstArray.forEach(function getCommonElements(array) {
// 	if (secondArray.includes(array)) {
// 		commonElements.push(array);
// 	}
// });
// for (let i = 0; i < firstArray.length; i += 1) {
// 	if (secondArray.includes(firstArray[i])) {
// 		commonElements.push(firstArray[i]);
// 	}
// }

// return commonElements;
// Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// Change code below this line

// const calculateTotalPrice = (orderedItems) => {
// 	let totalPrice = 0;

// 	orderedItems.forEach((item) => {
// 		totalPrice += item;
// 	});

// 	return totalPrice;
// };
// Change code above this line
// function changeEven(numbers, value) {
// 	// Change code below this line
// 	const newArray = numbers.map((number) => {
// 		if (number % 2 === 0) {
// 			return number + value;
// 		}
// 		return number;
// 	});
// 	return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// console.log(bookByAuthor);
// Change code below this line
// Change code above this line
// function replaceVowelsWithUnderscore(inputString) {
// 	return inputString.replace(/[aeiouAEIOU]/g, "_");
// }

// const originalString = "HEllo, World!";
// const modifiedString = replaceVowelsWithUnderscore(originalString);
// console.log(modifiedString);
function replaceNumbersInString(inputString, number, replaceNumber) {
	return inputString.replace(number > replaceNumber);
}
