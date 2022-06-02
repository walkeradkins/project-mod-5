import './ListingDetails.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneListing } from '../../store/listings';
import { getListings } from '../../store/listings';
import  DetailPhotoDisplay from '../DetailPhotoDisplay';
import  BookingCard from '../BookingCard';

const ListingDetails = ({ user }) => {
  const { id } = useParams();
  const [isImages, setIsImages] = useState(true)
  const dispatch = useDispatch();
  let selectedListing = useSelector(state => state.listings[id])
  const listingsArray = useSelector(state => state.listings.listings)
  console.log('selecteListing without Images:: ', selectedListing)
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
  },[dispatch]);


  console.log('selectedListing:: ', selectedListing);
  const { city, state, name, country, Images, price } = selectedListing;


  return (
    <div>
      <h2>{name}</h2>
      <h4>{city}, {state}, {country}</h4>
      <DetailPhotoDisplay listing={selectedListing}/>
      <BookingCard listing={selectedListing} user={user}/>
    </div>
  )
}

export default ListingDetails;