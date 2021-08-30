import React from 'react'
import Heading from './Heading'

const List = ({ persons }) => {
    return (
      <div>
        <Heading text={'Numbers'}/>
        <ul>
          {persons.map(person => 
          <Entry key={person.name} name={person.name} />
          )}
        </ul>
      </div>
    )
  }
  
  const Entry = ({ name }) => <li>{name}</li>

  export default List