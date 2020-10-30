import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => <h1>{text}</h1>

const Statistic = ({text, count}) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{count}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral, submissions}) => {      
  const average = (good, bad, all) => {
    if (all === 0) return 0
    return (good - bad) / all
  }

  const percentPos = (good, all) => {
    if (all === 0) return 0
    return (good * 100) / all
  }

  if (submissions === 0) {
    return <div>No feedback given</div>
  }
  return (
    <>
    <table>
      <tbody>
        <Statistic text='good' count={good}/>
        <Statistic text='neutral' count={neutral}/>
        <Statistic text='bad' count={bad}/>
        <Statistic text='all' count={submissions} />
        <Statistic text='average' count={average(good, bad, submissions) + '%'} />
        <Statistic text='positive' count={percentPos(good, submissions) + '%'} />
      </tbody>
    </table>
    </>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [submissions, setSubmissions] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setSubmissions(submissions + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setSubmissions(submissions + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setSubmissions(submissions + 1)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} submissions={submissions} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)