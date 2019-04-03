import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./reducers/profileReducer";
import chatReducer from "./reducers/chatReducer";
import contactReducer from "./reducers/contactReducer";

const rootReducers = combineReducers({
  profile: profileReducer,
  chat: chatReducer,
  contact: contactReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

const store = createStore(
  rootReducers,
  [],
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
