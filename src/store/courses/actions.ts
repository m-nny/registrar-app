import { createAsyncAction, createAction } from 'typesafe-actions';
import { Course, CreateCourse, EditCourse } from './types';

export const initialCourseList = createAction('@courses/INIT')<Course[]>();

export const removeCourseAsync = createAsyncAction(
    '@courses/REMOVE/REQUEST',
    '@courses/REMOVE/SUCCESS',
    '@courses/REMOVE/FAIL',
)<string, string, Error>();

export const editCourseAsync = createAsyncAction(
    '@courses/EDIT/REQUEST',
    '@courses/EDIT/SUCCESS',
    '@courses/EDIT/FAIL',
)<EditCourse, EditCourse, Error>();

export const addCourseAsync = createAsyncAction(
    '@courses/ADD/REQUEST',
    '@courses/ADD/SUCCESS',
    '@courses/ADD/FAIL',
)<CreateCourse, Course, Error>();
