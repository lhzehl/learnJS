// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
//   }
class Component {
  constructor(tagName) {
    this.tagName = tagName || "div";
    this.node = document.createElement(tagName);
  }
  setText(text) {
    this.node.textContent = text;
  }
}
const comp = new Component("span");

class Calc {
  constructor() {
    this._value = 0;
  }
  add(val) {
    return (this._value += val);
  }
  minus(val) {
    return (this._value -= val);
  }
  multiply(val) {
    return (this._value *= val);
  }
  desc(val) {
    return (this._value /= val);
  }

  get value() {
    return this._value;
  }
  set value(setValue) {
    this._value = setValue;
  }
}
const asfasf = new Calc