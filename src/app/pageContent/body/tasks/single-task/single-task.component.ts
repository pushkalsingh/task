import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Task } from '../../../../task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-task',
  imports: [DatePipe],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.scss'
})
export class SingleTaskComponent {
  @Input() task?: Task;
  @Output() isComplete = new EventEmitter<Task>()
  changeStatus() {
    this.isComplete.emit(this.task);
  }
}
