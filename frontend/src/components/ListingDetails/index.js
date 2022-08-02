import './ListingDetails.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneListing } from '../../store/listings';
import { getListings } from '../../store/listings';
// import { getReviews } from '../../store/reviews'
import DetailPhotoDisplay from '../DetailPhotoDisplay';
import ListingDescription from '../ListingDescription';
import BookingCard from '../BookingCard';
import Reviews from '../Reviews';

const ListingDetails = ({ user, users }) => {
  const { id } = useParams();
  const [isImages, setIsImages] = useState(true);
  const [review, setReview] = useState('');
  const dispatch = useDispatch();
  let selectedListing = useSelector(state => state.listings[id]);
  const listingsArray = useSelector(state => state.listings.listings);
  const newReviews = useSelector(state => state.reviews);

  if (!selectedListing) {
    selectedListing = JSON.parse(localStorage.getItem('currentListing'))
  }

  if (!selectedListing.Images) {
    selectedListing = listingsArray.find(listing => {
    return listing.id == id;
    })
  }
  const reviews = selectedListing.Reviews;

  let rating;

  if (reviews.length) {
    const average = reviews.map(ele => ele.stars).reduce((a, b) => a + b) / reviews.length;
    rating = parseFloat(average.toFixed(2));
  }

  useEffect(() => {
    dispatch(getListings());
    localStorage.setItem('currentListing', JSON.stringify(selectedListing))
  }, [dispatch, review]);

  const { userId, city, state, name, country, Images, price, } = selectedListing;
  const homeOwner = users[userId];

  return (
    <div className='listing__container'>
      <div className='booking__display-header'>
        <h2 className='booking__display-header-name header-title'>{name}</h2>
        <div className='booking__display-rating-container'>
          <p className="material-symbols-outlined">star</p>
          <p className='booking__display-rating-text'>
            {rating ? <p>{rating} &#8226;</p>: <a href='#'>Be the first to leave a review</a>}
          </p>

          <p className='booking__display-rating-amount'>
            <a href='#'>
              {rating ? `${reviews.length} reviews` : null}
            </a>
          </p>
          <p>&#8226;</p>
          <h4 className='booking__display-header-location header-subtitle'>{city}, {state}, {country}</h4>
        </div>
      </div>

      <DetailPhotoDisplay listing={selectedListing} />
      <div className='listing__desc-bookingcard'>
        <ListingDescription listing={selectedListing} users={users} />
        <BookingCard listing={selectedListing} user={user} />
      </div>
      <Reviews props={{ selectedListing, users, newReviews, homeOwner, user, setReview }}/>
    </div>
  )
}

export default ListingDetails;