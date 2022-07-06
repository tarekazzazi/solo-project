import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getMeals() {
    try {
        const meals = yield axios.get('/api/meals');

        console.log('the response is', meals.data);
        yield put({
            type: 'SET_MEAL',
            payload: meals.data
        })
    } catch (error) {
        console.log('Meal get request failed', error);
    }
}

function* mealSaga() {
    yield takeLatest('FETCH_MEAL', getMeals);
}

export default mealSaga;