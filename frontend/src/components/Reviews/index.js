import './Reviews.css';
import Avatar from '../Avatar';
import ReviewForm from '../ReviewForm';

const Reviews = ({ props }) => {
  const { users, selectedListing, homeOwner, user, setReview, newReviews } = props
  if (!Object.keys(users).length) return null
  const { Reviews } = selectedListing
  const reviews = Reviews;

  const reviewsObj = {};

  reviews.forEach(review => {
    reviewsObj[review.id] = review
  })

  console.log('reviewsObj', reviewsObj)

  if (Object.keys(newReviews).length) {
    for (let i in newReviews) {
      console.log(i)
      if (!reviewsObj[i]) {
        reviews.push(newReviews[i])
        console.log('get here')
      }
    }
  }

  console.log('reviews- AFFTER', reviews)


  const handleReview = () => {

  }

  const displayReview = (review, index) => {
    if (index > 5) return
    const { description, userId, date } = review;
    const { firstName, lastName, profileImageUrl } = users[userId];
    return (
      <div className='listing__desc-review'>
        <div className='listing__desc-review-header'>
          <Avatar userImage={profileImageUrl} firstName={firstName} size={'1.25em'} />
          <div className='listing__desc-review-details-container'>
            <p className='listing__desc-review-user'>{firstName}</p>
            <p className='listing__desc-review-date'>{date}</p>
          </div>
        </div>
        <div className='listing__desc-review-desc'>{description}</div>
      </div>
    )
  }

  return (
    <>
      <div className='listing__desc-reviews-container'>
        {reviews.map((review, index) => displayReview(review, index))}
      </div>
      <div className='listing__desc-reviews-button-container'>
        {reviews.length > 6 &&
        <div className='review__button review__button-showall'>Show all {reviews.length} reviews</div>
        }
        <ReviewForm homeOwner={homeOwner} listing={selectedListing} user={user} setReview={setReview}/>
      </div>
    </>
  );
}

export default Reviews;