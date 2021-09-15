import React from "react";

const filter = () => {
  return (
    <section className="filterHeader">
      <form className="formulario">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Para onde desejar ir?"
        />
      </form>

      <div>
        <select name="select" id="select" className="select ">
          <option value="Filtrar por região">Filtrar por região
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Ásia</option>
          <option value="Europa">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default filter;
