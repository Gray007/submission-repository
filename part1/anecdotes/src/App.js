import React, { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Ptext = ({ text }) => (
  <p>
    {text}
  </p>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const initialVote = new Array(anecdotes.length +1).join('0').split('').map(parseFloat)
  const initialRandom = Math.floor(Math.random() * anecdotes.length)

  const [selected, setSelected] = useState(initialRandom)
  const [upVotes, setUpvote] = useState([...initialVote])

  const randomAnecdote = () => {
    let randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const handleUpVote = () => {
    let updatedVote = [...upVotes]
    let updatedVoteValue = updatedVote[selected] + 1
    updatedVote[selected] = updatedVoteValue
    setUpvote(updatedVote)
    console.log(upVotes)
  }

  return (
    <div>
      <Ptext text={anecdotes[selected]} />
      <Ptext text={`Has ${upVotes[selected]} votes`}/>
      <Button onClick={handleUpVote} text='Upvote' />
      <Button onClick={randomAnecdote} text='Next Anecdote' />
    </div>
  )
}

export default App