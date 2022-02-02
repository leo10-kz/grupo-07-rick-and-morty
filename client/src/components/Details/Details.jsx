import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  Contenedor} from './Detail-style';

export default function Details() {

  const { id } = useParams();
  const characters = useSelector(state => state.characters);
  const character = characters.find(ch => ch.id === +id)

  return (
   <div>
     <Contenedor>
       <h2 className='title'>Nombre: {character.name}</h2>
       <img src={character.image} alt="" />
       <h3>Specie:{character.species}</h3>
       <h3>Gender: {character.gender}</h3>
       <h3>Status: {character.status}</h3>
       <h3>Episodios:</h3>
       <ul>
          {character.episode.map(epi => {
            let e = epi.split('/').pop()
            var t ;
            if (e <= 11) {
              t = 1
            }
            if (e > 11 && e <= 20) {
              t = 2
              
            }
            if (e > 20 && e <= 30) {
              t = 3
            }
            if (e > 30 && e <= 40) {
              t = 4
            }
            if (e > 40 && e <= 51) {
              t = 5
            }

            return (<li><a href={`https://entrepeliculasyseries.nu/episodio/rick-and-morty-temporada-${t}-capitulo-${e}/` } target="_blank" rel="noreferrer">Episode nº: {e}</a></li>)
          })}
       </ul>
       </Contenedor>
   </div>
  );
}

