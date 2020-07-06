import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

import signInReducer from './Pages/SignIn/SignInReducer';
import SignUpReducer from './Pages/SignUp/SignUpReducer';

const reducers = combineReducers({
   signIn: signInReducer,
   signUp: SignUpReducer
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;