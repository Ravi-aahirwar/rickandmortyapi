import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CharacterProvider } from './context/CharacterContext.jsx'
import { FilterProvier } from './context/FilterContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { WishListProvider } from './context/WishListContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharacterProvider>
      <AuthProvider>
        <FilterProvier>
          <WishListProvider>
            <App />
          </WishListProvider>
        </FilterProvier>
      </AuthProvider>
    </CharacterProvider>
  </React.StrictMode>,
)
