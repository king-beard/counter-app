import { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value)

  const handleAdd = () => setCounter(counter + 1)

  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }>+1</button>
    </Fragment>
  )
}

CounterApp.prototypes = {
  value: PropTypes.number
}