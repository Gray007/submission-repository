import React from 'react'

const Course = ( {course} ) => {
  return (
    <div>
      <Header key={course.id} text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ text }) => <h1>{text}</h1>

const Content = ({ parts }) => (
    <ul>
      {parts.map(part => 
      <Part key={part.id} part={part} />
       )}
    </ul>
  )

const Part = ({ part }) => <li>{part.name} {part.exercises}</li>

const Total = ({ parts }) => {
  const totalExercises =  parts
    .map(part => part.exercises)
    .reduce((acc, total) => acc + total, 0)
  return (
    <h4>
      Total number of {totalExercises} exercises for course
    </h4>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Reduxt',
        exercises: 11,
        id: 4
      }
    ]
    // ,
  // id: 2,
  // name: 'Full Stack application development',
  // parts: [
  //     {
  //       name: 'Fundamentals of React 2',
  //       exercises: 77,
  //       id: 1
  //     },
  //     {
  //       name: 'Using props to pass data 2',
  //       exercises: 77,
  //       id: 2
  //     },
  //     {
  //       name: 'State of a component 2',
  //       exercises: 77,
  //       id: 3
  //     }
  //   ]
  }

  return <Course course={course} />
}

export default App