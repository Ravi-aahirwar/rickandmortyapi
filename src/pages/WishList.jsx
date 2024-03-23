import React from 'react'

import { useWishListContext } from '../context/WishListContext'
import WishListComp from '../components/WishListComp';
export default function WishList() {
  const { favourite_cards } = useWishListContext()
  return (
    <div>
      <h2>WishList Page</h2>
      <div className='outer-character'>
        {
          favourite_cards.map((elm) => {
            return <WishListComp key={elm.id} elm={elm} />
          })
        }
      </div>
        {
          favourite_cards.length <= 0 && (
            <h1 style={{textAlign:"center"}}> Your WishList is Empty.</h1>
          )
        }
    </div>
  )
}
