import { useState } from 'react'

// nappi-komponentti
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// renderöidään vaihtoehdot ja niiden saamat äänimäärät omassa komponentissa
const Value = ({good, neutral, bad, all, average, positive}) => {
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

//for each good +1 - (forEach bad +1) / all 
const handleGoodClick = () => {
  setGood(good + 1)
  setAll(all + 1)
  setAverage(average + 1)
}

const handleNeutralClick = () => {
  setNeutral(neutral + 1)
  setAll(all + 1)
  setAverage(average + 0)
}

const handleBadClick = () => {
  setBad(bad + 1)
  setAll(all + 1)
  setAverage(average - 1)
}

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Value good={good} neutral={neutral} bad={bad}  all={all} average={average/all} positive={good/all*100} />
    </div>
  )
}

export default App
