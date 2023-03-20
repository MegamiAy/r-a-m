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

  function carregarTodosOsPersonagens(){
    return mock
  }

  function listaPersonagem() {
    const todosPersonagens = carregarTodosOsPersonagens();
    return todosPersonagens.map((personagem) => 
    <div className='card char'>
      <img src='https://rickandmortyapi.com/api/character/avatar/565.jpeg' alt='Rick and Morty' />
      <p><strong>Name: </strong>{personagem.name}</p>
      <p><strong>Especie: </strong>{personagem.species}</p>
      <p><strong>Genero: </strong>{personagem.gender}</p>
      <p><strong>Episodio: </strong>{personagem.episode}</p>
      <p><strong>Status: </strong>{personagem.status}</p>
    </div>);
  }
  
  useEffect(() => (
    setConteudo(listaPersonagem())
    ))

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