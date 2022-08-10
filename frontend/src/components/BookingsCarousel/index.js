import './BookingsCarousel.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

const BookingsCarousel = ({ images, id }) => {
  return (
    <>
      <Carousel
        className='host__carousel'
        infiniteLoop='true'
        showThumbs={false}
        showStatus={false}
        autoPlay
        showArrows={false}
        showIndicators={false}
      >
        <div className='host__container'>
          <figure
            className='booking-banner__image'
            style={{ backgroundImage: `url( ${'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80'})` }} />
        </div>
        <div className='host__container'>
          <figure
            className='booking-banner__image'
            style={{ backgroundImage: `url( ${'https://images.unsplash.com/photo-1513517860393-d9bf0651bed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'})` }} />
        </div>
        <div className='host__container'>
          <figure
            className='booking-banner__image'
            style={{ backgroundImage: `url( ${'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'})` }} />
        </div>
        <div className='host__container'>
          <figure
            className='booking-banner__image'
            style={{ backgroundImage: `url( ${'https://images.unsplash.com/photo-1470214203634-e436a8848e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80'})` }} />
        </div>
        <div className='host__container'>
          <figure
            className='booking-banner__image'
            style={{ backgroundImage: `url( ${'https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'})` }} />
        </div>
      </Carousel>
    </>
  )
}

export default BookingsCarousel
