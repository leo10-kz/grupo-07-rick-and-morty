import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Character(props) {
  return (
    <div>
         <NavLink to={`character/${props.id}`}>
        <h1>{props.name}</h1>
        </NavLink>
        
    </div>
  );
}


