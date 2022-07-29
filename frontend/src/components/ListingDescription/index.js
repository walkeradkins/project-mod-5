import './ListingDescription.css'

const ListingDescription = ({ listing, users }) => {
  const { userId, city, state, name, country, Images, price, description} = listing;
  const listingOwner = users[userId];

  return (
    <div className='listing__desc-container'>
      <h2 className='listing__desc-header'>(Type of Home) hosted by ListingOwner</h2>
    </div>
   );
}

export default ListingDescription;