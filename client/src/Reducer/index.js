import {
  GET_CHARACTERS,
  GET_CHARACTERS_NEXT,
  GET_CHARACTERS_NAME,
} from "../accion";

const initialState = {
  characters: [],
  
};

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      
      return {
        ...state,
        characters: action.payload
      };
    case GET_CHARACTERS_NEXT:
      return {
        ...state,
        characters: action.payload,
      };
    case GET_CHARACTERS_NAME:
      return {
        ...state,
        characters: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducers;
