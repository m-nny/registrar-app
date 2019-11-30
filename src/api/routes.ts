import request from './utils';
import { Course, CreateCourse } from '../store/courses/types';

export const fetchCourses = async () => request.get<Course[]>('/courses').then(({ data }) => data);

export const fetchCourse = async (id: string) =>
    request.get<Course>(`/courses/${id}`).then(({ data }) => data);

export const createCourse = async (course: CreateCourse) =>
    request.post<Course>(`/courses`, course).then(({ data }) => data);

export const editCourses = async (id: string, props: Partial<Course>) =>
    request.patch<Course[]>(`/courses/${id}`, props);

export const removeCourse = async (id: string) => request.delete<Course[]>(`/courses/${id}`);
