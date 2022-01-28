import React from 'react';
import { NavLink } from 'react-router-dom';
import { Barra } from './Searchbar.js'

export default function Searchbar() {
  return (
    <div>
        <Barra>
          <NavLink to='/'>Inicio</NavLink>
          <NavLink to='/add'>Add</NavLink>
        </Barra>
    </div>
  );
}

