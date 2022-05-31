import './ListingCard.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'


const ListingCard = ({ listing }) => {
  const { id, city, state, name, country, Images, price } = listing;

  const displayLocation = () => {
    return (country === 'USA') ? `${city}, ${state}` : `${city}, ${country}`;
  }

  return (
    <div>
      <Link to={`/listings/${id}`}>
        <figure className='card__image' style={{ backgroundImage: `url( ${Images[0].url} )`}} />
        <h4>{displayLocation()}</h4>
        <p>{name}</p>
        <p><b>${price}</b> night</p>
      </Link>
    </div>
  )
}

export default ListingCard;