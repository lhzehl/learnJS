import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import formUI from "./views/form";

// locations.init().then((res) => {
//   console.log(res);
//   console.log(locations)
//   // console.log(locations.getCitiesByCountryCode())
// });
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
    // City_code origin, city_code department, date YYYY-MM
    console.log(origin, destination, depart_date, return_date);

    // complite all data and send on server
  }
});
