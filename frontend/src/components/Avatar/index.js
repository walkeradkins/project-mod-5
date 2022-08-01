import './Avatar.css'

const Avatar = ({ userImage, userName, size }) => {
  let avatar;
  if (userImage) {
    avatar = (
      <figure className='avatar__image'
        style={{ backgroundImage: `url( ${userImage}`, width: size }} />
    )
  } else {
    avatar = (
      <div className='avatar__no-image' style={{width: size, height: size}}>{userName[0]}</div>
    )
  }
  return (
    <div>
      {avatar}
    </div>
  );
}

export default Avatar;