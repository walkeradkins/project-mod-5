import './UploadProfileImage.css'

const UploadProfileImage = ({ image }) => {
  console.log(image)
  return (
    <>
      <figure className='upload__profile-image'
        style={{ backgroundImage: `url( ${image}` }} />
    </>
  );
}

export default UploadProfileImage;