import { Button } from 'react-bootstrap'
import './style.css'

const Profile = ({image, name, quote}) => {
  return (
    <>
      <img src={image} alt={name + '\'s image'}/>
      <p>{name}</p>
      <p>{quote}</p>
    </>
  )
}

export default Profile;