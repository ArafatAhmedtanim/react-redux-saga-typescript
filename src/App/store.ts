import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';

import { RepositoriesState } from './../Github/types';
import { UserState } from './../UserName/types';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState
  name: UserState
}

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();

const store: any = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga);

export default store;

export { history };