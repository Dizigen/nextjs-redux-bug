export const setEmail = (email) => ({ type: 'SET_EMAIL', payload: email });

const initialState = { email: '' };

export const EmailReducer = (state=initialState, action) => ({ ...state, email: action.payload })
