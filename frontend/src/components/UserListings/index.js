import './UserListings.css'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getListings } from '../../store/listings'
import ListingCard from '../ListingCard';
import EditListingForm from '../EditListingForm';

const UserListings = ({ listings }) => {
  const [editForm, setEditForm] = useState(false);
  const [listing, setListing] = useState({});

  const { id } = useParams();
  const userListings = listings.filter((listing) => {
    return listing.userId === +id
  });

  // useEffect((e) => {
  //   setListing(e.target.value)
  // }, [editForm])

  return (
    <div>
      <h1>my listings</h1>
      <ul className='row'>
        {userListings.map(listing => {
          return (
            listing.Images.length &&
            <li className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={listing.id} >
              <ListingCard listing={listing} />
              <button>Remove Listing</button>
              <button
              onClick={() => setEditForm(prev => !prev)}
              className={listing.id}
              >Edit Listing</button>
            </li>
          )
        })}
      </ul>
      {editForm &&
        <div>
          <EditListingForm />
        </div>}
    </div>
  )
}
export default UserListings