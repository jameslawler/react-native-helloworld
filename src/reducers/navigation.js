import {AppNavigator} from '../navigators/app-navigator';

export const nav = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};