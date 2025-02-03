import { all } from 'redux-saga/effects'

import userSagas from './user/userSagas'

function* rootSaga() {
  yield all([userSagas()])
}

export default rootSaga
