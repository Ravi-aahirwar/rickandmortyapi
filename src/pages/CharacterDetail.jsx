import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Characters from '../components/Characters'

export default function CharacterDetail() {
  const { id } = useParams()

  let API = "https://rickandmortyapi.com/api/character"
  const [char, setChar] = useState([])
  const getSignleCharacter = async (url) => {
    try {
      const res = await axios.get(url)
      let data = await res.data
      setChar([data])
    } catch (error) {
      alert(error.message)
    }
  }
  useEffect(() => {
    getSignleCharacter(`${API}/${id}`)
  }, [])
  return (
    <div>
      <h2>Character Detail Page</h2>
      <div style={{display:"flex",width:"300px", margin:"auto"}}>
        {
          char.map((elm) => {
            return <Characters key={elm.id} elm={elm} />
          })
        }
        {
          char.length <=0 &&(
             <h1>Loading...</h1>
          )
        }
      </div>
    </div>
  )
}
