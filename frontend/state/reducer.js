// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from './action-types.js'

const initialWheelState = 0

function wheel(state = initialWheelState, action) {
  switch(action.type) {
      case types.MOVE_CLOCKWISE: {
        if (state <= 4) {
          return state + 1
        } if (state == 5) {
          return state - 5
        }
    } case types.MOVE_COUNTERCLOCKWISE: {
          if (state === 0 ) {
            return state + 5
          } else return state - 1
    }
  }
  return state
}

const initialQuizState = ''
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case types.SET_QUIZ_INTO_STATE:{ 
      return action.payload
    }
  }
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case types.SET_INFO_MESSAGE: {
     return action.payload}
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case types.INPUT_CHANGE: {
      const { name, value } = action.payload
      return { ...state, [name]: value }
    }case types.RESET_FORM: {
      return initialFormState
    }
  }
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
