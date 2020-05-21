import { formatDate } from "../helpers/date_formatter";

import api from "../services/apiServise";

class Locations {
  constructor(api, helpers) {
    this.api = api;
    this.countries = null;
    this.cities = null;
    this.shortCitiesList = {};
    this.lastSeach = {};
    this.airlines = {};
    this.formatDate = helpers.formatDate;
  }
  async init() {
    const response = await Promise.all([
      this.api.counties(),
      this.api.cities(),
      this.api.airlines(),
    ]);
    const [countries, cities, airlines] = response;
    this.countries = this.serializeCountries(countries);
    this.cities = this.serializeCities(cities);
    this.shortCitiesList = this.createShortCitiesList(this.cities);
    this.airlines = this.serializeAirlines(airlines);
    console.log(this.airlines);
    return response;
  }

  getCiteCodeByKey(key) {
    const city = Object.values(this.cities).find(
      (item) => item.full_name === key
    );
    return city.code;
  }

  getCityNameByCode(code) {
    return this.cities[code].name;
  }

  getAirlineNameByCode(code) {
    return this.airlines[code] ? this.airlines[code].name : "";
  }
  getAirlineLogoByCode(code) {
    return this.airlines[code] ? this.airlines[code].logo : "";
  }

  createShortCitiesList(cities) {
    //Object.entries=> [key, value]
    //
    return Object.entries(cities).reduce((acc, [, city]) => {
      acc[city.full_name] = null;
      return acc;
    }, {});
  }
  serializeAirlines(airlines) {
    // {{}}
    return airlines.reduce((acc, item) => {
      item.logo = `http://pics.avs.io/200/200/${item.code}.png`;
      item.name = item.name || item.name_translations["en"];
      acc[item.code] = item;
      return acc;
    }, {});
  }

  serializeCountries(countries) {
    // {'Country code':{...}}
    return countries.reduce((acc, country) => {
      acc[country.code] = country;
      return acc;
    }, {});
  }

  serializeCities(cities) {
    // { 'City name, County name': {...} }
    return cities.reduce((acc, city) => {
      const country_name = this.getCountryNameByCode(city.country_code);
      city.name = city.name || city.name_translations["en"];

      const full_name = `${city.name}, ${country_name}`;
      acc[city.code] = {
        ...city,
        country_name,
        full_name,
      };
      return acc;
    }, {});
  }
  getCountryNameByCode(code) {
    return this.countries[code].name;
  }
  async fetchTikets(params) {
    const response = await this.api.prices(params);
    this.lastSeach = this.serializeTikets(response.data);
    // serialize search => in self been name city and county
  }
  serializeTikets(tikets) {
    return Object.values(tikets).map((ticket) => {
      return {
        ...ticket,
        origin_name: this.getCityNameByCode(ticket.origin),
        destination_name: this.getCityNameByCode(ticket.destination),
        airline_logo: this.getAirlineLogoByCode(ticket.airline),
        airline_name: this.getAirlineNameByCode(ticket.airline),
        departure_at: this.formatDate(ticket.departure_at, "dd MMM yyyy hh:mm"),
        return_at: this.formatDate(ticket.return_at, "dd MMM yyyy hh:mm"),
      };
    });
  }
}

const locations = new Locations(api, { formatDate });

export default locations;

// { 'City, County':null }
// [{},{},{},{}]
// {'City':{...}}=> cities[code]
