import axios from "axios";

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/'
axios.defaults.responseType = 'json'

export default axios