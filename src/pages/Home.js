import getData from "../util/getData";

const Home = async () => {
  const countries = await getData();
  const view = `
     <div class="Characters">
     ${countries
       .map(
         (country) => `
      <article class="Character-item">
        <a href="#/${country.nativeName}/">
          <img src="${country.flag}" alt="${country.nativeName}">
          <h2>${country.nativeName}</h2>
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
