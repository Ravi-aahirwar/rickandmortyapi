import React from 'react'
import { useWishListContext } from '../context/WishListContext'
import { Link } from 'react-router-dom'

export default function WishListComp({ elm }) {

  const { removeFavourite } = useWishListContext()

  return (
    <div>
      <div className='outer-div'>
        <Link to={`/character/${elm.id}`} >
          <img src={elm.image} height={30} width={30} alt={elm.name} />
        </Link>
        <p>Id: {elm.id} </p>
        <p> Name:  {elm.name} </p>
        <p> Status: {elm.status} </p>
        <p> Gender: {elm.gender} </p>
        <p> Species: {elm.species} </p>
        <p onClick={() => removeFavourite(elm.id)} style={{ cursor: "pointer", color: "red", fontWeight: "bolder" }}> Remove to Favuorite.</p>
      </div>
    </div>
  )
}
