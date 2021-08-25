import React, { useState } from 'react'

const Heading = ({ text }) => <h1>{text}</h1>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const ButtonGroup = ({totalClicks, good, neutral, bad, setTotal, setGood, setBad, setNeutral}) => {
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
    </div>
  )
}

const Statistics = ({totalClicks, good, neutral, bad}) => {
  let average = (good - bad) / totalClicks
  let positive = 0
  
  if (totalClicks > 0) {
    positive = (good / totalClicks) * 100
    positive = positive.toFixed(2)
    average = average.toFixed(2)
  }

  if (totalClicks === 0) {
    return (
      <div>
        <Heading text='Statistics' />
        <p>No feedback given as of yet</p>
      </div>
    )
  }
  return (
    <div>
      <Heading text='Statistics' />
      <StatisticLine counter={good} text='Good' />
      <StatisticLine counter={neutral} text='Neutral' />
      <StatisticLine counter={bad} text='Bad' />
      <StatisticLine counter={totalClicks} text='All' />
      <StatisticLine counter={average || totalClicks} text='Average' />
      <StatisticLine counter={`${positive}%`} text='Positive' />
    </div>
  )
}

const StatisticLine = ({ counter, text }) => <p>{text} {counter}</p>

const App = () => {
  //Might have been better to go with an object to handle state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalClicks, setTotal] = useState(0)

  return (
    <div>
      <ButtonGroup 
        totalClicks={totalClicks}
        setTotal ={setTotal} 
        good={good}
        setGood ={setGood}
        neutral={neutral}
        setNeutral ={setNeutral} 
        bad={bad}
        setBad ={setBad} 
      />
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