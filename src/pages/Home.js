import getData from "../util/getData";

const Home = async () => {
  const countries = await getData();
  const formatName = (str) => str.replace(/\(.+\)/, "");

  const view = `
     <div class="country-container">
     ${countries
       .map(
         (country) => `
      <article class="country-card">
        <a href="#/${country.name}/">
          <div class="flag-container"><img src="${country.flag}" alt="${
           country.name
         }"></div>  
          <div class="name-container"><h2>${formatName(country.name)}</h2></div>
        </a>
      </article>
     `
       )
       .join("")}
    </div>
  `;
  return view;
};

export default Home;
