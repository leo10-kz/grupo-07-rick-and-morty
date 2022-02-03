import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
 width:40%; 
 height: 33px;
 margin:  4%;
 float: left;
 list-style: none;
`;


export const Card = styled.div`
font-size: 25px;
color: #fee440;
display: grid;
grid-template-columns: 2fr 2fr ;
padding: 3px 15px 0;
border-bottom: 5px solid  #8ac926;
border-radius: 10px;
`;

export const Imagen =  styled.img`
max-width: 40%;
position: relative;
left: 100px;
border: 5px solid #ca6702 ;
border-radius: 10px;
`;

export const Link = styled(NavLink)`
transition: 0.5s;
 &:hover{
     transform: scale(1.5);
 }

`;