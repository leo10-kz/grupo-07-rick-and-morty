import React from 'react';

import { Box, Imagen, Card, Link } from './Character-style';


export default function Character(props) {
  return (
    <div>
      <Box>
        <Card>
        <h3>{props.name}</h3>
         <Link to={`character/${props.id}`}>
        <Imagen src={props.image} alt='' />
        </Link>
        </Card>
        </Box>
    </div>
  );
}


