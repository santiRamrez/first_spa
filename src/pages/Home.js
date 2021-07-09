import getData from "../util/getData";

const Home = async () => {
  const countries = await getData();
  const view = `
     <div class="country-container">
     ${countries
       .map(
         (country) => `
      <article class="country-card">
        <a href="#/${country.nativeName}/">
          <div class="flag-container"><img src="${country.flag}" alt="${country.nativeName}"></div>  
          <div class="name-container"><h2>${country.nativeName}</h2></div>
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
