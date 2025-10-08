import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer.js";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga.js";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);
export default store;
