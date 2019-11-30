import { ActionType, createReducer } from 'typesafe-actions';
import { addCourseAsync, editCourseAsync, initialCourseList, removeCourseAsync } from './actions';
import { Course } from './types';

export default createReducer<Course[], ActionType<typeof import('./actions')>>([])
    .handleAction(initialCourseList, (_, { payload }) => payload)

    .handleAction(addCourseAsync.success, (state, { payload }) => [...state, payload])

    .handleAction(editCourseAsync.success, (state, { payload }) => {
        const course = state.filter(s => s.id === payload.id)[0];
        const index = state.indexOf(course);
        return [...state.splice(0, index), { ...course, ...payload }, ...state.splice(index + 1)];
    })

    .handleAction(removeCourseAsync.success, (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
    )

    .handleAction(
        [addCourseAsync.failure, editCourseAsync.failure, removeCourseAsync.failure],
        state => {
            // TODO: handling erorrs
            return state;
        },
    );
