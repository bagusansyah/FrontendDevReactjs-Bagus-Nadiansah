import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRestaurantById, getReviewsByRestaurant } from '../services/api';
import StarRating from '../components/StarRating';
import ReviewItem from '../components/ReviewItem';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getRestaurantById(id).then(res => setRestaurant(res.data));
    getReviewsByRestaurant(id).then(res => setReviews(res.data));
  }, [id]);

  if (!restaurant) return <p style={{ padding: 24 }}>Loading...</p>;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      <button onClick={() => navigate(-1)} style={styles.backBtn}>← Back</button>

      <h1>{restaurant.name}</h1>
      <StarRating rating={restaurant.rating} />
      <p>{restaurant.categories[0]?.title} · {restaurant.price}</p>
      <p style={{ color: restaurant.isOpen ? 'green' : 'red' }}>
        {restaurant.isOpen ? '● Open Now' : '● Closed'}
      </p>

      <img
        src={restaurant.photos[0]}
        alt={restaurant.name}
        style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 8, margin: '16px 0' }}
      />

      <h2>Reviews</h2>
      {reviews.length === 0
        ? <p>No reviews yet.</p>
        : reviews.map(r => <ReviewItem key={r.id} review={r} />)
      }
    </div>
  );
};

const styles = {
  backBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: '#1a2e4a', marginBottom: 16 }
};

export default DetailPage;