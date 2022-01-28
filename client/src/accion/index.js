import axios from "axios";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const FILTER_CHARACTERS = "FILTER_CHARACTERS";

export const getCharacters = () => async (dispatch) => {
  let { data } = await axios.get("https://rickandmortyapi.com/api/character");
  console.log(data);
  return dispatch({ type: GET_CHARACTERS, payload: data.results });
};
export const filterCharacters = (name) => {
  return { type: FILTER_CHARACTERS, payload: name };
};





 export const getCharacters2 = () => (dispatch) => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      dispatch({ type: GET_CHARACTERS, payload: json.results });
    });
}; 