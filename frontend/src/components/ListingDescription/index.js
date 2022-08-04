import './ListingDescription.css'
import Avatar from '../Avatar';
import { amenitiesObj } from '../utils';
import { Modal } from '../../context/Modal';
import { useState } from 'react';

const ListingDescription = ({ listing, users }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    userId,
    Reviews,
    description,
    bedrooms,
    guests,
    baths,
    beds,
    type,
    amenities
  } = listing;

  if (!Object.keys(users).length) return null

  const { firstName, lastName, profileImageUrl } = users[userId];

  let displayDescription;

  if (description.length > 350) displayDescription = `${description.slice(0, 350)}...`;
  else displayDescription = description;

  const reviews = Reviews;

  let rating;
  if (reviews.length) {
    rating = reviews.reduce((a, b) => a.stars + b.stars) / reviews.length;
  }

  const amenitiesArray = amenities.split(',');

  return (
    <div className='listing__desc-container'>
      <div className='listing__desc-header-container'>
        <div className='listing__desc-header-container-left'>
          <h2 className='listing__desc-header'>{type} hosted by {firstName}</h2>
          <span className='listing__desc-header-details'>{guests} Guests &#8226; {bedrooms} bedrooms &#8226; {beds} beds &#8226; {baths} baths</span>
        </div>
        <div className='listing__desc-header-container-right'>
          <Avatar firstName={firstName} userImage={profileImageUrl} size={'2em'} />
        </div>
      </div>
      <div className='listing__desc-underline' />
      <div className='listing__desc-desc-container'>
        <div className='listing__desc-text'>
          {displayDescription}
        </div>
        <div className='listing__desc-underline' />
      </div>
      <div className='listing__desc-amenities'>
        <p className='amenities__header'>What this place offers</p>
        <div className='listing__desc-amenities-container'>
          {amenitiesArray.map((item, i) => {
            if (i < 10) {
              return (
                <div className='amenity__container'>
                  <span className="material-symbols-outlined">{amenitiesObj[item][0]}</span>
                  <span>{amenitiesObj[item][1]}</span>
                </div>
              )
            }
          })}
        </div>
        {amenitiesArray.length > 10 &&
          <div
            className='amenity__button'
            onClick={() => setShowModal(true)}
          >Show all {amenitiesArray.length} amenities
          </div>
        }
        {showModal &&
          <Modal onClose={() => setShowModal(false)}>
            <div className='all-amenities__container'>
              <div className='all-amenities__header'>
                <span
                  className="material-symbols-outlined close__amenities"
                  onClick={() => setShowModal(false)}
                >
                  close
                </span>
              </div>
              <p className='amenities__header '>What this place offers</p>
              {amenitiesArray.map((item, i) => {
                return (
                  <>
                    <div className='all-amenity__container' key={i}>
                      <span className="material-symbols-outlined">{amenitiesObj[item][0]}</span>
                      <span>{amenitiesObj[item][1]}</span>
                    </div>
                    <div className='listing__desc-underline' />
                  </>
                )
              })}
            </div>
          </Modal>}
      </div>
      <div className='listing__desc-underline' />
    </div>
  );
}

export default ListingDescription;
