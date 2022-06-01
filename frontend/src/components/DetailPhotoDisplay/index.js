import './DetailPhotoDisplay.css'

const DetailPhotoDisplay = ({ listing }) => {
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
      <div className='listing-photos__sub col-6'>
        <ul className='row'>
          {displayFour.map(image => {
            return (<li key={image.id} className='col-6'>
              <figure
                className='listing-photos__sub-image card__image'
                style={{ backgroundImage: `url( ${image.url} )` }} />
            </li>)
          }
          )}
        </ul>
      </div>
    </div>
  )
}

export default DetailPhotoDisplay
