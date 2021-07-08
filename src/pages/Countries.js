const Country = () => {
  const view = `
    <div class="Countries-inner">
      <article class="Countries-card">
        <img src="image" alt="name">
        <h2>Name</h2>
      </article>
      <article class="Countries-card">
        <h3>Capital:</h3>
        <h3>Population:</h3>
        <h3>Currency:</h3>
        <h3>Continent:</h3>
      </article>
    </div>
  `;
  return view;
};

export default Country;
