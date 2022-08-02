import './Rating.css';
import ReactStars from "react-rating-stars-component";

const Rating = ({ label, changeState }) => {

  const ratingChanged = (newRating) => { changeState(newRating) }

  return (
    <div className='rating__container'>
      <p>{label}</p>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      </div>
  );
}

export default Rating;