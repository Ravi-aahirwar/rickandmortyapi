import React from 'react'
import "../App.css"
export default function Characters({elm}) {
  const {id, name, status, species, image, gender} = elm
  return (
    <div>
      <div className='outer-div'>
        <img src={image} height={30} width={30} alt={name} />
        <p>Id: {id} </p>
        <p> Name:  {name} </p>
        <p> Status: {status} </p>
        <p> Gender: {gender} </p>
        <p> Species: {species} </p>
      </div>
    </div>
  )
}
