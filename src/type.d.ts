interface PersonalInfoState {
  [key: string] :any;

  firstName: {
    value: string
    error: boolean
    errorText: string
  }
  middleName: {
    value: string
    error: boolean
    errorText: string
  }
  lastName: {
    value: string
    error: boolean
    errorText: string
  }
  email: {
    value: string
    error: boolean
    errorText: string
  }
  musicalPreferences: {
    preference: Array<string> = []
    error: boolean,
    errorText: string,
    options: Array<string> = []
  }
}

type TParams = { id: string };

type PersonalInfoAction = {
  type: string
  name: string
  payload: string
  array: Array<string>
}
