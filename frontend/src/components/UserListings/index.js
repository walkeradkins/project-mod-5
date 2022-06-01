import './UserListings.css'
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getListings } from '../../store/listings'
import ListingCard from '../ListingCard';
import EditListingForm from '../EditListingForm';
import DeleteListingForm from '../DeleteListingForm';

const UserListings = ({ listings, user }) => {
  const [editForm, setEditForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [deletedListing, setDeletedListing] = useState(null);
  const { id } = useParams();
  const userListings = listings.filter((listing) => {
    return listing.userId === +id
  });

  useEffect(() => {
    if (selectedListing)
      setEditForm(true)
      setDeleteForm(false)
  }, [selectedListing])

  useEffect(() => {
    if (!editForm) {
      setSelectedListing(null);
    }
  }, [editForm])

  useEffect(() => {
    if (deletedListing)
      setDeleteForm(true)
      setEditForm(false)
  }, [deletedListing])

  useEffect(() => {
    if (!deleteForm) {
      setDeletedListing(null);
    }
  }, [deleteForm])

  if (user.id !== +id) {
    return (
      <div>
        <p>Looks like these aren't your listings...</p>
        <ul>
          <li><Link to={`/users/${user.id}/listings`}>Your Listings</Link></li>
          <li><Link to='/'>Back to all listings</Link></li>
      </ul>
      </div >
    )
  }
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
            <button
              onClick={() => setDeletedListing(listing)}
            >Remove Listing</button>
            <button
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
    {deleteForm &&
      <div>
        <DeleteListingForm
        listing={deletedListing}
        visible={deleteForm}
        setVisible={setDeleteForm}
        user={user}
        />
      </div>
    }
  </div>)
}
export default UserListings