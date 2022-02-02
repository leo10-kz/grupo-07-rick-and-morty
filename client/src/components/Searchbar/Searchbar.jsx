import React from 'react';
import { Barra, Port, Link } from './Searchbar.js'



export default function Searchbar() {


  return (
    <div>
        <Barra>
          <Port>
          <Link to='/'>Inicio</Link>
          <Link to='/add'>Add</Link>
          </Port>
        </Barra>
    </div>
  );
}

