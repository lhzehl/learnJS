import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import formUI from "./views/form";
import tiсketsUI from "./views/tikets";
import currencyUI from "./views/currency";
import ticketsUI from "./views/tikets";
import addToFavoriteUI from "./store/favorites";

document.addEventListener("DOMContentLoaded", () => {
  //* init app
  initApp();

  const form = formUI.form;
  //Events
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  //Handlers
  async function initApp() {
    await locations.init();
    formUI.setAutocomliteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    // take data from input
    const origin = locations.getCiteCodeByKey(formUI.originValue);
    const destination = locations.getCiteCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.currencyValue;
    // City_code origin, city_code department, date YYYY-MM

    // complite all data and send on server
    await locations.fetchTikets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });
    // console.log(locations.lastSeach)
    ticketsUI.renderTickets(
      locations.lastSeach,
      currencyUI.getcurrencySymbol()
    );
    addToFavoriteUI.action(ticketsUI.container)
  }
});
