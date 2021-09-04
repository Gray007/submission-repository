import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Search from './components/Search'
import AddContact from './components/AddContact'
import List from './components/List'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addNameNumber = (event) => {
    event.preventDefault()
    const nameCheck = persons.filter(person => Object.values(person).indexOf(newName) > -1)
    const numberCheck = persons.filter(person => Object.values(person).indexOf(newNumber) > -1)

    if (nameCheck.length > 0 ) {
      window.alert(`${newName} has already been added to the phonebook`)
    } else if (numberCheck.length > 0) {
      window.alert(`${newNumber} has already been added to the phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        }) 
    }   
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Search 
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}
      />
      <AddContact 
        addNameNumber={addNameNumber} 
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} 
        handleNameChange={handleNameChange}
      />
      <List persons={persons} filter={newFilter} />   
    </div>
  )
}

export default App