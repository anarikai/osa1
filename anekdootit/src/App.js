import { useState } from 'react'

// nappi-komponentti
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// Etsitään suosikki äänimäärän perusteella
const FindMaxVotes = (props) => {
  const max = Math.max(...props.points)
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[props.points.indexOf(max)]}</p>
      <p>has {max} votes</p>
    </div>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const pointsArray = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);
  // tulee siis anecdotes-taulukon pituinen taulukko, jossa pelkästään nollia [0,0,0,0,0,0,0]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoint] = useState(pointsArray)

  const handleClick = () => {
    const len = anecdotes.length
    setSelected(Math.floor(Math.random() * len))
  }

  const handleVoteClick = () => {
    const copy = [...points]
    setPoint(copy, [copy[selected] += 1])
    //console.log(points)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleClick} text="next anecdote" />
      <FindMaxVotes points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App
