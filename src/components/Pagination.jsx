import styles from './Pagination.module.css';

export default function Pagination({nextPage, prevPage, page}) {
  return (
    <div className={styles.pagination}>
      <button onClick={prevPage} disabled={page === 1}>
        Previous Page
      </button>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}
