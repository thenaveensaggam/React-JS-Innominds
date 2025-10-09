import { takeLatest, call, put } from "redux-saga/effects";

import UserService from "../../services/userService";
import { userActions } from "./users.slice";

function* getAllUsers() {
  try {
    const response = yield call(UserService.getAllUsers);
    if (response.status === 200) {
      yield put(userActions.getAllUsersSuccessAction(response.data));
    }
  } catch (err) {
    yield put(userActions.getAllUsersFailureAction(err));
  }
}


export default function* usersSaga() {
  yield takeLatest(userActions.getAllUsersAction, getAllUsers);
}
