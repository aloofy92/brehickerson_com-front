import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    reviews: [
      { id: 1, title: 'Review 1', rating: 4 },
      { id: 2, title: 'Review 2', rating: 5 },
    ],
    savedLandlords: [
      { id: 1, name: 'Landlord 1' },
      { id: 2, name: 'Landlord 2' },
    ],
    accountSettings: {
      // Account settings data here
    },
  };

  return (
    <div>
      <h2>User Profile</h2>
      <h3>Personal Information</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h3>Submitted Reviews</h3>
      <ul>
        {user.reviews.map((review) => (
          <li key={review.id}>
            <Link to={`/reviews/${review.id}`}>{review.title}</Link>
            <span> - Rating: {review.rating}</span>
          </li>
        ))}
      </ul>

      <h3>Saved Landlords</h3>
      <ul>
        {user.savedLandlords.map((landlord) => (
          <li key={landlord.id}>
            <Link to={`/landlords/${landlord.id}`}>{landlord.name}</Link>
          </li>
        ))}
      </ul>

      <h3>Account Settings</h3>
      {/* Render account settings options here */}
    </div>
  );
};

export default UserProfile;
