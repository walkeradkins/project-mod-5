import './MainCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
const MainCarousel = ({ images, id }) => {

  return (
    <div>
      <Carousel className='main__carousel' infiniteLoop='true' showThumbs={false}>
        {images.map(image =>
          <div className='image'>
            <Link to={`/listings/${id}`} className='card__link'>
            <figure className='card__image' style={{ backgroundImage: `url( ${image.url} )` }} />
            </Link>
          </div>
        )}
      </Carousel>
    </div>
  )
}

export default MainCarousel
