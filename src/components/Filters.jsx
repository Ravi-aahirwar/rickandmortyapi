import React from 'react'
import { useFilterContext } from '../context/FilterContext'

export default function Filters() {

  const { searchFilter,
    handleGenderFilter,
    genderText,
    speciesText,
    statusText,
    handleSpeciesFIlter,
    handleStatusFIlter,
    filterCards,
  } = useFilterContext()

  const genderData = ["All", "Male", "Female"]
  const speciesData = ["All", "Human", "Alien"]
  const statusData = ["All", "Alive", "unknown", "Dead"]
  return (
    <div className='filters-div'>
      <h3 className='headings'> {filterCards.length} Characters are Available.</h3>
      <h3 className='headings'> Search By Name </h3>
      <input type="text" placeholder='Search' style={{ margin: "10px" }} onChange={searchFilter} />
      <h3 className='headings'> Filter by Gender </h3>
      {
        genderData.map((gender, i) => {
          return <button key={i}
            style={{ margin: "10px", color: gender === genderText ? "red" : "" }} onClick={() => handleGenderFilter(gender)}> {gender} </button>
        })
      }
      <h3 className='headings'> Filter by Species </h3>
      {
        speciesData.map((species, i) => {
          return <button key={i}
            onClick={() => handleSpeciesFIlter(species)}
            style={{ margin: "10px", color: species === speciesText ? "red" : "" }}> {species} </button>
        })
      }
      <h3 className='headings'> Filter by Status </h3>
      {
        statusData.map((status, i) => {
          return <button key={i}
            onClick={() => handleStatusFIlter(status)}
            style={{ margin: "10px", color: status === statusText ? "red" : "" }}> {status} </button>
        })
      } <br />
    </div>
  )
}
