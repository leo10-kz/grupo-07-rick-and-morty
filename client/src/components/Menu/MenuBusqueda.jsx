/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import {  useDispatch } from 'react-redux'
import { getCharactersName } from '../../accion';
import { SearchOutlined  } from '@ant-design/icons';
import { Boton } from '../Characters/Characters-estylo'

function MenuBusqueda() {
   
   
    const dispatch = useDispatch() ;
    const[input , setInput] = useState({
        username : ''
      })
    

      const  handleInputChange = (e) =>{
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
        dispatch(getCharactersName(input.username))
    }
    
    
    
    const onSubmit = (e) =>{
        e.preventDefault();
     }


     

  return (
      <div>
          <form onSubmit={(e) => onSubmit(e)} >
        <input type="text" name='username'  value={input.username} onChange={(e) => handleInputChange(e)}  placeholder='Ingrese el  nombre...'/>
      <Boton type='submit'> <SearchOutlined/> </Boton>
        </form>
      
      </div>
  )
}

export default MenuBusqueda;



