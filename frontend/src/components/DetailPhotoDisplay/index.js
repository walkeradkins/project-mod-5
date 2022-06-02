import './DetailPhotoDisplay.css'

const DetailPhotoDisplay = ({ listing }) => {
  // console.log('Listing from PhotoDisplay:: ', listing)
  const { Images } = listing

  const firstImage = Images[0].url;
  const displayFour = []

  for (let i = 1; i < 5; i++) {
    displayFour.push(Images[i]);
  }

  return (
    <div className='listing-photos'>
      <div className='listing-photos__main col-6'>
        <figure
          className='listing-photos__main-image card__image'
          style={{ backgroundImage: `url( ${firstImage} )` }} />
      </div>
      <div className=' col-6'>
        <ul className='row listing-photos__sub'>
          <li className='listing__photos-sub' ><figure
            className='listing-photos__image listing-photos__photo1'
            style={{ backgroundImage: `url( ${displayFour[0].url} )` }} /></li>
          <li className='listing__photos-sub'>
            <figure
              className='listing-photos__image listing-photos__photo2'
              style={{ backgroundImage: `url( ${displayFour[1].url } )` }} />
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
    </div>
  )
}

export default DetailPhotoDisplay
