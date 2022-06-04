import './ListingCard.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MainCarousel from '../MainCarousel';


const ListingCard = ({ listing }) => {
  const { id, city, state, name, country, Images, price } = listing;

  const displayLocation = (listing) => {
    return (listing.country === 'United States of America' || listing.country === 'USA') ? `${listing.city}, ${listing.state}` : `${listing.city}, ${listing.country}`;
  }

  const location = displayLocation(listing);

  return (
    <div className='card card__carousel'>
      <MainCarousel images={Images} id={id} />
      {/* <figure className='card__image' style={{ backgroundImage: `url( ${Images[0].url} )` }} /> */}
      <Link to={`/listings/${id}`} className='card__link'>
        <div className='card__location'>
          <p className='card__text card__location'>{location}</p>
        </div>
        <p className='card__text card__name'>{name}</p>
        <div className='card__value-container'>
          <p className='card__text card__value'>${price} </p>
          <p className='card__text card__price'>night</p>
        </div>
      </Link>
    </div>
  )
}

export default ListingCard;