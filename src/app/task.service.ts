import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {
    const tasks = localStorage.getItem("tasks")
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  private tasks: Task[] = [
    {
      id: 1,
      completed: false,
      shortDecription: "Go for Driving",
      longDescription: "Go for a long drive in Rajpur road and see around and return after few hours",
      dueDate: "04/28/2025"
    },
    {
      id: 2,
      completed: false,
      shortDecription: "Go for Shopping",
      longDescription: "Go for a shopping in Paltan Bazr and see around and return after few hours",
      dueDate: "04/28/2025"
    },
    {
      id: 3,
      completed: false,
      shortDecription: "Go for Lunch",
      longDescription: "Go for Lunch and see around and return after having it",
      dueDate: "04/28/2025"
    },
    {
      id: 4,
      completed: false,
      shortDecription: "Go for Dinner",
      longDescription: "Go for a dinner in a good restaurant and return after few hours after having dinner",
      dueDate: "04/28/2025"
    }
  ]

  getTasks(): Task[] {
    return this.tasks;
  }

  getLengthOfTaskArray():number {
    return this.tasks.length;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks()
  }

  changeTaskStatus(task: Task): void {
    let targetTask = this.tasks.find((t) => t.id === task.id)
    if (targetTask) {
      targetTask.completed = !targetTask.completed
    }
    this.saveTasks()
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
