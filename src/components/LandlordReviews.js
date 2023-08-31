import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveReview, addReview } from '../redux/usersSlice';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function LandlordReviews({ landlordId }) {
  const reviews = useSelector((state) => state.users.reviews) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [propertyDetails, setPropertyDetails] = useState('');
  const [leaseDuration, setLeaseDuration] = useState('');
  const [depositReturn, setDepositReturn] = useState('');

  const handleSubmitReview = (event) => {
    event.preventDefault();

    const newReview = {
      id: Date.now(),
      landlordId: parseInt(landlordId),
      name,
      rating,
      description,
      propertyDetails,
      leaseDuration,
      depositReturn,
    };

    dispatch(addReview(newReview));

    setName('');
    setRating(0);
    setDescription('');
    setPropertyDetails('');
    setLeaseDuration('');
    setDepositReturn('');

    navigate(`/landlord-listings/${landlordId}`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h1>Reviews/Testimonials</h1>
      <Card sx={{ minWidth: 100, width: 300 }}>
        <CardMedia
          component="img"
          height="200"
          image="images/businesswoman-using-laptop-in-kitchen.jpg"
          alt="Landlord"
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </Card>

      {/* Existing Reviews */}
      <div style={{ width: '300px', marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Browse Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} style={{ marginBottom: '10px' }}>
            <h3>Rating: {review.rating}</h3>
            <p>Description: {review.description}</p>
            {/* Render other review details */}
          </div>
        ))}
      </div>

      {/* Write a Review */}
      <div style={{ width: '300px', marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Write a Review</h2>
        <form onSubmit={handleSubmitReview}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Rating:
            <input
              type="number"
              min={0}
              max={5}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <br />
          <label>
            Property Details (optional):
            <input
              type="text"
              value={propertyDetails}
              onChange={(e) => setPropertyDetails(e.target.value)}
            />
          </label>
          <br />
          <label>
            Lease Duration (optional):
            <input
              type="text"
              value={leaseDuration}
              onChange={(e) => setLeaseDuration(e.target.value)}
            />
          </label>
          <br />
          <label>
            Deposit Return:
            <select value={depositReturn} onChange={(e) => setDepositReturn(e.target.value)}>
              <option value="">-- Select an option --</option>
              <option value="yes-full">Yes, in full</option>
              <option value="yes-partial">Yes, partially</option>
              <option value="no">No, not at all</option>
            </select>
          </label>
          <br />
          <button type="submit">Submit Review</button>
        </form>
      </div>

      {/* Submitted Reviews */}
      <div style={{ width: '300px', marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Submitted Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} style={{ marginBottom: '10px' }}>
            <h3>Rating: {review.rating}</h3>
            <p>Description: {review.description}</p>
            {/* Render other review details */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandlordReviews;

