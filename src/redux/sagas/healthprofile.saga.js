import { takeLatest } from "redux-saga/effects";
import axios from "axios";

function* addhealthinfo(action) {
  try {
    console.log("in health saga", action.payload);
    yield axios.post("/api/userHealthInfo", action.payload);
  } catch (err) {
    console.log("error in health saga", err);
  }
}
function* userprofileSaga() {
  yield takeLatest("ADD_USER_HEALTH_INFO", addhealthinfo);
}

export default userprofileSaga;
