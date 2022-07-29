import './ListingDetails.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneListing } from '../../store/listings';
import { getListings } from '../../store/listings';
import DetailPhotoDisplay from '../DetailPhotoDisplay';
import ListingDescription from '../ListingDescription';
import BookingCard from '../BookingCard';

const ListingDetails = ({ user, users }) => {
  const { id } = useParams();
  const [isImages, setIsImages] = useState(true)
  const dispatch = useDispatch();
  let selectedListing = useSelector(state => state.listings[id])
  console.log(selectedListing)
  const listingsArray = useSelector(state => state.listings.listings)

  if (!selectedListing) {
    selectedListing = JSON.parse(localStorage.getItem('currentListing'))
  }

  if (!selectedListing.Images) {
    selectedListing = listingsArray.find(listing => {
      return listing.id == id;
    })
  }

  useEffect(() => {
    dispatch(getListings());
    localStorage.setItem('currentListing', JSON.stringify(selectedListing))
  }, [dispatch]);

  const { city, state, name, country, Images, price, } = selectedListing;

  return (
    <div className='listing__container'>
      <div className='booking__display-header'>
        <h2 className='booking__display-header-name header-title'>{name}</h2>
        <h4 className='booking__display-header-location header-subtitle'>{city}, {state}, {country}</h4>
      </div>

      <DetailPhotoDisplay listing={selectedListing} />
      <div className='listing__desc-bookingcard'>
        <ListingDescription listing={selectedListing} users={users}/>
        <BookingCard listing={selectedListing} user={user} />
      </div>
    </div>
  )
}

export default ListingDetails;