import { combineReducers } from 'redux';
import searchNameReducer from './searchName';
import setRepoListsReducer from './setRepoLists';

const rootReducer = combineReducers({
    searchNameReducer,
    setRepoListsReducer
});

export default rootReducer;