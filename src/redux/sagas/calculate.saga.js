import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* calculateCarbs(action) {
  console.log("made it to saga", action.payload);
}

function* calculateSaga() {
  yield takeLatest("CALCULATE_WEEKLY_CARBS", calculateCarbs);
}

export default calculateSaga;
