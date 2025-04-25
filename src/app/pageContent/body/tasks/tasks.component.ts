import { Component, inject } from '@angular/core';
import { TaskService } from '../../../task.service';
import { Task, TaskWithoutID } from '../../../task.model';
import { SingleTaskComponent } from "./single-task/single-task.component";
import { AddTaskFormComponent } from "./add-task-form/add-task-form.component";

@Component({
  selector: 'app-tasks',
  imports: [SingleTaskComponent, AddTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  showDialogue:boolean = false;
  public taskService = inject(TaskService)
  tasks!:Task[];
  constructor(){
    this.tasks = this.taskService.getTasks();
  }

  showDialogueToAdd():void {
    this.showDialogue = !this.showDialogue;
  }

  addTask(task: TaskWithoutID){
    const lengthOfArray = this.taskService.getLengthOfTaskArray()
    const newTask:Task = {
      id: lengthOfArray+1,
      completed: task.completed,
      shortDecription: task.shortDecription,
      longDescription: task.longDescription,
      dueDate: task.dueDate
    }
    this.taskService.addTask(newTask);
    this.showDialogue = !this.showDialogue;
  }

  changeTaskStatus(task: Task){
    this.taskService.changeTaskStatus(task);
  }
}
