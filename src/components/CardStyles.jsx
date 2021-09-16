//Classe da estilização dos Cards + textos
import React from "react";

export default function CardStyles({
  bandeira,
  nome,
  populacao,
  regiao,
  capital,
}) {
  return (
    <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
      <img
        src={bandeira}
        className="h-1/2 w-full rounded-tl-lg rounded-tr-lg"
        alt={nome}
      />
      <div className="p-4">
        <h1 className="font-bold mb-4 text-xl" >{nome}</h1>
        <p className="text-lg">
          População:{" "}
          <span className="text-gray-700 dark:text-gray-300">{populacao}</span>
        </p>
        <p className="text-lg">
          Região:{" "}
          <span className="text-gray-700 dark:text-gray-300">{regiao}</span>
        </p>
        <p className="text-lg">
          Capital:{" "}
          <span className="text-gray-700 dark:text-gray-300">{capital}</span>
        </p>
      </div>
    </div>
  );
}
