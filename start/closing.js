function minus(a = 0) {
  return function (b = 0) {
    return a - b;
  };
}

function multiplyMaker(value = 1) {
  let a = value;
  return function (val = 1) {
    return (a *= val);
  };
}
const multiply = multiplyMaker(2);

function stingOperation() {
  let string = "";
  function setString(str = "") {
    string = String(str);
  }
  function getString() {
    return string;
  }
  function getStringLenght() {
    return string.length;
  }
  function getReverse() {
    return string.split("").reverse().join("");
  }
  return {
    setString,
    getString,
    getStringLenght,
    getReverse,
  };
}
const sss = stingOperation();
sss.setString("Hello");

console.log(sss.getReverse());

function calc() {
  let value;
  return {
    setValue(val) {
      value = val;
      return this;
    },
    add(val) {
      value += val;
      return this;
    },
    devide(val) {
      value /= val;
      return this;
    },
    degree(val) {
      value = Math.pow(value, val);
      return this;
    },
    multiply(val) {
      value *= val;
      return this;
    },
    findValue() {
      console.log(value.toFixed(2));
      return this;
    },
  };
}
const calculator = calc();
calculator.setValue(10).add(5).degree(2).multiply(4).findValue();
