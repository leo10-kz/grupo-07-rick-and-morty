import styled from "styled-components";

const Boton = styled.button`
font-family:"HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
    padding: 8px 50px;
    border: 3px solid #ff0054;
    border-radius: 10px;
}


`;

const Const = styled.div`

li{
    list-style: none;
}

`;

export{
    Boton,
    Contenedor,
    Const
}