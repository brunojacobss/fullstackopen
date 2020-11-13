import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import notificationReducer from './reducers/notificationReducer';
import blogReducer from './reducers/blogReducer';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';

const reducer = combineReducers({
  blogs: blogReducer,
  currentUser: userReducer,
  notification: notificationReducer,
  users: usersReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
