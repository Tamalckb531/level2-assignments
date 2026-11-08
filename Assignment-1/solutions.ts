const multiplyValue = (value:number, multiplier?:number):number => {
    if (multiplier === undefined) return value * 2;
    return value * multiplier;
}

type InputValue = string | number | boolean;
type OutputValue = string | number;
const processInput = (input: InputValue): OutputValue => {
    if (typeof input === "string") return input.trim().toLowerCase();
    if (typeof input === "boolean") return input ? "Active" : "Inactive";
    return input * 10;
}

const formatCoordinate = ([latitude,longitude,locationName]: readonly [number, number, string]): string => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const result: T[] = [];
    for (const array of arrays) result.push(...array);
    return result;
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const popularCourses: Course[] = courses.filter((value) => (value.isPublished && value.students >= minStudents)); 
    return popularCourses;
}
