import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  getCharacters2,getCharactersNext} from '../../accion';
import Character from '../Character/Character'
import { Boton, Contenedor, Const } from './Characters-estylo';
import  MenuBusqueda  from '../Menu/MenuBusqueda'
import {  RightCircleFilled, LeftCircleFilled   } from '@ant-design/icons';


export default function Characters() {

const characters = useSelector(state => state.characters)
const dispatch = useDispatch() 
const[page, setPage] = useState(1)


useEffect(() =>{
    dispatch(getCharacters2())  
    console.log('entro');
},[dispatch] )

const nextPage = () =>{
  dispatch(getCharactersNext(page+1));
  setPage(page+1)
}

const prevPage = () =>{
  dispatch(getCharactersNext(page-1));
  setPage(page-1)
}



  return (
    <Const>
      <br />
      <br />
      <Contenedor>
      <Boton  onClick={() => prevPage()}><LeftCircleFilled   style={{fontSize: '20px'}}/></Boton>
      <MenuBusqueda/>
      <Boton  onClick={() => nextPage()} > <RightCircleFilled  style={{fontSize: '20px'}}/> </Boton>
      </Contenedor>
     <br />
     <br />

     
        <ul>
          {characters.map(c =>{
            return(
              <li  key={c.id}> 
              <Character
              id={c.id}
              name={c.name}
              image={c.image}
              /> </li>
            )
          } )}
        </ul> 
    </Const>
  );
}

//dispatch( current => getCharactersNext(current +1))
