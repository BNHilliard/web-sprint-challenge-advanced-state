import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const { } = props

  useEffect(() => {
    console.log(`form rendered`)
    console.log(props)
  }, [])

  const onChange = evt => {
    const {name, value} = evt.target
    props.inputChange({name, value})
    console.log(props)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz()
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input name="newQuestion" maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={props.newQuestion}/>
      <input name="newTrueAnswer" maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value ={props.newTrueAnswer} />
      <input name="newFalseAnswer" maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={props.newFalseAnswer}/>
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
