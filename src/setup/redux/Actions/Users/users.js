import {SIGN_UP} from './ActionTypes/ApiActionTypes'

import {EndPoints} from '../../../../constants/index'

export const signUp = (body, onSuccess, onFailure) => {
  return {
    type: SIGN_UP,
    payload: {
      header: 'application/json',
      apiUrl: EndPoints.CREATE_USER,
      requestType: 'POST',
      onSuccess,
      onFailure,
      body,
      noAccessToken: true,
    },
  }
}
