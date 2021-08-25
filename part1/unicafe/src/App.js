import React, { useState } from 'react'

const Heading = ({ text }) => <h1>{text}</h1>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({totalClicks, good, neutral, bad}) => {
  let average = (good - bad) / totalClicks
  let positive = 0
  
  if (totalClicks > 0) {
    positive = (good / totalClicks) * 100
    positive = positive.toFixed(2)
    average = average.toFixed(2)
  }
  
  return (
    <div>
      <Heading text='Statistics' />
      <StatsDisplay counter={good} text='Good' />
      <StatsDisplay counter={neutral} text='Neutral' />
      <StatsDisplay counter={bad} text='Bad' />
      <StatsDisplay counter={totalClicks} text='All' />
      <StatsDisplay counter={average || totalClicks} text='Average' />
      <StatsDisplay counter={`${positive}%`} text='Positive' />
    </div>
  )
}

const StatsDisplay = ({ counter, text }) => <p>{text} {counter}</p>

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalClicks, setTotal] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setTotal(totalClicks + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(totalClicks + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setTotal(totalClicks + 1)
  }

  return (
    <div>
      <Heading text='Give feedback' />
      <Button onClick={increaseGood} text='Good' />
      <Button onClick={increaseNeutral} text='Neutral' />
      <Button onClick={increaseBad} text='Bad' />
      <Statistics 
        totalClicks={totalClicks} 
        good={good} 
        neutral={neutral} 
        bad={bad} 
      />
    </div>
  )
}

export default App