import React, {useState} from "react";
import Avatar from '../../assets/19.png'
import { Formulario, Inputs } from "./Add-estilos";


 const Add = () =>{
   const [inputs, setInputs] = useState({
     name : '',
     gender: '',
     species: '',
     episode: ''
   })



   const  handleInputChange = (e) =>{
    setInputs({
      ...inputs,
      [e.target.name]:e.target.value
    })    
   }
  
  
  return(
<div>
    <Formulario>
    <img src={Avatar} alt="new character" /><br />
    <Inputs>
    <label htmlFor="name"> Name:</label> 
    <input type="text" name="name" value={inputs.name} onChange={handleInputChange}/><br /><br />
    <label htmlFor="gender">Gender:</label>
    <input type="text" name="gender" value={inputs.gender} onChange={handleInputChange} /><br /><br />
    <label htmlFor="species">Species:</label>
    <input type="text" name="species" value={inputs.species} onChange={handleInputChange} /> <br /><br />
    <label htmlFor="episode">Episode:</label>
    <input type="text" name="episode" value={inputs.episode} onChange={handleInputChange} />
    </Inputs>
    </Formulario>
</div>
  );
 }



 export default Add