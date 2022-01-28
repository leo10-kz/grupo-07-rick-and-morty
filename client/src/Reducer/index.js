import { GET_CHARACTERS } from "../accion";

const initialState = {
    characters:[],
    characterDetail:{}
}
  


const rootReducers = (state = initialState, action) =>{
switch (action.type) {
    case GET_CHARACTERS :
        console.log('entro');
        return{

            ...state,
            characters: action.payload
        }
        
   

    default:
       return state
}



}


export default rootReducers;