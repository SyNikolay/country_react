import React, {useState, useEffect} from 'react';
import {Routes,Route} from 'react-router-dom';

import PageHeader from './components/page-header/PageHeader';
import Navigation from './components/nav-bar/Navigation'

import HomePage from './pages/HomePage';
import Details from './pages/details/Details';
import Statistic from './pages/statistic/Statistic';
import MyPage from './pages/my-page/MyPage';


import './App.css';
import { Countries } from './context';
import {useGetCountries} from './hooks/useGetCountries';
import {useTheme} from './hooks/useTheme';
import CountriesServer from './API/Server';

function App() {
  const [countries, setCountries] = useState([]);
  const [itemsSize, toogleItemSize] = useTheme(true); 
  const [getData, isLoading] = useGetCountries(async () => {
    const responce = await CountriesServer.getAll();
    setCountries(responce)
  })

  useEffect(() => {
    getData();
  },[])

  return (
    <div className="App">
      <Countries.Provider value={{
        countries,
        setCountries,
        itemsSize,
        toogleItemSize,
        getData,
        isLoading
      }}>
        <PageHeader />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:name" element={<Details />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/my-page" element={<MyPage />} />
        </Routes>
      </Countries.Provider>
    </div>
  );
}

export default App;
