import styles from './Character.module.css';
import {useState} from 'react';

export default function Character({character}) {
  const [readMore, setReadMore] = useState(false);

  const {thumbnail, name, description, comics} = character;
  return (
    <article className={styles}>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="name" />
      <footer>
        <h3>{name}</h3>
        <p>{description ? description : 'No description'}</p>
        <h4>Comics:</h4>
        <ul>
          {comics.items.map((comic, index) => {
            return <li key={index}>{comic.name}</li>;
          })}
        </ul>
      </footer>
    </article>
  );
}
