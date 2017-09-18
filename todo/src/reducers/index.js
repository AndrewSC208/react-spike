import { combineReducers } from 'redux';
import { todos, todosLoading, todosHasErrored } from './todos';
import { postsBySubreddit, selectedSubreddit } from './reddit';

const rootReducer = combineReducers({
    todos,
    todosLoading,
    todosHasErrored,
    selectedSubreddit,
    postsBySubreddit
});

export default rootReducer;