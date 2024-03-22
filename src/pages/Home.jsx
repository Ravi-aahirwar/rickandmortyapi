import React from 'react'
import { useCharContext } from '../context/CharacterContext.jsx'
import Characters from '../components/Characters.jsx'
import Filters from '../components/Filters.jsx'
import { useFilterContext } from '../context/FilterContext.jsx'
export default function Home() {

  const { loading, error, data } = useCharContext()
  const {filterCards} = useFilterContext()

  if (error) {
    return <h1 style={{ color: "red" }}> {error} </h1>
  }


  return (
    <div>
      <h2>Home Page</h2>
      <div className='filters-outer'>
        <Filters/>
        <div className='outer-character'>
          {
            filterCards.map((elm) => {
              return <Characters
                key={elm.id}
                elm={elm}
              />
            })
          }
        {
          filterCards.length<=0 && (
            <h2>Result Not Found.</h2>
          )
        }
        </div>
      </div>

      {
        data.length <= 0 && (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        )
      }

    </div>
  )
}
