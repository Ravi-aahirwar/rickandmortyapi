import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CharacterProvider } from './context/CharacterContext.jsx'
import { FilterProvier } from './context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharacterProvider>
      <FilterProvier>
        <App />
      </FilterProvier>
    </CharacterProvider>
  </React.StrictMode>,
)
