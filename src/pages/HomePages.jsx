import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants } from "../services/api";

const ITEM_PER_PAGE = 8;

const HomePage = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [visible, setVisible] = useState(ITEM_PER_PAGE);
    const [filters, setFilters] = useState({ openNow: false, price: '', category: ''});
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // Server-side: fetch by category
    useEffect(() => {
    setLoading(true);
    const params = filters.category ? { 'categories_like': filters.category } : {};
    getRestaurants(params).then(res => {
        setAllRestaurants(res.data);
        // Extract unique categories
        const cats = [...new Set(res.data.flatMap(r => r.categories.map(c => c.title)))];
        setCategories(cats);
        setLoading(false);
    });
}, [filters.category]);

// Client-side filters
const filtered = allRestaurants.filter(r => {
    if (filters.openNow && !r.isOpen) return false;
    if (filters.price && r.price !== filters.price) return false;
    return true;
});

const handleClear = () => setFilters({ openNow: false, price:'', category:''});

return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 16px'}}>
        <h1 style={{ fontSize: 28, marginBottom: 4 }}>Restaurants</h1>
        <p style={{ color: '#777', marginBottom: 20}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>

        <FilterBar 
        filters={filters}
        onChange={setFilters}
        categories={categories}
        onClear={handleClear}
        />

        <h2 style={{ fontSize: 18, margin: '24px 0 16px' }}>All Restaurants</h2>

        {loading ? <p>Loading...</p> : (
            <>
            <div style={styles.grid}>
                {filtered.slice(0, visible).map(r => (
                    <RestaurantCard key={r.id} restaurant={r} />
                ))}
                </div>
                {visible < filtered.length && (
                    <div style={{ textAlign: 'center', marginTop: 32 }}>
                        <button onClick={() => setVisible(v => v + ITEM_PER_PAGE)} style={styles.loadMore}>
                            Load More
                        </button>
                    </div>
                )}
                </>
        )}
    </div>
);
};

const styles = {
    grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 },
    loadMore: {
        padding: '12px 40px', border: '1px solid #ccc', background: 'white',
        cursor: 'pointer', fontWeight: 'bold', letterSpacing: 1
    }
};

export default HomePage;
