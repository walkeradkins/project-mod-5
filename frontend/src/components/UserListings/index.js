import './UserListings.css'
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getListings } from '../../store/listings'
import ListingCard from '../ListingCard';
import EditListingForm from '../EditListingForm';
import DeleteListingForm from '../DeleteListingForm';
import NoListingsCard from '../NotListingsCard';

const UserListings = ({ listings, user }) => {
  const dispatch = useDispatch()
  const [editForm, setEditForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [deletedListing, setDeletedListing] = useState(null);
  const { id } = useParams();

  const userListings = useSelector(state => state.listings.listings.filter(listing => {
    return listing.userId === user.id;
  }));

  useEffect(() => {
    dispatch(getListings())
  }, []);

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

  if (!userListings.length) {
    return (
      <>
        <h2 className='notrips header-title'>Listings</h2>
        <NoListingsCard />
      </>
    )
  }

  if (user.id !== +id) {
    return (
      <div>
        <p className='header-title'>Looks like these aren't your listings...</p>
        <ul>
          <li><Link to={`/users/${user.id}/listings`}>Your Listings</Link></li>
          <li><Link to='/'>Back to all listings</Link></li>
        </ul>
      </div >
    )
  }
  return (
    <div className='container'>
      <h1 className='header-title'>Listings</h1>
      <div className='user-listings__main'>
        <div className='user-listings__listings-display'>
          <ul className='row'>
            {userListings.map(listing => {
              return (
                listing.Images.length &&
                <li className="col-sm-6 col-md-4 user-listings__cards" key={listing.id} >
                  <ListingCard listing={listing}
                    isSelected={selectedListing && listing.id === selectedListing.id}
                  />
                  <div className='user-listing__btn-container'>
                    <button
                      onClick={() => setDeletedListing(listing)}
                      className='btn user-listing__btn'
                    >Remove Listing</button>
                    <button
                      onClick={() => setSelectedListing(listing)}
                      className='btn user-listing__btn'
                    >Edit Listing</button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='user-listings__edit-forms'>
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
        </div>
      </div>
    </div>)
}
export default UserListings