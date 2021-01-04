import * as actionTypes from "./actionTypes";

const initialState: PersonalInfoState = {
  step: 1,
  firstName: {
    value: '',
    error: false,
    errorText: 'Incorrect entry'
  },
  middleName: {
    value: '',
    error: false,
    errorText: 'Incorrect entry'
  },
  lastName: {
    value: '',
    error: false,
    errorText: 'Incorrect entry'
  },
  email: {
    value: '',
    error: false,
    errorText: 'Incorrect entry'
  },
  musicalPreferences: {
    preference: [],
    error: false,
    errorText: 'Choose at least one variant',
    options: [
      'Spotify',
      'Google Music',
      'Pandora',
      'Other'
    ]
  }
};

const reducer = (
  state: PersonalInfoState = initialState,
  action: PersonalInfoAction
): PersonalInfoState => {
  switch (action.type) {
    case actionTypes.CHANGE_VALUE:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          value: action.payload,
          error: false,
        },
      };

    case actionTypes.SET_PREFERENCE:
      return {
        ...state,
        musicalPreferences: {
          ...state.musicalPreferences,
          preference: action.array,
          error: false,
        }
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          error: true,
        }
      };
    
    case actionTypes.NEXT_STEP:
      return {
        ...state,
        step: state.step + 1
      };

    case actionTypes.PREV_STEP:
    return {
      ...state,
      step: state.step - 1
    };
  }
  return state;
};

export default reducer;
