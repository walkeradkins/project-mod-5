import './Avatar.css'

const Avatar = ({ userImage, userName }) => {

  let avatar;

  if (userImage) {
    avatar = (
      <figure className='avatar__image'
        style={{ backgroundImage: `url( ${userImage}` }} />
    )
  } else {
    avatar = (
      <div className='avatar__no-image' >{userName[0]}</div>
    )
  }
  console.log(userImage)
  return (
    <div>
      {avatar}
    </div>
  );
}

export default Avatar;