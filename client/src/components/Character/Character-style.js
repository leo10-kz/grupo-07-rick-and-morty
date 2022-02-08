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
color: #fb5607;
display: grid;
grid-template-columns: 2fr 2fr ;
padding: 5px 15px 5px;
border: 3px solid  #e71d36;
border-radius: 30px 30px;
`;

export const Imagen =  styled.img`
max-width: 40%;
position: relative;
left: 100px;
border: 5px solid #ca6702 ;
border-radius: 40px 40px;
`;

export const Link = styled(NavLink)`
transition: 0.5s;
 &:hover{
     transform: scale(1.5);
 }

`;