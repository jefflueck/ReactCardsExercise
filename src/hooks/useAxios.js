import { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

// * Attempt 1
const useAxios = (BASE_URL) => {
  const [data, setData] = useState([]);
  const addData = async (option) => {
    console.log(option);
    let response = null;
    if (typeof option === 'string') {
      response = await axios.get(`${BASE_URL}${option}`);
    } else {
      response = await axios.get(`${BASE_URL}`);
    }
    // const response = await axios.get(`${BASE_URL}${option}`);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };
  return [data, addData];
};

// * Attempt 2
// const useAxios = (url) => {
//   const [response, setResponse] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(url);
//       setResponse((res) => [...res, { ...response.data, id: uuid() }]);
//     };
//     fetchData();
//   }, [url]);
//   return { response };
// };

export default useAxios;
