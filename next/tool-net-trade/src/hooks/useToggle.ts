import { useState } from 'react';

const useToggle = (initialState: boolean = true): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, toggle];
};

export default useToggle;
