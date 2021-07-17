import getHash from "../util/getHash";
import getData from "../util/getData";

const Country = async () => {
  const id = getHash();
  const country = await getData(id);
  const population = country[0].population.toString();
  //Format the population data
  const formatNumber = (numberStr) => {
    let arr = numberStr.split("").reverse();
    let output = [];
    arr.forEach((digit) => {
      if (output.length % 4 === 0) {
        output.unshift(".");
      }
      output.unshift(digit);
    });
    output.pop();
    return output.join(" ");
  };
  //Format country name
  const countryName = country[0].name;
  const formatName = (str) => str.replace(/\(.+\)/, "");

  const view = `
    <div class="Countries-inner">
      <article class="Main-section">
        <div class="flag-container"><img src="${country[0].flag}" alt="${
    country[0].name
  }"></div>  
        <h2>${formatName(countryName)}</h2>
      </article>
      <article class="Second-section">
        <h3>Capital:<span> ${country[0].capital || "!"}</span></h3>
        <h3>Population:<span> ${formatNumber(population) || "!"}</span></h3>
        <h3>Currency: <span> ${country[0].currencies[0].name || "!"}</span></h3>
        <h3>Subregion: <span> ${country[0].subregion}</span></h3>
      </article>
    </div>
  `;
  return view;
};

export default Country;
