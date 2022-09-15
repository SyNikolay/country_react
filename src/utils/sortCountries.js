const filterCountriesList = (countries,sort,text) => {
  let sortedCountries = countries.concat()
  if (sort === 'vak') {
    sortedCountries.sort((a,b) => (a.name.common).localeCompare(b.name.common))
  } else if (sort === 'pop') {
    sortedCountries.sort((a,b) => b.population - a.population)
   } else {
    sortedCountries = countries;
  }
  return sortedCountries.filter(c => c.name.common.toLowerCase().includes(text.toLowerCase()));
}

const truncate = (str, maxlength) => {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

export {filterCountriesList,truncate};