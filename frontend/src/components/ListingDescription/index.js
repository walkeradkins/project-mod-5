import './ListingDescription.css'
import Avatar from '../Avatar';

const ListingDescription = ({ listing, users }) => {
  const { userId, city, state, name, country, Images, Reviews, price, description } = listing;
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

  return (
    <div className='listing__desc-container'>
      <div className='listing__desc-header-container'>
        <div className='listing__desc-header-container-left'>
          <h2 className='listing__desc-header'>(Type of Home) hosted by {firstName}</h2>
          <span className='listing__desc-header-details'>Guests &#8226; bedrooms &#8226; beds &#8226; baths</span>
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
    </div>
  );
}

export default ListingDescription;