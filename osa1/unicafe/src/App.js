import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine = props =><tr><td>{props.text}</td><td>{props.value}</td></tr>


const Statistics = (props) => {  
  const good = props.good 
  const bad = props.bad
  const neutral = props.neutral
  const total = good+bad+neutral
  const median = (good*1)+(bad*-1)
  const average = median/total
  const positive = (good*100)/total

  if (total == 0) {
    return (
      <h3>
      no feedback given
      </h3>
    )
  }
    return (
      <table>
        <tbody>
        <StatisticLine text="good" value ={good}/>
        <StatisticLine text="neutral" value ={neutral}/>
        <StatisticLine text="bad" value ={bad}/>
        <StatisticLine text="all" value ={total}/>
        <StatisticLine text="average" value ={average}/>
        <StatisticLine text="positive" value ={positive}/>
        </tbody>
      </table>
      
    )
}


const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }



  return (
    <div>
      <div>
        <h1>Statistics</h1>
          <Button handleClick={handleGoodClick} text='good' />
          <Button handleClick={handleNeutralClick} text='neutral' />
          <Button handleClick={handleBadClick} text='bad' />
        <h1>Statistics</h1>
        <Statistics good={good} bad={bad} neutral={neutral}/>
      </div>
    </div>
  )
}
export default App