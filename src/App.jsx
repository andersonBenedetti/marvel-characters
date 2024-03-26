import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters';

export default function App() {
  const timeStamp = '1';
  const apiKey = '6465f5426a055b26e83c635d7d80f624';
  const md5 = '89c2c14be41a8e0295b0cad68aaeb080';

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const removeCharacters = (id) => {
    const newCharacters = characters.filter(
      (characters) => characters.id !== id,
    );
    setCharacters(newCharacters);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`,
      )
      .then((r) => {
        setCharacters(r.data.data.results);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main>
        <h2 className="loading">Loading...</h2>
      </main>
    );
  }

  return (
    <div>
      <Characters characters={characters} removeCharacters={removeCharacters} />
    </div>
  );
}
