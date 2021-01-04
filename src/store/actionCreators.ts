import * as actionTypes from "./actionTypes"

export const inputToState = (event: any) => ({
  type: actionTypes.CHANGE_VALUE,
  name: event.target.name,
  payload: event.target.value,
})

export const setPreference = (value: Array<string>) => ({
  type: actionTypes.SET_PREFERENCE,
  array: value
})

export const setError = (name: string) => ({
  type: actionTypes.SET_ERROR,
  name: name,
})
