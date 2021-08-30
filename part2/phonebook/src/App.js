import React, { useState } from 'react'
import Heading from './components/Heading'
import List from './components/List'

const AddContact = ( {addName, newName, handleNameChange} ) => {
  return (
  <div>
    <Heading text={'Phonebook'}/>
      <form onSubmit={addName}>
        <Input name={'Name'} newName={newName} handleNameChange={handleNameChange}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  </div>
  )
}

const Input = ({ name, newName, handleNameChange}) => (
  <div>
    {name}: 
    <input 
      value={newName}
      onChange={handleNameChange}
    />
  </div>
)

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName
    }

    setPersons(persons.concat(personsObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <AddContact addName={addName} newName={newName} handleNameChange={handleNameChange}/>
      <List persons={persons} />   
    </div>
  )
}

export default App