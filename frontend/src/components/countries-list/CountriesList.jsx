import React from 'react';
import cls from './CountryList.module.css';
import CountryItem from './country-item/CountryItem'

const CountriesList = ({countries,itemsSize,removeCountry}) => {
  
  return (
    <div className={itemsSize ? cls.container : cls.list_theme}>
      {countries.map(country =>
        <div key={country.name.common}>
          <CountryItem 
            country={country}
            itemsSize={itemsSize}
            removeCountry={removeCountry}
          />
        </div>
      )}
    </div>
  )
}

export default CountriesList
