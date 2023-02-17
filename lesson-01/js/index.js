// 1.2;

// let productName = 'Droid';
// productName = 'Repair droid';
// console.log(productName);
// let pricePerItem = 2000;
// pricePerItem = 3500;
// console.log(pricePerItem);

// 1.3
// Change code below this line

// let topSpeed = 160;
// let distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// 1.4

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// 1.5

// const productName = 'Droid';
// const pricePerItem = 3500;

// Change code below this line
// const message = 'You picked Droid, price per item is 3500 credits';

// 1.6

// Change code below this line
// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// 1.7
// Change code below this line
// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// 1.8
// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// 1.9

// function add(a, b, c) {
// Change code below this line

//   return a + b + c;

// Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// 1.10

// function makeMessage(name, price) {
// Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
// Change code above this line
//   return message;
// }
// makeMessage(`Radar`, 6150);
// makeMessage(`Scanner`, 3500);
// makeMessage(`Reactor`, 8000);
// makeMessage(`Engine`, 4070);

// 1.11

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
// Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

// Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice(5, 100);

// 1.12

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// Change code below this line

//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;

// Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// 1.13;

// function isAdult(age) {
// Change code below this line
//   const passed = age >= 18;

// Change code above this line
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// 1.14

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
// // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

// // Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword(`mangodab3st`));
// console.log(isValidPassword(`kiwirul3z`));
// console.log(isValidPassword('jqueryismyjam'));

// 1.15

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
// Change this line

//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// 1.16

// function checkStorage(available, ordered) {
//   let message;
// Change code below this line
//   if (available < ordered) {
//     message = `Not enough goods in stock!`;
//   } else {
//     message = `Order is processed, our manager will contact you.`;
//   }
// Change code above this line
//   return message;
// }

// 1.17

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// 1.18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }

//   return message;
// }

// 1.19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// 1.20

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = `There are no products in the order!`;
//   } else if (ordered > available) {
//     message = `Your order is too large, there are not enough items in stock!`;
//   } else {
//     message = `The order is accepted, our manager will contact you`;
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// 1.21

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;

//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// 1.22

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip';

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent('pro'));
// console.log(checkIfCanAccessContent('starter'));
// console.log(checkIfCanAccessContent('vip'));
// console.log(checkIfCanAccessContent('free'));

// 1.23

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// 1.24

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 49999) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <= 19999) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// 1.25
// function checkStorage(available, ordered) {
//   let message;
// Change code below this line

//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

// message =
//   ordered > available
//     ? 'Not enough goods in stock!'
//     : 'The order is accepted, our manager will contact you';

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// 1.26

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';
//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));
// console.log(checkPassword('r3actsux'));

// 1.27

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (type) {
//     case 'professional':
//       price = 20;
//       break;

//     case 'organization':
//       price = 50;
//       break;

//     case 'starter':
//       price = 0;
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log();

// 1.28

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line

//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;

//     case 'jqueryismyjam':
//       message = 'Welcome!';
//       break;

//     case 'mangohackzor':
//       message = 'Access denied, wrong password!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//       break;
//   }
//   // Change code above this line
//   return message;
// }

// 1.29

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = `Sorry, there is no delivery to your country`;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost('Australia'));
// console.log(getShippingCost('Germany'));
// console.log(getShippingCost('China'));
// console.log(getShippingCost('Chile'));
// console.log(getShippingCost('Jamaica'));
// console.log(getShippingCost('Sweden'));

// 1.30

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// getNameLength('Poly');
// getNameLength('Harambe');
// getNameLength('Billy');
// getNameLength('Joe');

// 1.31
// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// console.log(courseTopicLength);
// const firstElement = courseTopic[0];
// console.log(firstElement);
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(lastElement);
// // Change code above this line

// 1.32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 6));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));
// console.log(getSubstring('Hello world', 0));

// 1.33
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + `...`;
//   }
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage('Curabitur ligula sapien', 16));
// console.log(formatMessage('Curabitur ligula sapien', 23));
// console.log(formatMessage('Vestibulum facilisis purus nec', 20));
// console.log(formatMessage('Vestibulum facilisis purus nec', 30));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));

// 1.34

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput('Hello world'));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput('Big SALE'));

// 1.35

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName('Egor Kolbasov', 'Egor'));
// console.log(checkForName('Egor Kolbasov', 'egor'));
// console.log(checkForName('Egor Kolbasov', 'egOr'));
// console.log(checkForName('Vadim Nekrasov', 'Dima'));

// 1.36

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   message = message.toLowerCase();
//   if (message.includes('spam') || message.includes('sale')) {
//     result = true;
//   } else {
//     result = false;
//   }

//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

//TEST=======================================================================
// const clients = ['Mango', 'Poly', 'Ajax'];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"
//==========================================
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
//==================================================
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }
//================================================
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message);

