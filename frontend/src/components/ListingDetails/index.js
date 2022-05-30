import './ListingDetails.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneListing } from '../../store/listings';
import { getListings } from '../../store/listings';

const ListingDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let selectedListing = useSelector(state => state.listings[id])

  if (!selectedListing) {
    selectedListing = JSON.parse(localStorage.getItem('currentListing'))
  }

  useEffect(() => {
    dispatch(getListings());
    localStorage.setItem('currentListing', JSON.stringify(selectedListing))
  }, [dispatch, id]);


  const { city, state, name, country, Images, price } = selectedListing;

  return (
    <div>
      <h2>{name}</h2>
      <h4>{city}, {state}, {country}</h4>
      <div></div>
    </div>
  )
}

export default ListingDetails;