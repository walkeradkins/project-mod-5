import './UserListings.css'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getListings } from '../../store/listings'
import ListingCard from '../ListingCard';
import EditListingForm from '../EditListingForm';

const UserListings = ({ listings, user }) => {
  const [editForm, setEditForm] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const { id } = useParams();

  const userListings = listings.filter((listing) => {
    return listing.userId === +id
  });

  useEffect(() => {
    if (selectedListing)
      setEditForm(true)
  }, [selectedListing])

  useEffect(() => {
    if (!editForm) {
      setSelectedListing(null);
    }
  }, [editForm])

  return (
    <div>
      <h1>my listings</h1>
      <ul className='row'>
        {userListings.map(listing => {
          return (
            listing.Images.length &&
            <li className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={listing.id} >
              <ListingCard listing={listing}
                isSelected={selectedListing && listing.id === selectedListing.id}
              />
              <button>Remove Listing</button>
              <button
                className={`button-{listing.id}`}
                onClick={() => setSelectedListing(listing)}
              >Edit Listing</button>
            </li>
          )
        })}
      </ul>
      {editForm &&
        <div>
          <EditListingForm
            listing={selectedListing}
            visible={editForm}
            setVisible={setEditForm}
            user={user} />
        </div>}
    </div>
  )
}
export default UserListings