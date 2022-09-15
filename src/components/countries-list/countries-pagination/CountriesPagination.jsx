import React, {useState} from 'react'
import ButtonPrimarySm from '../../UI/buttons/ButtonPrimarySm';
import cls from './CountriesPagination.module.css'

const CountriesPagination = ({page,totalCount,nextPage,prevPage,countPerPage,choosePage}) => {
  const pagesCount= Math.ceil(totalCount/countPerPage);
  const pagesCountArr = [];

  for (let i = 1; i <= pagesCount; i++) {
    pagesCountArr.push(i);
  }

  return (
    <div className={cls.container}>
      <ButtonPrimarySm
        style={{marginRight: '15px'}}
        onClick={() => prevPage()}
      >{"<"}
      </ButtonPrimarySm>

      <div className={cls.pagination_numbers}>
        {pagesCountArr.map(el =>
        <ButtonPrimarySm onClick={() => choosePage(el)} key={el} activ={ el === page ? true : false}>
          {el}
        </ButtonPrimarySm>
        )}
      </div>

      <ButtonPrimarySm
        style={{marginLeft: '15px'}}
        onClick={() => nextPage()}
      >{">"}
      </ButtonPrimarySm>
    </div>
  )
}

export default CountriesPagination
