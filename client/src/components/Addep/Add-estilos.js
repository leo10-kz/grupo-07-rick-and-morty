import styled from "styled-components";


const Formulario = styled.form`
max-width: 50%;
margin: auto;
margin-top: 100px;
display: flex;
border: 5px solid  #1d3557;
border-radius: 10px;
padding:30px 20px;
background-color: #e8e8e4;
img{
    border: 5px solid #a8dadc;
    border-radius: 10px;
}
`;

const Inputs = styled.div`
display: block;
float: right;
width:55%;
margin:25px 25px  ;

label{
    font-size: 20px;
    font-weight: bold;
    color: #457b9d;
    margin: 10px;
    letter-spacing: 1px;
}
input{
    padding: 4px 50px 4px 5px ;
    border: 4px solid #a8dadc;
    border-radius: 10px;
    margin: 10px;
}

`;
export {
    Formulario,
    Inputs
}