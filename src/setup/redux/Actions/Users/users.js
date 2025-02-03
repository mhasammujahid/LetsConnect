import { SUGN_UP } from './ActionTypes/ApiActionTypes'

export const signUp = (body, onSuccess, onFailure) => {
  return {
    type: SUGN_UP,
    payload: {
      header: 'application/json',
      apiUrl: '',
      requestType: '',
      onSuccess,
      onFailure,
      body,
    },
  }
}
