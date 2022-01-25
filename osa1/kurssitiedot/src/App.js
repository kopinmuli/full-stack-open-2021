import React from 'react'

const App = () => {
  
  const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }
  const Part = (props) => {
    return (
      <>
        <p>
        {props.part} {props.exercises}
      </p>
      </>
    )
  }
  const Total = (props) => {
    return (
      <>
       <p>Number of exercises {props.exercises}</p>
      </>
    )
  }
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course='Half Stack application development'/>
      <Part  part= 'Fundamentals of React' exercises = {exercises1}/>
      <Part  part= 'Using props to pass data' exercises = {exercises2}/>
      <Part  part= 'State of a component' exercises = {exercises3}/>
      <Total exercises = {exercises1+exercises2+exercises3}/>
    </div>
  )
}


export default App