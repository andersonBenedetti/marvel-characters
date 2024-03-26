import styles from './Characters.module.css';
import Character from './Character';

export default function Characters({characters, removeCharacters}) {
  return (
    <div>
      <h2 className={styles.title}>
        <span>Characters</span>
      </h2>
      <div className="container">
        <div className={styles.list}>
          {characters.map((character) => {
            return (
              <Character
                key={character.id}
                character={character}
                removeCharacters={removeCharacters}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
