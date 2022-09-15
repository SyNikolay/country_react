import React, {useState, useEffect, useContext} from 'react';
import {observer} from 'mobx-react-lite';

import CountriesServer from '../API/Server';
import {useGetCountries} from '../hooks/useGetCountries';
import {filterCountriesList} from '../utils/sortCountries';
import {usePaginate} from '../hooks/usePaginate';
import {useTheme} from '../hooks/useTheme';

import CountriesList from '../components/countries-list/CountriesList';
import Input from '../components/UI/input/Input';
import ButtonPrimarySm from '../components/UI/buttons/ButtonPrimarySm';
import CountriesPagination from '../components/countries-list/countries-pagination/CountriesPagination';

import {Countries} from '../context/index'

import "../App.css";

const HomePage = observer(() => {
  const {countries, setCountries} = useContext(Countries); // Массив стран
  const [filtredText, setFiltred] = useState(''); // Поиск по названию
  const [selectedSort, setSelectedSort] = useState('') // Сортировка селкт
  const [itemsSize, toogleItemSize] = useTheme(true); // Смена темы
  const [page, countPerPage, nextPage, prevPage, choosePage, queryFilter] = usePaginate(1, itemsSize, setFiltred); // Пагинация
  const [getData, isLoading] = useGetCountries(async () => {
    const responce = await CountriesServer.getAll();
    setCountries(responce)
  })

  useEffect(() => {
    getData();
  },[])

  const removeCountry = (country) => {
    setCountries(countries.filter(c => c.name.common != country.name.common))
  }
  const filteredCountries = filterCountriesList(countries,selectedSort,filtredText)
  const countriesPerPage = filteredCountries.slice((page-1)*countPerPage,((page-1)*countPerPage+countPerPage));

  return (
    <>
      <div className="search_panel">
        <Input
          filtred={filtredText}
          onInput={queryFilter}
          placeholder={'Введите название'}
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
