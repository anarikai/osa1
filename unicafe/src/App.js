import { useState } from 'react'

// nappi-komponentti
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

//tilastorivi-komponentti
const StatisticLine = ({ text, value }) => {
  if (text != "positive") {
    return (
        <p>{text} {value}</p>
    )
  }
  return (
    <p>{text} {value} %</p>
  )

}

// renderöidään vaihtoehdot ja niiden saamat äänimäärät omassa komponentissa
const Statistics = (props) => {
  if (props.all != 0) {
    return (
      <div>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive} />
      </div>
    )
  }
  return (
    <div>
      <p>No feedback given</p>
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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average/all} positive={good/all*100} />
    </div>
  )
}

export default App
