class CurrencyUI {
  constructor() {
    this.currency = document.getElementById("currency");
    this.dict = {
      USD: "$",
      EUR: "€",
    };
  }
  get currencyValue() {
    return this.currency.value;
  }

  getcurrencySymbol() {
    return this.dict[this.currencyValue];
  }
}
const currencyUI = new CurrencyUI();

export default currencyUI;
