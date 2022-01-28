import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getCharacters, getCharacters2 } from '../../accion';
import Character from '../Character/Character'
 
export default function Characters() {

const characters = useSelector(state => state.characters)
const dispatch = useDispatch() 

useEffect(() =>{
    dispatch(getCharacters2())  
    
},[dispatch] )

  return (
    <div>
        <ul>
          {characters.map(c =>{
            return(
              <li key={c.id}> <Character
              id={c.id}
              name={c.name}
              /> </li>
            )
          } )}
        </ul> 
    </div>
  );
}


