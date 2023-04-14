import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <main>
      <header>
          <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/pokemons">Pokemons</NavLink>
              <NavLink to="/battle">Battle</NavLink>
              
          </nav>
      </header>
      <Outlet />
  </main>
  )
}
