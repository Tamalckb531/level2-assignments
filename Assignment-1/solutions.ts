export const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === undefined) return value * 2;
    return value * multiplier;
};

export type InputValue = string | number | boolean;
export type OutputValue = string | number;
export const processInput = (input: InputValue): OutputValue => {
    if (typeof input === "string") return input.trim().toLowerCase();
    if (typeof input === "boolean") return input ? "Active" : "Inactive";
    return input * 10;
};

export const formatCoordinate = ([latitude, longitude, locationName]: readonly [number, number, string]): string => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

export const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const result: T[] = [];
    for (const array of arrays) result.push(...array);
    return result;
};

export interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

export const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const popularCourses: Course[] = courses.filter((value) => (value.isPublished && value.students >= minStudents));
    return popularCourses;
};

export const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    const final: T[K][] = [];
    for (const item of items) {
        final.push(item[key]);
    }
    return final;
};

export class Employee{
    constructor(
        protected name:string,
        private baseSalary:number,
    ) { }

    getDetails():string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

export class Manager extends Employee{
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

export const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }

        setTimeout(() => resolve("Access Granted"), 1000);
    });
};