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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course =>
      <Course key={course.id} course={course} /> 
      )}
    </div>
  )
}

export default App