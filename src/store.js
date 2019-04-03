import { combineReducers, createStore } from 'redux';
import profileReducer from './reducers/profileReducer';
import chatReducer from './reducers/chatReducer';

const rootReducers = combineReducers({
    profile: profileReducer,
    chat: chatReducer
});

const store = createStore(rootReducers);

export default store;