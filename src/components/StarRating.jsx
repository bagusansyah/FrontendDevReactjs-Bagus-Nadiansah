const StarRating = ({ rating }) => {
  return (
    <div style={{ color: '#f5a623', fontSize: '14px' }}>
      {[1,2,3,4,5].map(star => (
        <span key={star}>{star <= Math.round(rating) ? '★' : '☆'}</span>
      ))}
    </div>
  );
};
export default StarRating;