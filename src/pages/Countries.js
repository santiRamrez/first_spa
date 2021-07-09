import getHash from "../util/getHash";
import getData from "../util/getData";

const Country = async () => {
  const id = getHash();
  const country = await getData(id);
  const population = country[0].population;
  //PLease format the population data

  const view = `
    <div class="Countries-inner">
      <article class="Countries-card">
        <img src="${country[0].flag}" alt="${country[0].nativeName}">
        <h2>${country[0].nativeName}</h2>
      </article>
      <article class="Countries-card">
        <h3>Capital:<span> ${country[0].capital}</span></h3>
        <h3>Population:<span> ${population}</span></h3>
        <h3>Currency: <span> ${country[0].currencies[0].name}</span></h3>
        <h3>Subregion: <span> ${country[0].subregion}</span></h3>
      </article>
    </div>
  `;
  return view;
};

export default Country;
