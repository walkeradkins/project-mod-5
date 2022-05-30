import './ListingDetails.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneListing } from '../../store/listings';
import { useListing } from '../../context/ListingContext';

const ListingDetails = () => {
  const { listing } = useListing();
  const { id, city, state, name, country, Images, price } = listing;

  console.log(Images[0].url)
  return (
    <div>
      <h2>{name}</h2>
      <h4>{city}, {state}, {country}</h4>
      <div></div>
    </div>
  )
}

export default ListingDetails;