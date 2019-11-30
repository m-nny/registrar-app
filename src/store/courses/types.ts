import { DeepPartial } from 'utility-types';

export interface Course {
    id: string;
    abbreviation: string;
    title: string;
    instructor: string;
    capacity: number;
    enrolled: number;
}

export interface EditCourse extends DeepPartial<Course> {
    id: string;
}

export type CreateCourse = Omit<Course, 'id' | 'enrolled'>;
