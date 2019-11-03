interface Course {
  id: string,
  name: string,
  instructor: string,
  capacity: number,
  filled: number,
}

function newCourse(id: string, name: string, instructor: string, capacity: number, filled = 0): Course {
  return {
    id,
    name,
    instructor,
    capacity,
    filled,
  }
}

export default Course;
export {
  newCourse,
}