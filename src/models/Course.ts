export default interface Course {
    id: string;
    name: string;
    instructor: string;
    capacity: number;
    filled: number;
}

export type CourseEventHandler = (couse: Course) => void;

export function newCourse(
    id: string,
    name: string,
    instructor: string,
    capacity: number,
    filled = 0,
): Course {
    return {
        id,
        name,
        instructor,
        capacity,
        filled,
    };
}
