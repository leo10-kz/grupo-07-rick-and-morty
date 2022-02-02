import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const  Barra = styled.nav`

width: 90%;
height: 40px;
margin: auto;
background-color:#ee9b00 ;
border-radius: 5px;
opacity: .7;
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

export  {
  Barra,
  Port,
  Link
}