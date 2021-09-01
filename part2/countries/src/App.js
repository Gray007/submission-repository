import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ text, filter, handleChange }) => {
  return (
    <div>
      {text}
      <input 
          value={filter}
          onChange={handleChange}
      />
    </div>
  )
}

const List = ({ list, onClick }) => {
  let length = list.length
    if (length > 10) {
      return (
        <h2>Please be more specific in your search</h2>
      )
    } else if (length < 10 && length > 1) {
      return (
        <ul>
          {list
          .map(item => 
          <Entry key={item.name} name={item.name} onClick={onClick}/>
          )}
        </ul>
      ) 
    } else if (length === 1) {
      let country = list[0]
      let languages = country.languages.map(lang => ({ name: lang.name }))
      return (
        <div>
          <h2>{country.name}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <h3>Languages</h3>
          <ul>
            {languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
          </ul>
          <img src={country.flag} alt={`${country.name} flag`} width={"150"} height={"150"}></img>
        </div>
      )
    }
    return (
      <div>
        Please use the search box above to search for countries
      </div>
    )
  }
  
const Entry = ({ name, onClick }) => {
  return (
    <>
      <div>
        {name}
        <button value={name} onClick={onClick}>Show</button> 
      </div>
    </>
  )
}

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ updatedList, setUpdatedList ] = useState([])
  const [ filter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    let filterRegex = new RegExp(event.target.value, "gi")
    let countryList = countries
    .filter(item => item.name
    .match(filterRegex))
    setNewFilter(event.target.value)
    setUpdatedList(countryList)
  }
  
  return (
    <div>
      <Filter 
        text='Find Countries ' 
        filter={filter} 
        handleChange={handleFilterChange}
      /> 
      <List 
        list={updatedList}
        onClick={handleFilterChange}
      />     
    </div>
  );
}

export default App;