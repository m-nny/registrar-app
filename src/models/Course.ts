export default interface Course {
  _id: string;
  abberiation: string,
  title: string,
  instructor: string,
  capacity: number,
  enrolled: number,
}

export type NewCourse = Omit<Course, '_id'>



export type CourseEventHandler = (course: Course) => void;

export function newCourse(abberiation: string, title: string, instructor: string, capacity: number, enrolled = 0): NewCourse {
  return {
    abberiation,
    title,
    instructor,
    capacity,
    enrolled,
  }
}