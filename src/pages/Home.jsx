//importação da biblioteca React Hooks e demais componentes
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardStyles from "../components/CardStyles";

//funcao para retorno da api em array
function Home() {
  const [paises, setPaises] = useState([]);
  const [mode, setMode] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(
    '<i class="far fa-sun"></i> Light Mode'
  );

  //Integração com a API
  useEffect(async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    setPaises(data);
  }, []);

  //Feature de modo noturno
  const ligarModoNoturno = () => {
    if (mode) {
      document.documentElement.classList.add("dark");
      setToggleBtn('<i class="fas fa-moon"></i> Dark Mode');
      setMode((current) => (current = !current));
    }
    if (!mode) {
      document.documentElement.classList.remove("dark");
      setToggleBtn('<i class="far fa-sun"></i> Light Mode');
      setMode((current) => (current = !current));
    }
  };

  //Função para a filtragem por região
  const filtrarPorRegiao = async (regiao) => {
    if (regiao === "") return;
    const res = await fetch(
      `https://restcountries.eu/rest/v2/region/${regiao}`
    );
    const data = await res.json();
    await setPaises(data);
  };

  //Função de busca (Com apenas 2 letras ja recebe um retorno)
  const buscarPais = async (item) => {
    if (item.length < 2 || item === "") return;
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${item}`);
    const data = await res.json();
    await console.log(data);
    await setPaises(data);
  };

  //Estilização dos componentes: 1 = Header, 2 = Barra de pesquisa, 3 = Filtro

  {
    /* 1 */
  }
  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
        <div className="flex container mx-auto">
          <h1 className="font-bold text-xl">O mundo todo em uma página?</h1>
          <div className="ml-auto font-medium">
            <button
              onClick={() => ligarModoNoturno()}
              dangerouslySetInnerHTML={{ __html: toggleBtn }}
            ></button>
          </div>
        </div>
      </div>
      {/* FIM  1 */}

      {/* 2 */}
      <div className="flex container mx-auto mb-16">
        <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
        <input
          type="text"
          placeholder="Para onde deseja ir?.."
          className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700"
          onChange={(item) => buscarPais(item.target.value)}
        />
        {/* FIM 2 */}

        {/* 3 */}
        <select
          className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700"
          onChange={(val) => filtrarPorRegiao(val.target.value)}
        >
          <option value="">Filtrar por Região</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>s
          <option value="asia">Asia</option>
          <option value="europe">Europa</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      {/* FIM 3 */}

    {/* Consumindo API e Mostrando dados */}
      <div className="container grid grid-cols-4 gap-16 mx-auto">
        {paises.map((pais, index) => (
          <Link to={{ pathname: "detalhes", state: pais }} key={index}>
            <CardStyles
              nome={pais.name}
              bandeira={pais.flag}
              populacao={pais.population}
              regiao={pais.region}
              capital={pais.capital}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
