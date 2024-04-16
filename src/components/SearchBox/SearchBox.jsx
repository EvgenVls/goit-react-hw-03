import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox}>
      <p className={css.searchTitle}>Find contacts by name</p>
      <input
        className={css.searchField}
        type="text"
        value={value}
        onChange={(event) => {
          onFilter(event.target.value);
        }}
      />
    </div>
  );
}
