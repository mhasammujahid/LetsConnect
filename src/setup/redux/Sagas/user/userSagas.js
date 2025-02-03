import { takeEvery } from 'redux-saga/effects'
import fetchData from '../sagaHelper'

import { SIGN_UP } from '../../Actions/Users/ActionTypes/ApiActionTypes'

function* dataSaga() {
  yield takeEvery(SIGN_UP, fetchData)
}

export default dataSaga
