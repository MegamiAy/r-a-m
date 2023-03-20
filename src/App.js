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

  async function listaPersonagem() {
    const todosPersonagens = await carregarTodosOsPersonagens();
    return todosPersonagens.map((personagem) => 
    <div className='card char'>
      <img src={personagem.image} alt={personagem.name} />
      <p><strong>Name: </strong>{personagem.name}</p>
      <p><strong>Specie: </strong>{personagem.species}</p>
      <p><strong>Gender: </strong>{personagem.gender}</p>
      <p><strong>Episode: </strong>{personagem.episode.map(ep => (
        <>Ep-</>
      ))}</p>
      <p><strong>Status: </strong>{personagem.status}</p>
    </div>);
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