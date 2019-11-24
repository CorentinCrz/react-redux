import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index'

interface IinitialState {
  login: { auth: boolean };
}

const initialState: IinitialState = {
  login: { auth: false }
};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, initialState, composeEnhancers())