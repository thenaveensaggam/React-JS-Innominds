import { all } from "redux-saga/effects";
import usersSaga from "./users/users.saga";

export default function* rootSaga() {
  yield all([usersSaga()]);
}
