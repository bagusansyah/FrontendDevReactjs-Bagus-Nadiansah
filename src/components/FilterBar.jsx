const FilterBar = ({ filters, onChange, categories, onClear }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.controls}>
        <span style={styles.label}>Filter By:</span>

        <label style={styles.toggle}>
          <input
            type="radio"
            name="openNow"
            checked={filters.openNow}
            onChange={(e) => onChange({ ...filters, openNow: e.target.checked })}
            style={styles.checkbox}
          />
          <span>Open Now</span>
        </label>

        <select
          value={filters.price}
          onChange={(e) => onChange({ ...filters, price: e.target.value })}
          style={styles.select}
        >
          <option value="">Price</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>

        <select
          value={filters.category}
          onChange={(e) => onChange({ ...filters, category: e.target.value })}
          style={styles.select}
        >
          <option value="">Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button onClick={onClear} style={styles.clearBtn}>
        CLEAR ALL
      </button>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    minHeight: 48,
    padding: '0 18px',
    border: '1px solid #efefef',
    backgroundColor: '#fff',
    width: '100%'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: 0
  },
  label: {
    paddingRight: 18,
    fontSize: 13,
    fontWeight: 500,
    color: '#787878',
    textTransform: 'none'
  },
  toggle: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    minHeight: 48,
    padding: '0 18px',
    borderLeft: '1px solid #efefef',
    fontSize: 13,
    color: '#4f4f4f',
    cursor: 'pointer'
  },
  checkbox: {
    margin: 0,
    width: 14,
    height: 14,
    accentColor: '#d9d9d9'
  },
  select: {
    width: 120,
    height: 48,
    padding: '0 34px 0 18px',
    border: 'none',
    borderLeft: '1px solid #efefef',
    backgroundColor: '#fff',
    fontSize: 13,
    color: '#4f4f4f',
    appearance: 'none',
    backgroundImage:
      "linear-gradient(45deg, transparent 50%, #c6c6c6 50%), linear-gradient(135deg, #c6c6c6 50%, transparent 50%)",
    backgroundPosition: 'calc(100% - 18px) 21px, calc(100% - 13px) 21px',
    backgroundSize: '4px 4px, 4px 4px',
    backgroundRepeat: 'no-repeat'
  },
  clearBtn: {
    minWidth: 126,
    height: 32,
    marginLeft: 'auto',
    border: '1px solid #ededed',
    backgroundColor: '#fff',
    color: '#cfcfcf',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 0.6,
    cursor: 'pointer'
  }
};

export default FilterBar;
