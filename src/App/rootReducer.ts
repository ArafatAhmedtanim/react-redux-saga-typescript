import { History } from "history";
import { combineReducers } from 'redux';
import { RouterState } from 'react-router-redux'
import repositories from './../Github/store/ducks/repositories';
import name from '../UserName/store/ducks/currUser';

import { RepositoriesState } from './../Github/types'
import { UserState } from './../UserName/types'
import { connectRouter } from "connected-react-router";

export interface RootState {
  repositories: RepositoriesState,
  routerReducer: RouterState,
  userName: UserState
}

export default (history: History) => combineReducers({
  repositories,
  name,
  router: connectRouter(history)
});
