import axios from 'axios'
// Axios makes API calls cleaner and easier to manage.

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})
//**** The .get() method of axios automatically converts the JSON response to a JavaScript object.
// HTTP GET METHOD
export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET METHOD fro the indvi. country name
export const getCountryIndData = (name) => {
    return api.get(
        `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
};