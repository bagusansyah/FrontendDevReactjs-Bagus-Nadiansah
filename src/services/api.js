import db from '../db.json';

export const getRestaurants = (params = {}) => {
  let data = [...db.restaurants];
  
  // Server-side category filter (simulated)
  if (params.category) {
    data = data.filter(r =>
      r.categories.some(c => c.title === params.category)
    );
  }
  
  return Promise.resolve({ data });
};

export const getRestaurantById = (id) => {
  const data = db.restaurants.find(r => r.id === id);
  return Promise.resolve({ data });
};

export const getReviewsByRestaurant = (restaurantId) => {
  const data = db.reviews.filter(r => r.restaurantId === restaurantId);
  return Promise.resolve({ data });
};