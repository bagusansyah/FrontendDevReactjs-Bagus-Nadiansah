import StarRating from './StarRating';

const ReviewItem = ({ review }) => (
  <div style={{ display: 'flex', gap: 16, padding: '16px 0', borderBottom: '1px solid #eee' }}>
    <img src={review.image} alt={review.name} style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover' }} />
    <div>
      <strong>{review.name}</strong>
      <StarRating rating={review.rating} />
      <p style={{ color: '#555', fontSize: 14 }}>{review.text}</p>
    </div>
  </div>
);

export default ReviewItem;