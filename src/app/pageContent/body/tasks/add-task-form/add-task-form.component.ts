import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task, TaskWithoutID } from '../../../../task.model';

@Component({
  selector: 'app-add-task-form',
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss'
})
export class AddTaskFormComponent {
  @Output() setToHide = new EventEmitter<void>();
  @Output() addedTask = new EventEmitter<TaskWithoutID>();
  shortDescription = "";
  description = "";
  dueDate = "";
  idNumber = "";
  changeToHide() {
    this.setToHide.emit();
  }

  onFormSubmit() {
    this.addedTask.emit({
      completed: false,
      shortDecription: this.shortDescription,
      longDescription: this.description,
      dueDate: this.dueDate
    })
  }
}
