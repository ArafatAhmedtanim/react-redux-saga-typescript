import { History } from "history";
import { combineReducers } from 'redux';
import { RouterState } from 'react-router-redux'
import repositories from './../Github/store/ducks/repositories';

import { RepositoriesState } from './../Github/types'
import { connectRouter } from "connected-react-router";

export interface RootState {
  repositories: RepositoriesState,
  routerReducer: RouterState,
}

export default (history: History) => combineReducers({
  repositories,
  router: connectRouter(history)
});
