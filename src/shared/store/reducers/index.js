import { combineReducers } from 'redux';
import details from './users';
import chatData from './chat';
import themeData from './theme';
import porfolioData from './portfolio';

const rootReducer = combineReducers({
  user: details,
  chat: chatData,
  theme: themeData,
  portfolio: porfolioData,
});

export default rootReducer;
