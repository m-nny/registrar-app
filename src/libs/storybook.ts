import { CreateCourse, Course } from '../store/courses/types';

export const createCourse = (course: CreateCourse): Course => {
    return { ...course, id: Math.random().toString(), enrolled: 0 };
};

export const createRndCourse = () => {};
