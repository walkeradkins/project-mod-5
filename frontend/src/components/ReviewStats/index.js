import './ReviewStats.css'
import ProgressBar from "@ramonak/react-progress-bar";

const ReviewStats = ({ listing }) => {
  const { Reviews } = listing
  const reviews = Reviews;

  const ratings = {
    cleanliness: [],
    communication: [],
    checkin: [],
    accuracy: [],
    location: [],
    value: [],
  }

  reviews.forEach(ele => {
    ratings.cleanliness.push(ele.cleanliness);
    ratings.communication.push(ele.communication);
    ratings.checkin.push(ele.checkin);
    ratings.accuracy.push(ele.accuracy);
    ratings.location.push(ele.location);
    ratings.value.push(ele.value);
  });

  for (let i in ratings) {
    ratings[i] = ratings[i].reduce((a, b) => a + b) / ratings[i].length;
    ratings[i] = ratings[i].toFixed(1)
  }

  const displayStats = (key, index) => {
    return (
      <div className='review__stat-container' key={index}>
        <p className='review__stat-label'>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
        <div className='review__stat-bar-container'>
          <ProgressBar
            completed={(ratings[key] / 5) * 100}
            bgColor='#1B1B1B'
            isLabelVisible={false}
            height='.25em'
            width='10em'
          />
          <p className='review__stat-amount'>{ratings[key]}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='stats__container'>
      {Object.keys(ratings).map((key, index) =>
        displayStats(key)
      )}
    </div>
  );
}

export default ReviewStats;