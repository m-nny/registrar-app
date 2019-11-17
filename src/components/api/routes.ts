import { request } from './utils';
import Course, { CourseCreate } from '../../models/Course';


export const getCourses = async () => request.get<Course[]>('/courses').then(({ data }) => data);

export const createCourse = async (course: CourseCreate) => request.post(`/courses`, { data: course });

export const editCourses = async (id: string) => request.post<Course[]>(`/courses/${id}/edit`);

export const removeCourse = async (id: string) => request.delete<Course[]>(`/courses/${id}/delete`);