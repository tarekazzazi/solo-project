import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getMeals(action) {
  try {
    const meals = yield axios({
      method: "get",
      url: `/api/meals/${action.payload.startDate}-${action.payload.endDate}`,
    });

    console.log("get order dates action.payload ", action.payload);

    console.log("the response is", meals.data);

    yield put({
      type: "SET_MEAL",
      payload: meals.data,
    });
  } catch (error) {
    console.log("Meal get request failed", error);
  }
}
// pulls in the action.payload
// which is the meal.id
// makes a axios delete call with a link of /api/meals/${action.payload.mealId}
// the yield put gets all the meals from the database again by calling getMeals saga
function* deletemeal(action) {
  try {
    console.log("made it to delete meal saga", action.payload.mealId);
    yield axios.delete(`/api/meals/${action.payload.mealId}`);
    yield put({
      type: "FETCH_MEAL",
    });
  } catch (err) {
    console.log("error in delete saga", err);
  }
}

function* addmeals(action) {
  try {
    console.log("in meal saga", action.payload);
    yield axios.post("/api/meals", action.payload);
    yield put({
      type: "FETCH_MEAL",
      payload: {
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      },
    });
  } catch (err) {
    console.log("error in add meals", err);
  }
}

function* updatemeal(action) {
  try {
    console.log("action is", action.payload);

    yield axios.put(`/api/meals/${action.payload.mealId}`, action.payload);
    yield put({
      type: "FETCH_MEAL",
    });
  } catch (err) {
    console.log("error in update meal", err);
  }
}

function* mealSaga() {
  yield takeLatest("FETCH_MEAL", getMeals);

  yield takeLatest("ADD_MEAL", addmeals);

  yield takeLatest("DELETE_MEAL", deletemeal);

  yield takeLatest("UPDATE_MEAL", updatemeal);
}

export default mealSaga;
