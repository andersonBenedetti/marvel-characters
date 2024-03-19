import styles from './Characters.module.css';
import Character from './Character';

export default function Characters({characters}) {
  return (
    <div className={styles}>
      <h2>Characters</h2>
      <div className={styles.list}>
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
}