//=============================================
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`);
// }
//==============================================
// const a = ['Mango'];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push('Poly');
// console.log(a); // ["Mango", "Poly"]

// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// // Результат повторюється
// b.push('Ajax');
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]
//=======================================================
// const words = ['JavaScript', 'це', 'цікаво'];
// console.log(words.join('')); // "JavaScriptцецікаво"
// console.log(words.join(' ')); // "JavaScript це цікаво"
// console.log(words.join('-')); // "JavaScript-це-цікаво"
//===================================================
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1
//==============================================
// Виносимо варіанти в масив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }
//===============================================
// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]
//===========================================
//
//
//
//
//
//
//============================================ФУНКЦИИ======================================================

// function multiply() {
//   let total = 10;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(2, 2, 3)); //  120
// console.log(multiply(1, 2, 3, 4)); //  240
// console.log(multiply(1, 2, 3, 4, 5)); //  1200

////////////////////////////////////////////////////////////////////
// function bar() {
//   console.log('bar');
// }

// function baz() {
//   console.log('baz');
// }

// function foo() {
//   console.log('foo');
//   bar();
//   baz();
// }

// foo();
/////////////////////////////////////////////////АВТОПРОВЕРКА/////////////////////////////////////
//1.1

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }
//   return 'You are a minor';
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

//1.2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';

// }

// 1.3

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';
// }

// 1.4

//   ОГЛАСИЛ МАСИВ

// 1.5

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = 'apple';
// const secondElement = 'plum';
// const lastElement = 'orange';

// 1.6

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// 1.7

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;

// 1.8

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// 1.9

// function getExtremeElements(array) {
//   // Change code below this line
//   const deletedSc = [];
//   deletedSc.push(array[0]);
//   deletedSc.push(array[array.length - 1]);

//   return deletedSc;
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['Earth', 'Mars', 'Venus']);
// getExtremeElements(['apple', 'peach', 'pear', 'banana']);

// 1.10

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   return message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// 1.11

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   return message.split(' ').length * pricePerWord;

//   // Change code above this line
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

// 1.12

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   return (messege = array.join(delimiter));

//   // Change code above this line
//   return string;
// }

// console.log(
//   makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
// );
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));
// console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));

// 1.13

// function slugify(title) {
//   // Change code below this line

//   return title.toLowerCase().split(' ').join('-');

//   // Change code above this line
// }

// console.log(slugify('Arrays for begginers'));
// console.log(slugify('English for developer'));
// console.log(slugify('Ten secrets of JavaScript'));
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

// 1.14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// 1.15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// 1.16

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let arrays = firstArray.concat(secondArray);

//   if (arrays.length > maxLength) {
//     return arrays.slice(0, maxLength);
//   } else {
//     return arrays;
//   }
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

// 1.17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// 1.18

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 1; i <= number; i++) {
//     total += i;
//   }

//   return total;
//   // Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// 1.19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 1.20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let orders of order) {
//     total += orders;
//   }
//   // Change code above this line
//   return total;
// }

// 1.21

// function findLongestWord(string) {
//   let words = string.split(' ');
//   let longestWord = '';
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// 1.22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

//второй вариант решения............................................

// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// 1.23

// function filterArray(numbers, value) {
//   // Change code below this line
//   let newNumber = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       newNumber.push(numbers[i]);
//     }
//   }
//   return newNumber;
// }

// // Change code above this line
// 1.24
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   return; // Change this line
// }
// console.log(fruits.includes('plum'));

// 1.25

// 1.26

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let orders of order) {
//     total += orders;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// 1.27

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// 1.28

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// 1.29

// function getEvenNumbers(start, end) {
//   // Change code below this line

//   const numbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));

// 1.30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// 1.31

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }

// }

// 1.32

// function includes(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

//============================================ 3 МОДУЛЬ============================================//

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смішної людини',
//     author: 'Федір Достоєвський',
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

//===================================================================================
// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }
// doStuffWithBook({
//   title: 'The Last Kingdom',
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });
//====================================================================================

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',

//   // Change code below this line
// };
// console.log(credentials.email);
// console.log(credentials.password);

// // Change code above this line
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);
//===================================================================
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: { low: lowToday, high: highToday, icon: todayIcon },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
//=====================================ПРИМЕР ПОДСЧЁТА СУММЫ=======================================
// Change code below this line
// function add(...args) {
//   let result = 0;
//   for (arg of args) {
//     result += arg;
//   }
//   return result;
// }
// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 3);

//======================================
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   // Change code above this line
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updeteBook(oldName, newName) {
//   return `Updating book ${oldName} to ${newName}`;
//   }
// }
//==========================================
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     let index = this.potions.indexOf(oldName);
//     if (index !== -1) {
//       this.potions[index] = newName;
//     }
//   },
// };
//================================================ 41 ЗАДАЧА, 3 модуль=========================
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const obj of this.potions) {
//       if (obj.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const names of this.potions) {
//       const potionIndex = this.potions.indexOf(names);
//       if (names.name === potionName) {
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const elements of this.potions) {
//       if (elements.name === oldName) {
//         elements.name = newName;
//       }
//     }
//   },
// };
