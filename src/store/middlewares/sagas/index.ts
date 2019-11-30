import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { addCourseAsync, removeCourseAsync, editCourseAsync } from '../../courses/actions';
import { addCourse, removeCourse, editCourse } from './courses';

function* sagaMain() {
    yield all([
        takeEvery(getType(removeCourseAsync.request), removeCourse),
        takeLatest(getType(addCourseAsync.request), addCourse),
        takeLatest(getType(editCourseAsync.request), editCourse),
    ]);
}

export default sagaMain;
