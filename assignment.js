// .......................... 1:  Help The Zoo Manager...........................

function calculateMoney(ticketSale) {
  const perTicketPrice = 120;
  const janitorCostPerDay = 500;
  const foodCost = 50;
  const staff = 8;
  const foodCostPerDay = foodCost * staff;
  const totalCost = foodCostPerDay + janitorCostPerDay;

  if (typeof ticketSale !== "number") {
    return "Input should be number";
  } else {
    if (ticketSale > 0 && ticketSale !== 0) {
      let totalEarn = ticketSale * perTicketPrice;
      const benefit = totalEarn - totalCost;
      return benefit;
    }
    return "Earn More";
  }
}
// console.log(calculateMoney(10));

//............................... 2: CHECK NAME .............................................

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else {
    const strName = name.charAt(name.length - 1).toUpperCase();

    if (
      strName === "A" ||
      strName === "Y" ||
      strName === "I" ||
      strName === "E" ||
      strName === "O" ||
      strName === "U" ||
      strName === "W"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}
let inputName = "Oli";
let choseName = checkName(inputName);
// console.log(choseName);

// ............................. 3:  Virus in my Array ............................................

const array = [NaN, 1, 12, 0, -1, undefined];

function deleteInvalids(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (
      typeof element != "number" ||
      isNaN(element) === true ||
      typeof element === "undefined"
    ) {
    } else {
      newArray.push(element);
    }
  }
  return newArray;
}
const desiredArray = deleteInvalids(array);
// console.log(desiredArray);

// ...................................... 4 : Make A Great Password .......................

function password(obj) {
  const year = Object.values(obj)[1];
  const yearLength = year.toString().split("").length;
  const objLength = Object.keys(obj).length;

  if (objLength === 3) {
    if (
      Object.keys(obj)[0] != "name" ||
      Object.keys(obj)[1] != "birthYear" ||
      Object.keys(obj)[2] != "siteName"
    ) {
      return "wrong obj key";
    } else if (yearLength != 4 || typeof year != "number") {
      return "invalid";
    } else {
      return `${obj["siteName"]}#${obj["name"]}@${obj["birthYear"]}`;
    }
  } else {
    return "invalid";
  }
}

const detail = { name: "kolimuddin", birthYear: 1997, siteName: "google" };
// console.log(password(detail));

// .......................................Monthly Savings of a Freelancer ...................................

function monthlySavings(payments, cost) {
  const incomeTax = 20;
  let totalEarn = 0;
  if (Array.isArray(payments) === false || typeof cost != "number") {
    return "invalid input";
  } else {
    for (const payment of payments) {
      if (payment > 3000) {
        let actualMoney = payment - (payment * incomeTax) / 100;
        totalEarn = totalEarn + actualMoney;
      } else {
        totalEarn = payment + totalEarn;
      }
    }

    let saveMoney = totalEarn - cost;
    if (saveMoney < 0) {
      return "earn more";
    } else if (saveMoney === 0) {
      return saveMoney;
    } else {
      return `save money: ${saveMoney}`;
    }
  }
}
const paymentArray = [1000, 2000, 3000];
const livingCost = 6000;
console.log(monthlySavings(paymentArray, livingCost));
