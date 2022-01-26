import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {  
  const good = props.good 
  const bad = props.bad
  const neutral = props.neutral
  console.log(good,neutral,bad);
  console.log(bad*-1);
  const average = good+bad+neutral/(good*1)+(bad*-1)+(neutral*0)
  const positive = (good*100)/ good+bad+neutral
    return (
      <h3>
      average {average}
      <br></br>
      positive {positive}
      </h3>
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
        <h3>good {good}
          <br/>neutral {neutral}
          <br/>bad {bad}
        </h3>
        <Statistics good={good} bad={bad} neutral={neutral}/>
      </div>
    </div>
  )
}
export default App