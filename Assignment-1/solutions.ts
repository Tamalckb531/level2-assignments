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

const pluckValues = <T, K extends keyof T> (items: T[], key:K): T[K][] => {
    const final: T[K][] = [];
    for (const item of items) {
        final.push(item[key]);
    }
    return final;
}

class Employee{
    constructor(
        protected name:string,
        private baseSalary:number,
    ) { }
    
    getDetails():string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    constructor(
        name: string,
        baseSalary: number,
        private department: string
    ) {
        super(name, baseSalary);
    }

    getRoleInfo():string {
        return `Manager of ${this.department}: ${this.name}`
    }
}