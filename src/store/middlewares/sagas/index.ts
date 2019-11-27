import { all, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { addCourseAsync, removeCourseAsync } from '../../courses/actions';
import { addCourse, removeCourse } from './courses';

function* sagaMain() {
    yield all([
        takeLatest(getType(removeCourseAsync.request), removeCourse),
        takeLatest(getType(addCourseAsync.request), addCourse),
    ]);
}

export default sagaMain;
