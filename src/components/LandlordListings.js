import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LandlordListings() {
  const { landlordId } = useParams();

  const selectedLandlord = useSelector((state) =>
    state.landlords && state.landlords.find((landlord) => landlord.id === parseInt(landlordId))
  );

  const reviews = useSelector((state) => state.users.reviews) || [];

  if (!selectedLandlord) {
    return <p>Landlord not found.</p>;
  }

  const landlordReviews = reviews.filter((review) => review.landlordId === parseInt(landlordId));

  return (
    <div>
      <h2>Landlord Listings</h2>
      <div>
        <h3>{selectedLandlord.name}</h3>
        <p>Rating: {selectedLandlord.rating}</p>
        <p>Description: {selectedLandlord.description}</p>
        {/* Add more landlord details as needed */}

        <h4>Reviews:</h4>
        {landlordReviews.length > 0 ? (
          landlordReviews.map((review) => (
            <div key={review.id}>
              <h5>Rating: {review.rating}</h5>
              <p>Description: {review.description}</p>
              <p>Property Details: {review.propertyDetails}</p>
              <p>Lease Duration: {review.leaseDuration}</p>
              <p>Deposit Return: {review.depositReturn}</p>
              {/* Render other review details */}
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
      <Link to="/landlord-listings">Go back to listings</Link>
    </div>
  );
}

export default LandlordListings;
