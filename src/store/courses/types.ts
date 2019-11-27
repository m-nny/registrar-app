import { DeepPartial } from 'utility-types';

export interface Course {
    _id: string;
    abberiation: string;
    title: string;
    instructor: string;
    capacity: number;
    enrolled: number;
}

export interface EditCourse extends DeepPartial<Course> {
    _id: string;
}

export type CreateCourse = Omit<Course, '_id' | 'enrolled'>;
