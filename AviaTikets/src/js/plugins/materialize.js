import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

// init select
const select = document.querySelectorAll("select");
M.FormSelect.init(select);

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}
// init Autocomplete
const autocomplite = document.querySelectorAll(".autocomplete");
M.Autocomplete.init(autocomplite, {
    data: {
    //   Apple: null,
    //   Microsoft: null,
    //   Google: "https://placehold.it/250x250",
    },
  });

export function getAutocompliteInstance(elem) {
  return M.Autocomplete.getInstance(elem);
}
// init Date Picker
const datepicker = document.querySelectorAll(".datepicker");
M.Datepicker.init(datepicker, {
  showClearBtn: true,
  format:'yyyy-mm'
});

export function getDatepickerInstance(elem) {
  return M.Datepicker.getInstance(elem);
}
// Init dropdown
const dropdowns = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdowns);