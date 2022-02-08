import styled from "styled-components";


const Contenedor = styled.div`
max-width: 100%;
color: #201e1f;
margin: 90px 80px;
font-family:"HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
.title{
    font-size: 25px;
}

h3{
    font-size: 20px;
}

img{
    width: 20%;
    border: solid 5px #ff6d00;
    border-radius: 45px 45px;
}

a{
      text-decoration:none;
      color:inherit;
      font-size:14px;
      }
      li{
      display:inline-block;
      width:150px;
      height:30px;
      padding:5px 10px;
      border:1px solid #ff6d00;
      border-radius: 10px;
      text-align:center;
      color:#240046;
      position:relative;
}

li:hover{
      background-color:#fff;
      color:#ff6d00;
      }
      li>ul{
      display:none;
      }

      li:hover>ul{
      display:block;
      position:absolute;
      top:30px;
      left:0px;
}
`;


export{
  
    Contenedor
}