import { request } from './utils';
import Course, { NewCourse } from '../models/Course';


export const getCourses = async () => request.get<Course[]>('/courses').then(({ data }) => data);

export const createCourse = async (course: NewCourse) => request.post(`/courses`, course);

export const editCourses = async (id: string, props: Partial<Course>) => request.patch<Course[]>(`/courses/${id}`, props);

export const removeCourse = async (id: string) => request.delete<Course[]>(`/courses/${id}`);