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

  function setValue(value) {
    if (isNaN(value)) return console.error(`Enter the number`);
    else result = value;
    return this;
  }
  function addValue(value) {
    result += value;
    return this;
  }
  function multiplyByValue(value) {
    result *= value;
    return this;
  }
  function substractValue(value) {
    result -= value;
    return this;
  }
  function divideByValue(value) {
    result /= value;
    return this;
  }
  function powValue(value) {
    result = Math.pow(result, value);
    return this;
  }
  function getResult() {
    return result.toFixed(2);
  }

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

console.log(
  calculator
    .setValue(10)
    .powValue(2)
    .getResult()
);
