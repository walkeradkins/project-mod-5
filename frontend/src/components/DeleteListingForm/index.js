import './DeleteListingForm.css';
import { useDispatch } from 'react-redux';
import { deleteListing } from '../../store/listings'
import { useHistory } from 'react-router-dom'

const DeleteListingForm = ({ listing, visible, setVisible, user }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteListing(listing.id))
    history.push('')
  }

  return (
    <div>
      <h3>Are you sure that you want to delete this listing?</h3>
      <button onClick={() => setVisible(false)}>Cancel</button>
      <button onClick={handleDelete}>Yes, Delete</button>
    </div>
  )
}

export default DeleteListingForm;