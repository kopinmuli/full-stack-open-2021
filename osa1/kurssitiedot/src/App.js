import React from 'react'

const App = () => {
 
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const Header = (props) => {
    return (
      <>
        <h1>{props.name}</h1>
      </>
    )
  }
  const Content = (props) => {
    return (
      <>
        <p>{props.kurssi} {props.harjoitukset}</p>
      </>
    )
  }
  const Total = (props) => {
    return (
      <>
        <p>Number of exercises {props.yhteensa}</p>
      </>
    )
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content kurssi={course.parts[0].name} harjoitukset={course.parts[0].exercises} />
      <Content kurssi={course.parts[1].name} harjoitukset={course.parts[1].exercises} />
      <Content kurssi={course.parts[2].name} harjoitukset={course.parts[2].exercises} />
      <Total yhteensa={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )
}

export default App