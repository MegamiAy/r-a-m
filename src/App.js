import { useEffect, useState } from "react";
import "./style/App.css";

function App() {
  const [conteudo, setConteudo] = useState(<></>);
  const [busca, setBusca] = useState("");

  async function carregarTodosOsPersonagens() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const result = await fetch(
      "https://rickandmortyapi.com/api/character" + busca,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));

    const char = JSON.parse(result);

    return char.results;

  }

  function traduzirStatus(status) {
    switch (status) {
      case "Alive":
        return "Vivo";
      case "Dead":
        return "Morto";
      case "unknown":
        return "Desconhecido";
      default:
        return status;
    }
  }

  function traduzirEspecie(species) {
    switch (species) {
      case "Human":
        return "Humano";
      case "Alien":
        return "Alien";
      case "Mythological Creature":
        return "Criatura Mítica";
      case "Humanoid":
        return "Humanoide";
      case "Animal":
        return "Animal";
      case "Poopybutthole":
        return "Poopybutthole";
      case "Disease":
        return "Doença";
      case "Robot":
        return "Robô";
      case "Vampire":
        return "Vampiro";
      case "Cronenberg":
        return "Cronenberg";
      case "Parasite":
        return "Parasita";
      case "unknown":
        return "Desconhecido";
      default:
        return species;
    }
  }

  function traduzirGenero(gender) {
    switch (gender) {
      case "Male":
        return "Masculino";
      case "Female":
        return "Feminino";
    }
  }

  async function listaPersonagem() {
    const todosPersonagens = await carregarTodosOsPersonagens();
    return todosPersonagens.map((personagem) => (
      <div className="card char">
        <img src={personagem.image} alt={personagem.name} />
        <p>
          <strong>Nome: </strong>
          {personagem.name}
        </p>
        <p>
          <strong>Especie: </strong>
          {traduzirEspecie(personagem.species)}
        </p>
        <p>
          <strong>Genero: </strong>
          {traduzirGenero(personagem.gender)}
        </p>
        <p>
          <strong>Episodio: </strong>
          {personagem.episode.map((ep) => (
            <span key={personagem.name + ep.split("episode/")[1]}>
              Ep-{ep.split("episode/")[1]}{" "}
            </span>
          ))}
        </p>
        <p>
          <strong>Status: </strong>
          {traduzirStatus(personagem.status)}
        </p>
      </div>
    ));
  }

  useEffect(() => {
    async function carregar() {
      setConteudo(await listaPersonagem());
    }
    carregar();
  }, [busca]);

  return (
    <div className="App">
      <header className="cabecalho">
        <h1>Rick and Morty API</h1>
      </header>
      <div className="filtros">
        <span className="filtros-titulo">Filtros</span>
        <div className="filtro status">
          <b>Status:</b>
          <span onClick={() => setBusca("?status=live")}>Vivo</span>
          <span onClick={() => setBusca("?status=dead")}>Morto</span>
          <span onClick={() => setBusca("?status=unknown")}>Desconhecido</span>
        </div>
        <div className="filtro genero">
          <b>Genero:</b>
          <span onClick={() => setBusca("?gender=male")}>Masculino</span>
          <span onClick={() => setBusca("?gender=female")}>Feminino</span>
          <span onClick={() => setBusca("?gender=unknown")}>Desconhecido</span>
        </div>
      </div>
      <div className="lista-principal">{conteudo}</div>
    </div>
  );
}

export default App;
