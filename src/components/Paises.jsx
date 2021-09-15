//Utizar o comando 'rafce' tendo o react es7 extension instalado para criação e exportação mais rápida
import React, { useState, useEffect } from "react";

const api = "https://restcountries.eu/rest/v2/all";

const Paises = () => {
  const [paises, setPaises] = useState([]);

  const fetchPaisData = async () => {
    const response = await fetch(api);
    const paises = await response.json();
    setPaises(paises);
    console.log(paises);
  };
  useEffect(() => {
    fetchPaisData();
  }, []);

  return (
    <>
      <section className="grid">
        {paises.map((pais) => {
          const { numericCode, name, population, region, capital, flag } = pais;

          return (
            <div>
              <div
                id="main"
                className= "text-center"
                key={numericCode}
              >
                <img className="card-img-top" src={flag} alt={name} />
                <div className="card-body">
                  <h1 className="mb-2"><strong>{name}</strong></h1>
                  <li>
                    <h5>
                      Capital: <span>{capital}</span>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      População: <span>{population}</span>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Região: <span>{region}</span>
                    </h5>
                  </li>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Paises;
