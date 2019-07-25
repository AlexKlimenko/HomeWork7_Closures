//1. Создайте функцию которая бы умела делать...

function minus(diminished = 0) {
  return (subtrahend = 0) => diminished - subtrahend;
}

//2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами

function multiplyMaker(firstMultiplier = 1) {
  let result = firstMultiplier;
  return secondMultiplier => (result *= secondMultiplier);
}
const multiply = multiplyMaker();

//3. Реализовать модуль, который работает со строкой и имеет методы...
let workWithString = (function() {
  let string;

  let setString = value => {
    value === undefined
      ? (string = "")
      : !isNaN(value)
      ? (string = value.toString())
      : (string = value);
    return string;
  };
  let getString = () => string;
  let getStringLength = () => string.length;
  let getReverseString = () =>
    string
      .split("")
      .reverse()
      .join("");

  return {
    setString,
    getString,
    getStringLength,
    getReverseString
  };
})();

//4.Создайте модуль “калькулятор”

let calculator = (function() {
  let result;

  let setValue = value => {
    if (isNaN(value)) return console.error(`Enter the number`);
    else return (result = value);
  };

  let addValue = value => (result += value);

  let multiplyByValue = value => {
    result *= value;
    return this;
  };
  let substractValue = value => {
    result -= value;
    return this;
  };
  let divideByValue = value => {
    result /= value;
    return this;
  };
  let powValue = value => {
    result = Math.pow(result, value);
    return this;
  };
  let getResult = () => result.toFixed(2);

  return {
    setValue,
    addValue,
    multiplyByValue,
    substractValue,
    divideByValue,
    powValue,
    getResult
  };
})();

console.log(calculator.setValue(10));
console.log(calculator.powValue(2));
console.log(calculator.getResult());

console.log(
  calculator
    .setValue(10)
    .powValue(2)
    .getResult()
);
