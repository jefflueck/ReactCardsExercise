import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

// * Attempt 1
// const useAxios = () => {
//   const [cards, setCards] = useState([]);
//   const addCard = async () => {
//     const response = await axios.get(
//       'https://deckofcardsapi.com/api/deck/new/draw/'
//     );
//     setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
//   };
//   const [pokemon, setPokemon] = useState([]);
//   const addPokemon = async (name) => {
//     const response = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${name}/`
//     );
//     setPokemon((pokemon) => [...pokemon, { ...response.data, id: uuid() }]);
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       useAxios();
//     };
//     fetchData();
//   }, []);
//   return { cards, pokemon, addCard, addPokemon };
// };

// * Attempt 2
const useAxios = (url) => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setResponse((res) => [...res, { ...response.data, id: uuid() }]);
    };
    fetchData();
  }, [url]);
  return { response };
};

export default useAxios;
