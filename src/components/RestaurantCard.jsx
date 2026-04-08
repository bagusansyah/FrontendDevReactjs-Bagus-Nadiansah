import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.card}>
      <img
        src={restaurant.photos[0]}
        alt={restaurant.name}
        style={styles.image}
      />
      <div style={styles.info}>
        <p style={styles.meta}>
          {restaurant.categories[0]?.title} · {restaurant.price}
        </p>
        <StarRating rating={restaurant.rating} />
        <div style={styles.statusRow}>
          <span style={{ color: restaurant.isOpen ? 'green' : 'red', fontSize: 12 }}>
            {restaurant.isOpen ? '● OPEN NOW' : '● CLOSED'}
          </span>
        </div>
        <h4 style={styles.name}>{restaurant.name}</h4>
      </div>
      <button style={styles.button} onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
        LEARN MORE
      </button>
    </div>
  );
};

const styles = {
  card: { border: '1px solid #eee', borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  image: { width: '100%', height: 180, objectFit: 'cover', background: '#ccc' },
  info: { padding: '8px 12px', flexGrow: 1 },
  meta: { fontSize: 12, color: '#777', margin: '4px 0' },
  statusRow: { margin: '4px 0' },
  name: { fontSize: 14, fontWeight: 'bold', margin: '4px 0' },
  button: {
    background: '#1a2e4a', color: 'white', border: 'none',
    padding: '10px', width: '100%', cursor: 'pointer', fontWeight: 'bold', letterSpacing: 1
  }
};

export default RestaurantCard;