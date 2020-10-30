import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Content = ({header, text, votes}) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{text}</p>
      <div>
        has {votes} votes
      </div>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy) 
  }

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * 6))
  }
      console.log(points.indexOf(Math.max(...anecdotes)))

  return (
    <div>
      <Content header='Anecdote of the day' text={anecdotes[selected]} votes={points[selected]} />
      <div>
        <Button handleClick={handleVoteClick} text='vote' />
        <Button handleClick={handleNextClick} text="next anecdote" />
      </div>
      <Content header='Anecdote with most votes' text={anecdotes[points.indexOf(Math.max(...points))]} votes={points.indexOf(Math.max(...points))} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)