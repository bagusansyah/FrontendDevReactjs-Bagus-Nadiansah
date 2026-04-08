const FilterBar = ({ filters, onChange, categories, onClear }) => {
    return (
        <div style={{display:'flex', gap: 12, alignItems: 'center', padding:'12px 0', flexWrap: 'wrap'}}>
            <span style={{ fontWeight: 'bold', fontSize: 13}}>Filter By:</span>

            {/* Open Now Toggle */}
            <label style={styles.filterItem}>
            <input type="checkbox" checked={filters.openNow}onChange={e => onChange({ ...filters, openNow: e.target.checked })}/>Open Now</label>

            {/* Price Filter */}
            <select value={filters.price} onChange={e => onChange({ ...filters, price: e.target.value })} style={styles.select}>
                <option value="">Price</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
            </select>

            {/* Category Filter */}
            <select value={filters.category} onChange={e => onChange({ ...filters, category: e.target.value })} style={styles.select}>
                <option value="">Categories</option>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>

            <button onClick={onClear} style={styles.clearBtn}>Clear All</button>
        </div>
    )
};

const styles = {
    filterItem: {
        display: 'flex', alignItems: 'center', gap: 6,
        fontSize: 13, cursor: 'pointer'
    },
    select: { padding: '4px 8px', border: '1px solid #ccc', borderRadius: 4, fontSize: 13 },
    clearBtn: {
        marginLeft: 'auto', background: 'none', border: 'none', color: '#999', cursor: 'pointer', fontSize: 12
    }
}

export default FilterBar;