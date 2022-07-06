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

function* addmeals(action){
    try{ 
        console.log('in meal saga',action.payload);
        yield axios.post('/api/meals', action.payload);
        yield put({
            type: 'FETCH_MEAL',
        })
    }

    catch (err) {
        console.log('error in add meals', err);
    }
}

function* mealSaga() {
    yield takeLatest('FETCH_MEAL', getMeals);

    yield takeLatest('ADD_MEAL', addmeals )
}

export default mealSaga;