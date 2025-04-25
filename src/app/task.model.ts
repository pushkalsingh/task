export interface Task {
    id: number;
    completed: boolean;
    shortDecription: string;
    longDescription: string;
    dueDate: string;
}

export interface TaskWithoutID {
    completed: boolean;
    shortDecription: string;
    longDescription: string;
    dueDate: string;
}