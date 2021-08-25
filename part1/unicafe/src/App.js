import React, { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatsDisplay = ({ counter, text }) => <p>{text} {counter}</p>

const Heading = ({ text }) => <h1>{text}</h1>

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Heading text='Give feedback' />
      <Button onClick={increaseGood} text='Good' />
      <Button onClick={increaseNeutral} text='Neutral' />
      <Button onClick={increaseBad} text='Bad' />
      <Heading text='Statistics' />
      <StatsDisplay counter={good} text='Good'/>
      <StatsDisplay counter={neutral} text='Neutral'/>
      <StatsDisplay counter={bad} text='Bad'/>
    </div>
  )
}

export default App