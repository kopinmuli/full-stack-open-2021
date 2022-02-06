import React from 'react'


const Course = ({ course }) => {
    return (
      <>
        <Header course={course} />
        <Content course={course} />
        <Sum course={course} />
      </>
    )
  }
  
  const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Content = ({ course }) => {
    return (  
      <>
        <Part course={course}/>
      </>
    )
  }
  
  const Part = ({ course }) => {
    const parts = course.parts.map(x=><p key={x.id}>{x.name} {x.exercises}</p>);
    return (
      <>
        {parts}
      </>
    )
  }
  
  
  const Sum = ({ course }) => {
    const parts = course.parts.map(x=>x);
    var sum = parts.reduce(function(x, y) { 
      return x + y.exercises
    },0)  
    return (
      <p style={{fontWeight:"bold"}}>Total of {sum} exercises</p>
    )
  }
  
export default Course