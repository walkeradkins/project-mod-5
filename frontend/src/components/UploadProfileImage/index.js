import './UploadProfileImage.css'

const UploadProfileImage = ({ image }) => {
  return (
    <>
      <figure className='upload__profile-image'
        style={{ backgroundImage: `url( ${image}` }} />
    </>
  );
}

export default UploadProfileImage;