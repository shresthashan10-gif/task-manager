const FILTERS = ["All", "Active", "Completed"];

function FilterBar({ filter, onFilterChange }) {
  return (
    <div className="filter-bar">
      {FILTERS.map((f) => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => onFilterChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
