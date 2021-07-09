//Enter point to all the countries where people speak spanish
const API = "https://restcountries.eu/rest/v2/all";
//const API = "https://restcountries.eu/rest/v2/lang/es";

//Enter poit to an specific country
const APICOUNTRY = "https://restcountries.eu/rest/v2/name/";
//https://restcountries.eu/rest/v2/name/argentina

const getData = async (id) => {
  let apiURl = id ? APICOUNTRY + id : API;

  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    //data is an array and have objects in.
    return data;
  } catch (error) {
    console.log("fetch error ", error);
  }
};

export default getData;
