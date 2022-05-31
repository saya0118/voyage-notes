import { configureStore, combineReducers } from "redux";

const rootReducers = combineReducers({
  diaryCardsList: listReducer,
});

export const store = configureStore(rootReducers);