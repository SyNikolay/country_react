import React,{useState} from 'react';

export const usePaginate = (startPage,itemsSize,setFiltred,filteredCountries) => {
  const [page, setPage] = useState(startPage);
  const countPerPage = itemsSize ?  18 : 33;

  const nextPage = () => {if (page < Math.ceil(filteredCountries.length/countPerPage)) setPage(page+1)};
  const prevPage = () => {if (page > 1) setPage(page-1)};
  const choosePage = (num) => setPage(num);
  const queryFilter = (val) => {
    setFiltred(val)
    setPage(1)
  }

  return [page, countPerPage, nextPage, prevPage, choosePage, queryFilter]
}
