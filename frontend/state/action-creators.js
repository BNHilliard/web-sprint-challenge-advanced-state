import axios from 'axios'
import * as types from './action-types'
import {useState} from 'react'
import { ThemeConsumer } from 'styled-components'


// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {  
  return {
    type: types.MOVE_CLOCKWISE
  } 
}

export function moveCounterClockwise() {
  return {
    type: types.MOVE_COUNTERCLOCKWISE
  }
 }

export function selectAnswer(num) { 
  return {
    type: types.SET_SELECTED_ANSWER, 
    payload: num
  }
}

export function setMessage (message){ 
  return function (dispatch) {
    return { type: SET_INFO_MESSAGE, payload: message }
  }

}

export function setQuiz(quiz) {
  return { type: types.SET_QUIZ_INTO_STATE, payload: quiz  }
 }

export function inputChange({name, value}) { 
return {
  type: types.INPUT_CHANGE, 
  payload: {name, value}
  }
}


export function resetForm() {
  return {
    type: types.RESET_FORM
  }
 }




export function fetchQuiz() {
  //done
  const URL = 'http://localhost:9000/api/quiz/next'
  return function (dispatch) {
    axios.get(URL)
    .then((res) => {
      console.log(res.data)
      dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: res.data})
    })
    .catch((err) => {
      console.log({err})
    })
  }
}




export function postAnswer() {
 
  return function (dispatch) {

    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(newQuestion, newTrueAnswer, newFalseAnswer) {
  const URL = 'http://localhost:9000/api/quiz/new'
  return function (dispatch) {
    axios.post(URL, { "question_text": `${newQuestion}`, "true_answer_text": `${newTrueAnswer}`, "false_answer_text": `${newFalseAnswer}` })
      .then((res) => {
        console.log(res)
        dispatch({type: types.SET_INFO_MESSAGE, payload: `Congrats: ${res.data.question} is a great question!`})
        dispatch(resetForm())
      })
      .catch((err) => {
        ({type: types.SET_INFO_MESSAGE, payload: err.message})
      })
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
