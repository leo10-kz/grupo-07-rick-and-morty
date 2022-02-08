import styled from "styled-components";

const Boton = styled.button`
font-family:"HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
cursor: pointer;
padding: 5px 15px;
margin:5px 10px;
background: #ff6d00;
border: 4px solid #ff6d00;
border-radius: 10px;
color: white;
opacity: .8;
&&:hover{
    background-color: white;
    border: 4px solid white;
    color: #ff6d00;
}
`;

const Contenedor = styled.div`
display: flex;
justify-content: space-between;

input{
    padding: 8px 80px 8px 10px ;
    border: 3px solid #ff0054;
    border-radius: 10px;
}


`;

const Const = styled.div`

li{
    list-style: none;
}

`;

const Marcador = styled.p`
display: flex;
justify-content: center;
max-width: 20px;
margin: auto;
padding: 8px;
color: white;
background-color:${props => props.variant === 1  ? '#ff6d00': '#ffc300' };
border: 1px solid #ff6d00;
border-radius: 30px 30px;
`;

export{
    Boton,
    Contenedor,
    Const,
    Marcador
}