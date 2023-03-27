import { useEffect, useState } from 'react';
import './style/App.css';

const mock = [
  {
    "id": 565,
    "name": "Debrah",
    "status": "Alive",
    "species": "Mythological Creature",
    "type": "Dragon",
    "gender": "Male",
    "origin": {
    "name": "Draygon",
    "url": "https://rickandmortyapi.com/api/location/94"
    },
    "location": {
    "name": "Draygon",
    "url": "https://rickandmortyapi.com/api/location/94"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/565.jpeg",
    "episode": [
    "https://rickandmortyapi.com/api/episode/35"
    ],
    "url": "https://rickandmortyapi.com/api/character/565",
    "created": "2020-05-07T11:34:43.083Z"
    }  
]

function App() {
  const [ conteudo, setConteudo ] = useState(<></>)

  async function carregarTodosOsPersonagens(){
    const retorno = await fetch(
      "https://rickandmortyapi.com/api/character",
    {
    method: "GET",
    }
  )
  .then((response) => response.json())

  // console.log(retorno)

  return retorno.results;

  return mock.results; 
}



  function traduzirStatus(status){
    switch(status){
      case 'Alive':
        return 'Vivo';
      case 'Dead':
        return 'Morto';
      case 'unknown':
        return 'Desconhecido';
      default:
        return status;
    }
  }

  function traduzirEspecie(species){
    switch(species){
      case 'Human':
        return 'Humano';
      case 'Alien':
        return 'Alien';
      case 'Mythological Creature':
        return 'Criatura Mítica';
      case 'Humanoid':
        return 'Humanoide';
      case 'Animal':
        return 'Animal';
      case 'Poopybutthole':
        return 'Poopybutthole';
      case 'Disease':
        return 'Doença';
      case 'Robot':
        return 'Robô';
      case 'Vampire':
        return 'Vampiro';
      case 'Cronenberg':
        return 'Cronenberg';
      case 'Parasite':
        return 'Parasita';
      case 'unknown':
        return 'Desconhecido';
      default:
        return species;
    }
  }

  function traduzirGenero(gender){
    switch(gender){
      case 'Male':
        return 'Masculino';
      case 'Female':
        return 'Feminino';
    }
  }

  async function listaPersonagem() {
    const todosPersonagens = await carregarTodosOsPersonagens();
    return todosPersonagens.map((personagem) => 
    <div className='card char'>
      <img src={personagem.image} alt={personagem.name} />
      <p><strong>Nome: </strong>{personagem.name}</p>
      <p><strong>Especie: </strong>{traduzirEspecie(personagem.species)}</p>
      <p><strong>Genero: </strong>{traduzirGenero(personagem.gender)}</p>
      <p><strong>Episodio: </strong>{personagem.episode.map(ep => (
        <span key={personagem.name+(ep.split('episode/')[1])}>
          Ep-{(ep.split('episode/')[1])} </span>
      ))}</p>
      <p><strong>Status: </strong>{traduzirStatus(personagem.status)}</p>
    </div>);
    <button></button>
  }
  
  useEffect(() => {
    async function carregar(){
      setConteudo(await listaPersonagem());
    }
    carregar();
   }, []);

  return (
    <div className="App">
      <header className="cabecalho">
        <h1>Rick and Morty API</h1>
      </header>
      <div className='lista-principal'>
        {conteudo}
      </div>
    </div>
  );

}

export default App;