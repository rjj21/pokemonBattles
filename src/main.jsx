import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import { PokemonProvider } from './contexts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PokemonProvider>
    <Router>
      <App />
    </Router>
  </PokemonProvider>,
)
