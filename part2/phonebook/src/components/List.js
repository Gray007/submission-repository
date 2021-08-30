import React from 'react'
import Heading from './Heading'

const List = ({ persons, filter }) => {
    let filterRegex = new RegExp(filter, "gi")
    return (
      <div>
        <Heading text={'Numbers'}/>
        <ul>
          {persons
            .filter(person => person.name
            .match(filterRegex))
            .map(person => 
          <Entry key={person.name} person={person} />
          )}
        </ul>
      </div>
    )
  }
  
  const Entry = ({ person }) => <li>{person.name} : {person.number} </li>

  export default List