import './DetailPhotoDisplay.css'
import { Modal } from '../../context/Modal';
import { useState } from 'react'

const DetailPhotoDisplay = ({ listing }) => {
  const { Images } = listing
  const firstImage = Images[0].url;
  const [showAll, setShowAll] = useState(false)
  const displayFour = []

  for (let i = 1; i < 5; i++) {
    displayFour.push(Images[i]);
  }

  return (
    <>
      <div className='listing-photos'>
        <div className='listing-photos__main'
          onClick={() => setShowAll(true)}
        >
          <figure
            className='listing-photos__main-image card__image'
            style={{ backgroundImage: `url( ${firstImage} )` }} />
        </div>
        <ul className='listing-photos__sub'
          onClick={() => setShowAll(true)}
        >
          <li className='listing__photos-sub' ><figure
            className='listing-photos__image listing-photos__photo1'
            style={{ backgroundImage: `url( ${displayFour[0].url} )` }} /></li>
          <li className='listing__photos-sub'>
            <figure
              className='listing-photos__image listing-photos__photo2'
              style={{ backgroundImage: `url( ${displayFour[1].url} )` }} />
          </li>
          <li className='listing__photos-sub'>
            <figure
              className='listing-photos__image listing-photos__photo3'
              style={{ backgroundImage: `url( ${displayFour[2].url} )` }} />
          </li>
          <li className='listing__photos-sub'>
            <figure
              className='listing-photos__image listing-photos__photo4'
              style={{ backgroundImage: `url( ${displayFour[3].url} )` }} />
          </li>
        </ul>
      </div>
      {showAll &&
        <Modal onClose={() => setShowAll(false)}>
          <div className='all__images-container'>
            <span
            className="material-symbols-outlined close__modal"
            onClick={() => setShowAll(false)}
            >
              close
            </span>
            <ul className='image__grid-container'>
              {Images.map(image =>
                <li
                  className='all__images-single'
                  style={{ backgroundImage: `url( ${image.url} )` }} />
              )}
            </ul>
          </div>
        </Modal>
      }
    </>
  )
}

export default DetailPhotoDisplay
