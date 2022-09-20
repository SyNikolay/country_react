import React, {useState, useContext} from 'react';
import {observer} from 'mobx-react-lite';

import {filterCountriesList} from '../utils/sortCountries';
import {usePaginate} from '../hooks/usePaginate';

import CountriesList from '../components/countries-list/CountriesList';
import Input from '../components/UI/input/Input';
import ButtonPrimarySm from '../components/UI/buttons/ButtonPrimarySm';
import CountriesPagination from '../components/countries-list/countries-pagination/CountriesPagination';
import {Countries} from '../context/index'
import Select from '../components/UI/select/Select'

import "../App.css";

const HomePage = observer(() => {
  const {countries, setCountries, itemsSize, toogleItemSize, isLoading} = useContext(Countries); // Массив стран
  const [filtredText, setFiltred] = useState(''); // Поиск по названию
  const [selectedSort, setSelectedSort] = useState(''); // Сортировка селкт
  const filteredCountries = filterCountriesList(countries,selectedSort,filtredText);
  const [page, countPerPage, nextPage, prevPage, choosePage, queryFilter] = usePaginate(1, itemsSize, setFiltred, filteredCountries); // Пагинация
  const countriesPerPage = filteredCountries.slice((page-1)*countPerPage,((page-1)*countPerPage+countPerPage));

  const removeCountry = (country) => {
    setCountries(countries.filter(c => c.name.common !== country.name.common))
  }
  
  return (
    <>
      <div className="search_panel">
        <Input
          filtred={filtredText}
          onInput={queryFilter}
          placeholder={'Введите название'}
        />
        <Select
          style={{marginRight:'20px'}}
          placeholder={'Sort by ...'}
          size={'md'}
          options={[
            {value:'vak', title:'Vacablary'},
            {value: 'pop', title: 'Population'}
          ]}
          onClick={setSelectedSort}
        />
        <div className='sort_buttons'>
          <span className='sort_title'>Сортировать по:</span>
          <ButtonPrimarySm onClick={() => setSelectedSort('vak')}>По алфавиту</ButtonPrimarySm>
          <ButtonPrimarySm onClick={() => setSelectedSort('pop')}>По населению</ButtonPrimarySm>
        </div>
        <ButtonPrimarySm style={{minWidth:'105px'}} onClick={() => toogleItemSize()}>
          {itemsSize ? 'Icon theme' : 'Table theme'}
        </ButtonPrimarySm>
      </div>

      <div className="countries_list">
        {(isLoading) 
        ? <div className="is_loading"><h1>Загрузка...</h1></div>
        : <CountriesList 
            countries={countriesPerPage}
            itemsSize={itemsSize}
            removeCountry={removeCountry}
          />
        }
        <CountriesPagination
          totalCount={filteredCountries.length}
          countPerPage={countPerPage}
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
          choosePage={choosePage}
        />
      </div>
    </>
  )
})

export default HomePage
