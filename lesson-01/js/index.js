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
// Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

// Change code above this line
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

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = `Insufficient funds!`;
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  // Change code above this line
  return message;
}
