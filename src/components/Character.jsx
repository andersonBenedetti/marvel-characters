import styles from './Character.module.css';
import {useState} from 'react';

export default function Character({character, removeCharacters}) {
  const [readMore, setReadMore] = useState(false);

  const {id, thumbnail, name, description, comics} = character;
  return (
    <article className={styles.card}>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="name" />
      <footer>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>
          <span>Description:</span>{' '}
          {description ? description : 'No description'}
        </p>
        <div className={styles.comics}>
          {comics.items.length === 0 ? (
            <p>
              <span>Comics:</span> No comics
            </p>
          ) : (
            <>
              <span>Comics:</span>
              <ul className={styles.comicsList}>
                {comics.items.map((comic, index) => {
                  return <li key={index}>{comic.name}</li>;
                })}
              </ul>
            </>
          )}
        </div>
      </footer>
      <button className={styles.delete} onClick={() => removeCharacters(id)}>
        Delete
      </button>
    </article>
  );
}
