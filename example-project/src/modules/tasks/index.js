import createModule from 'client-core/lib/utils/createModule';
import { takeEvery, put } from 'redux-saga/effects';
import reducer from './reducer';
import tasksData from '../../data/tasks.json';

function* requestTasks() {
	yield put({ type: 'RECEIVE_TASKS', payload: { data: tasksData } });
}

function* watch() {
	yield takeEvery('REQUEST_TASKS', requestTasks);
}

export default createModule('tasks', reducer, [watch]);
