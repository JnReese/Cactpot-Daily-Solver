const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const outcomes = {
  6: 10000,
  24: 3600,
  23: 1800,
  21: 1080,
  8: 720,
  9: 360,
  20: 306,
  11: 252,
  17: 180,
  12: 180,
  15: 180,
  22: 144,
  18: 119,
  10: 80,
  13: 72,
  16: 72,
  14: 54,
  19: 36,
  7: 36,
};

export const bestOutcomeForSingleNumber = (num) => {
  if (num >= 8) {
    return [outcomes[24], outcomes[23], outcomes[21]];
  }
  if (num <= 3) {
    return [outcomes[6], outcomes[8], outcomes[9]];
  }
  if (num === 4 || num === 5) {
    return [outcomes[8], outcomes[9], outcomes[21]];
  }
  if (num === 6) {
    return [outcomes[9], outcomes[21], outcomes[23]];
  }
  if (num === 7) {
    return [outcomes[20], outcomes[21], outcomes[24]];
  } else {
    return null;
  }
};

console.log(bestOutcomeForSingleNumber(3));

// rankBestOutcomes from numbers 3-17 (2 numbers chosen) 6,8,9,11,17,12,15,10,13,16,14,7
export const lowestNotDupeNumber = (num1, num2) => {
  if (num1 !== num2) {
    let newArr = [...elements];
    let filteredArray = newArr.filter((el) => el !== num1);
    let doubleFilteredArray = filteredArray.filter((el) => el !== num2);
    let lowestNumber = Math.min(...doubleFilteredArray);
    return lowestNumber;
  }
};
export const highestNotDupeNumber = (num1, num2) => {
  if (num1 !== num2) {
    let newArr = [...elements];
    let filteredArray = newArr.filter((el) => el !== num1);
    let doubleFilteredArray = filteredArray.filter((el) => el !== num2);
    let highestNumber = Math.max(...doubleFilteredArray);
    return highestNumber;
  }
};

export const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};

export const bestOutcomeForDoubleNumbers = (num1, num2) => {
  //best possible outcome assuming num cant be duplicated.
  // aglo that takes in num and provides a range of possible products, returning highest 3 numbs
  if (num1 !== num2) {
    let lowestNumber = lowestNotDupeNumber(num1, num2);
    let highestNumber = highestNotDupeNumber(num1, num2);
    let lowcombo = lowestNumber + num1 + num2;
    let highCombo = highestNumber + num1 + num2;
    let rangeOfNumbers = range(lowcombo, highCombo);
    //in my range of numbers i need to make sure It CANT be the previously input numbers
    if (rangeOfNumbers.includes(6)) {
      return [outcomes[6], outcomes[8], outcomes[9]];
    }
    if (rangeOfNumbers.includes(24)) {
      return [outcomes[24], outcomes[21], outcomes[20]];
    }
    if (rangeOfNumbers.includes(23)) {
      return [outcomes[23], outcomes[21], outcomes[20]];
    }
    if (rangeOfNumbers.includes(21)) {
      return [outcomes[21], outcomes[20], outcomes[17]];
    }
    if (rangeOfNumbers.includes(8)) {
      return [outcomes[8], outcomes[11], outcomes[12]];
    }
    if (rangeOfNumbers.includes(9)) {
      return [outcomes[9], outcomes[11], outcomes[12]];
    }
    if (rangeOfNumbers.includes(14)) {
      return [outcomes[9], outcomes[20], outcomes[15]];
    }
  }
};

export const bestOutcomeForTripleNumber = (num) => {
  if (num) {
    return outcomes[num];
  }
};

const one = 1; //BestRolls = 6,9,8  : Best2Combo =
const two = 2; // BestRolls = 6,9,8 :
const three = 3; //BestRolls = 6,8,9 :
const four = 4; //BestRolls = 8,9,21 :
const five = 5; // BestRolls = 8,9,21 :
const six = 6; // BestRolls = 9,21,23 :
const seven = 7; // BestRolls = 20,21,24 :
const eight = 8; //BestRoll = 21,23,24 :
const nine = 9; //BestRoll = 21,23,24:
