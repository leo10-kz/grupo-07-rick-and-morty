import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const  Barra = styled.nav`
width: 90%;
height: 0;
margin:30px auto;
`;

const Port = styled.div`
padding: 10px;
display: flex;
justify-content:space-evenly ;
`;

const Link = styled(NavLink)`
text-decoration: none;
font-size: 20px;
color: white;
text-transform: uppercase;
font-family:"HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
&:hover{
  color: #ff0054;

}
`;

const Imagen =styled.img`
width: 50%;
background-color:#ffd166;
border-radius: 10px;

&&:hover{
  background-color: #fee440;
  transform: scale(1.2);
}
`;

export  {
  Barra,
  Port,
  Link,
  Imagen
}