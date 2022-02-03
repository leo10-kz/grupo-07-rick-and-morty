import React from 'react';
import { Barra, Port, Link, Imagen } from './Searchbar.js'



export default function Searchbar() {


  return (
    <div>
        <Barra>
          <Port>
          <Link to='/'><Imagen src="https://img.icons8.com/plasticine/100/000000/rick-sanchez.png" alt='' /></Link>
          <Link to='/add'><Imagen src="https://img.icons8.com/plasticine/100/000000/create-new.png"  alt=''/></Link>
          </Port>
        </Barra>
    </div>
  );
}

