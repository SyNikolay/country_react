import React,{useState} from 'react';

export const useTheme = (val) => {
  const [itemsSize, setItemsSize] = useState(val);
  const toogleItemSize = () => itemsSize ? setItemsSize(false) : setItemsSize(true);

  return [itemsSize, toogleItemSize]
}