import {put, select} from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {BaseURL} from '../../../constants/index'

import {LOGOUT_USER} from '../Actions/Users/ActionTypes/ApiActionTypes'

function* fetchData(action) {
  const all_state = yield select()

  const userInfo = all_state.userReducer
  const {type} = action

  try {
    let complete_url = BaseURL + action.payload.apiUrl

    let {body} = action.payload
    let request = {
      headers: {
        Accept: 'application/json',
      },
      method: action.payload.requestType,
    }

    if (!(body instanceof FormData)) {
      request.headers['Content-Type'] = action.payload.header
    }

    if (userInfo.accessToken && !action.payload.noAccessToken) {
      request.headers.Authorization = 'Bearer ' + userInfo.accessToken
    }

    if (action.payload.requestType !== 'GET') {
      request = {
        ...request,
        body: JSON.stringify(body),
      }
    }

    const data = yield fetch(complete_url, request)

    const response = yield data.json()
    console.warn({response})
    // if (response.status === 'true' || response.success === 'true') {
    //   const payload = action.payload.response ? action.payload.response : response

    //   yield put({
    //     type: action.payload.reduxActionType,
    //     payload,
    //     requestParams: body,
    //   })
    //   if (action.payload.onSuccess) {
    //     action.payload.onSuccess(response)
    //   }
    // }
    // else {
    //   if (all_state.userReducer.accessToken && response.statusCode === 401) {
    //     AsyncStorage.clear()
    //     yield put(logout())
    //     window.location.href = '/logout'
    //   }

    //   if (action.payload.onFailure) {
    //     action.payload.onFailure(response)
    //   }
    // }
  } catch (error) {
    console.warn({error})

    if (type === LOGOUT_USER) {
      AsyncStorage.clear()
    }
  }
}

export default fetchData
