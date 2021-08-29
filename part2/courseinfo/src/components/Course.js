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

export default Course