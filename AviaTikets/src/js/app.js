import api from "./services/apiServise";

api.counties().then((res) => console.log(res));
api.cities().then((res) => console.log(res));
