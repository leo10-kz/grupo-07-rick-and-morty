import axios from "axios";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_NEXT = "GET_CHARACTERS_NEXT"
export   const GET_CHARACTERS_NAME = "GET_CHARACTERS_NAME"


export const getCharactersNext = (current ) => async (dispatch) => {
  console.log(current);
  let { data } = await axios.get("https://rickandmortyapi.com/api/character?page=" + current);
  console.log(data);
  return dispatch({ type: GET_CHARACTERS_NEXT, payload: data.results });
};

 export const getCharacters2 = () => (dispatch) => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      dispatch({ type: GET_CHARACTERS, payload: json.results });
    });
};

export const getCharactersName =  (name) => (dispatch) =>{
  return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
  .then((response) => response.json())
  .then((json) =>{
    dispatch({type:GET_CHARACTERS_NAME, payload:json.results})
  });
};



