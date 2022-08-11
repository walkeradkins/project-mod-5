import './UserListings.css'
import { useParams, Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getListings } from '../../store/listings'
import ListingCard from '../ListingCard';
import EditListingForm from '../EditListingForm';
import DeleteListingForm from '../DeleteListingForm';
import NoListingsCard from '../NotListingsCard';
import UnauthorizedUser from '../UnauthorizedUser';
import EditListingFormModal from '../EditListingFormModal';
import { Modal } from '../../context/Modal';
import { AiOutlineEdit, AiTwotoneDelete } from 'react-icons/ai'
import ReactTooltip from 'react-tooltip';


const UserListings = ({ listings, user }) => {
  const dispatch = useDispatch()
  const [editForm, setEditForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [deletedListing, setDeletedListing] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const { id } = useParams();

  const userListings = useSelector(state => state.listings.listings.filter(listing => {
    return listing.userId === user.id;
  }));

  useEffect(() => {
    dispatch(getListings())
  }, [dispatch, showEditModal, showDeleteModal]);

  useEffect(() => {
    if (selectedListing)
      setEditForm(true)
    setDeleteForm(false)
  }, [selectedListing])

  useEffect(() => {
    if (!showEditModal) {
      setSelectedListing(null);
    }
  }, [showEditModal])

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
      <UnauthorizedUser type={'listing'} userId={user.id} />
    )
  }

  if (!userListings.length) {
    return (
      <>
        <h2 className='notrips header-title'>Listings</h2>
        <NoListingsCard />
      </>
    )
  }

  const handleEditClick = (listing) => {
    setSelectedListing(listing);
    setShowEditModal(true);
  }

  const handleDeleteClick = (listing) => {
    setDeletedListing(listing);
    setShowDeleteModal(true);
  }

  return (
    <div className='container'>
      <h1 className='header-title'>Manage Your Listings</h1>
      <ul className='user-listings__grid'>
        {userListings.map(listing => {
          return (
            listing.Images.length > 0 &&
            <li className="user-listings__cards" key={listing.id} >
              <ListingCard listing={listing}
                isSelected={selectedListing && listing.id === selectedListing.id}
              />
              <div className='user-listing__btn-container'>
                <ReactTooltip id="remove__tip" place="top" effect="solid">
                  Remove Listing
                </ReactTooltip>
                <AiTwotoneDelete
                  data-tip data-for='remove__tip'
                  size='2em'
                  onClick={() => handleDeleteClick(listing)}
                  className='user-listing__button'
                />
                <ReactTooltip id="edit__tip" place="top" effect="solid">
                  Edit Listing
                </ReactTooltip>
                <AiOutlineEdit
                  data-tip data-for='edit__tip'
                  size='2em'
                  onClick={() => handleEditClick(listing)}
                  className='user-listing__button'
                />
                {showEditModal && (
                  <Modal onClose={() => setShowEditModal(false)}>
                    <EditListingForm
                      listing={selectedListing}
                      showEditModal={showEditModal}
                      setShowEditModal={setShowEditModal}
                      user={user} />
                  </Modal>
                )}
                {showDeleteModal && (
                  <Modal onClose={() => setShowDeleteModal(false)}>
                    <DeleteListingForm
                      listing={deletedListing}
                      showDeleteModal={showDeleteModal}
                      setShowDeleteModal={setShowDeleteModal}
                      user={user} />
                  </Modal>
                )}
              </div>
            </li>
          )
        })}
      </ul>
      {/* <div className='user-listings__edit-forms'>
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
        </div> */}
      {/* </div> */}
    </div>)
}
export default UserListings