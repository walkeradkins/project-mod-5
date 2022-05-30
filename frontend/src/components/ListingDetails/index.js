import './ListingDetails.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneListing } from '../../store/listings';

const ListingDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  const listing = useSelector(state => state.listings.listing)

  useEffect(() => {
    dispatch(getOneListing(id));
  }, [dispatch]);

  console.log('LISTING :', listing)
  return (
    <div>
      <h1>listing details</h1>
    </div>
  )
}

export default ListingDetails;