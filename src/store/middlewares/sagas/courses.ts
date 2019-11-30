import { call, put } from 'redux-saga/effects';
import {
    createCourse,
    removeCourse as removeCourseApi,
    editCourses as editCoursesApi,
} from '../../../api/routes';
import { addCourseAsync, removeCourseAsync, editCourseAsync } from '../../courses/actions';
import { Course } from '../../courses/types';

export function* removeCourse(action: ReturnType<typeof removeCourseAsync.request>) {
    try {
        yield call(removeCourseApi, action.payload);
        yield put(removeCourseAsync.success(action.payload));
    } catch (error) {
        yield put(removeCourseAsync.failure(error));
    }
}

export function* editCourse(action: ReturnType<typeof editCourseAsync.request>) {
    try {
        yield call(editCoursesApi, action.payload.id, action.payload);
        yield put(editCourseAsync.success(action.payload));
    } catch (error) {
        yield put(removeCourseAsync.failure(error));
    }
}

export function* addCourse(action: ReturnType<typeof addCourseAsync.request>) {
    try {
        const res: Course = yield call(createCourse, action.payload);
        yield put(addCourseAsync.success(res));
    } catch (error) {
        yield put(addCourseAsync.failure(error));
    }
}
