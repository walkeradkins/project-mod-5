import './HostCarousel.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'

const HostCarousel = ({ images, id }) => {
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
            className='host__image'
            style={{ backgroundImage: `url( ${'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'})` }} />
          <div className='host__info'>
            <p className='host__name host__text1'>Nicholas Denver</p>
            <p className='host__location host__text'>Host in Maui</p>
          </div>
        </div>
        <div className='host__container'>
          <figure
            className='host__image'
            style={{ backgroundImage: `url( ${'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'})` }} />
          <div className='host__info'>
            <p className='host__name host__text2'>Triston Baker</p>
            <p className='host__location host__text'>Host in Austin</p>
          </div>
        </div>
        <div className='host__container'>
          <figure
            className='host__image'
            style={{ backgroundImage: `url( ${'https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80'})` }} />
          <div className='host__info'>
            <p className='host__name host__text3'>Jerrold Caleb</p>
            <p className='host__location host__text'>Host in Stockholm</p>
          </div>
        </div>
        <div className='host__container'>
          <figure
            className='host__image'
            style={{ backgroundImage: `url( ${'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80'})` }} />
          <div className='host__info'>
            <p className='host__name host__text2'>Dulf Ethelred</p>
            <p className='host__location host__text'>Host in CapeTown</p>
          </div>
        </div>
        <div className='host__container'>
          <figure
            className='host__image'
            style={{ backgroundImage: `url( ${'https://images.unsplash.com/photo-1492814580460-1f9a2a463cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'})` }} />
          <div className='host__info'>
            <p className='host__name host__text1'>Roeland Tarquinius</p>
            <p className='host__location host__text'>Host in Portland</p>
          </div>
        </div>
      </Carousel>
    </>
  )
}

export default HostCarousel
