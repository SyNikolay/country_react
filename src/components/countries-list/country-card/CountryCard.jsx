import React from 'react'
import cls from './CountryCard.module.css'

const CountryCard = ({country}) => {
  return (
    <div>
      <div className={cls.wrapper}>
        <div className={cls.flag_container}>
          <img className={cls.flag} src={country.flags.png} />
        </div>
        <div className={cls.description}>
          <h1 className={cls.title}>{country.name}</h1>
          <p className={cls.region}><span className={cls.subtitle}>Регион: </span>{country.region}</p>
          <p className={cls.capital}><span className={cls.subtitle}>Столица: </span>{country.capital}</p>
          <p className={cls.population}><span className={cls.subtitle}>Население: </span>{country.population}</p>
          <p className={cls.language}><span className={cls.subtitle}>Язык: </span>{country.languages[0].name}</p>
          <p className={cls.language}><span className={cls.subtitle}>Валюта: </span>{country.currencies[0].name}</p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard
