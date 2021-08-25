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
  const [totalClicks, setTotal] = useState(0)
  let average = (good - bad) / totalClicks
  let positive = 0
  
  if (totalClicks > 0) {
    positive = (good / totalClicks) * 100
    positive = positive.toFixed(2)
    average = average.toFixed(2)
  }


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

  // const average = () => {
  //   if (totalClicks === 0) {
  //     return 0
  //   }
  //   return (good - bad) / totalClicks
  // }

  // const positive = () => {
  //   if (totalClicks === 0) {
  //     return 0 + '%'
  //   }
  //   return (good / totalClicks) + '%'
  // }

  return (
    <div>
      <Heading text='Give feedback' />
      <Button onClick={increaseGood} text='Good' />
      <Button onClick={increaseNeutral} text='Neutral' />
      <Button onClick={increaseBad} text='Bad' />
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

export default App