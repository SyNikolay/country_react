import React, {useState, useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom';
import CountriesServer from '../../API/Server';
import CountryCard from '../../components/countries-list/country-card/CountryCard';
import {useGetCountries} from '../../hooks/useGetCountries';
import ButtonPrimarySm from '../../components/UI/buttons/ButtonPrimarySm'

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const goBack = () => navigate(-1)

  async function getByName(id) {
    setIsLoading(true);
    const response = await CountriesServer.getCountry(id);
    setCountry(response);
    setIsLoading(false)
  }

  useEffect (() => {
    getByName(params.name)
  },[])

  return (
    <div>
      {isLoading 
        ? <div style={{minHeight: '80vh'}}><h1>Загрузка...</h1></div>
        : <CountryCard country={country}/>
      }
      <ButtonPrimarySm onClick={goBack}>Назад</ButtonPrimarySm>
    </div>
  )
}

export default Details
