import React from 'react'
import "../App.css"
import { useWishListContext } from '../context/WishListContext'
import { Link } from 'react-router-dom';
export default function Characters({ elm }) {
  const { id, name, status, species, image, gender } = elm

  const { addToFavourite } = useWishListContext();

  let data = [id, name, status, species, image, gender]

  const handleFavourite = () => {
    addToFavourite(id, data)
  }
  return (
    <div>
      <div className='outer-div'>
        <Link to={`/character/${id}`}>
          <img src={image} height={30} width={30} alt={name} />
        </Link>
        <p>Id: {id} </p>
        <p> Name:  {name} </p>
        <p> Status: {status} </p>
        <p> Gender: {gender} </p>
        <p> Species: {species} </p>
        <p style={{ cursor: "pointer", color: "green", fontWeight: "bolder" }} onClick={handleFavourite} >Add to Favuorite.</p>
      </div>
    </div>
  )
}
