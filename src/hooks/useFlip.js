import { useState } from 'react';

const useFlip = (initialState = true) => {
  const [state, setState] = useState(initialState);
  const flipCard = () => {
    setState((isUp) => !isUp);
  };
  return [state, flipCard];
};

export default useFlip;
