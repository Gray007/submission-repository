import React, { useState } from 'react'
import Search from './components/Search'
import AddContact from './components/AddContact'
import List from './components/List'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  const addNameNumber = (event) => {
    event.preventDefault()
    const nameCheck = persons.filter(person => Object.values(person).indexOf(newName) > -1)
    const numberCheck = persons.filter(person => Object.values(person).indexOf(newNumber) > -1)

    if (nameCheck.length > 0 ) {
      window.alert(`${newName} has already been added to the phonebook`)
    } else if (numberCheck.length >0) {
      window.alert(`${newNumber} has already been added to the phonebook`)
    } else {
      const personsObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personsObject))
      setNewName('')
      setNewNumber('')
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