export default interface Course {
  id: string,
  title: string,
  instructor: string,
  capacity: number,
  filed: number,
}

export type CourseCreate = Omit<Course, 'field'>



export type CourseEventHandler = (course: Course) => void;

export function newCourse(id: string, name: string, instructor: string, capacity: number, filled = 0): Course {
  return {
    id,
    title: name,
    instructor,
    capacity,
    filed: filled,
  }
}