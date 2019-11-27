import { ActionType, getType, Reducer } from 'typesafe-actions';
import { addCourseAsync, editCourseAsync, initialCourseList, removeCourseAsync } from './actions';
import { Course } from './types';

export type CoursesAction = ActionType<typeof import('./actions')>;

const reducer: Reducer<Course[], CoursesAction> = (state = [], action) => {
    // TODO: use immutableJS
    switch (action.type) {
        case getType(addCourseAsync.success):
            return [...state, action.payload];

        case getType(editCourseAsync.success):
            const course = state.filter(s => s._id === action.payload._id)[0];
            const index = state.indexOf(course);
            return [
                ...state.splice(0, index),
                { ...course, ...action.payload },
                ...state.splice(index + 1),
            ];

        case getType(removeCourseAsync.success):
            return state.filter(({ _id }) => _id !== action.payload);

        case getType(initialCourseList):
            return action.payload;

        default:
            return state;
    }
};

export default reducer;
