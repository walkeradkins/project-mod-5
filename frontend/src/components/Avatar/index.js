import './Avatar.css'

const Avatar = ({ userImage, firstName, size }) => {
  let avatar;
  if (userImage) {
    avatar = (
      <figure className='avatar__image'
        style={{ backgroundImage: `url( ${userImage}`, width: size }} />
    )
  } else {
    avatar = (
      <div className='avatar__no-image' style={{width: size, height: size}}>{firstName[0]}</div>
    )
  }
  return (
    <div>
      {avatar}
    </div>
  );
}

export default Avatar;