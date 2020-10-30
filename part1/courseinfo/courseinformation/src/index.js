import React from 'react'
import ReactDOM from 'react-dom'


// Part
const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

// Header
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// Content
const Content = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
      <Total total={props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} />
    </div>
  )
}


// Total
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}


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
  return (
    <div>
      <Content course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))