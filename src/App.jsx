import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters';
import Pagination from './components/Pagination';

export default function App() {
  const timeStamp = '1';
  const apiKey = '6465f5426a055b26e83c635d7d80f624';
  const md5 = '89c2c14be41a8e0295b0cad68aaeb080';

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(20);

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
        `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&offset=${
          (page - 1) * itemsPerPage
        }`,
      )
      .then((r) => {
        setCharacters(r.data.data.results);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

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
      <Pagination nextPage={nextPage} prevPage={prevPage} page={page} />
    </div>
  );
}
