import { Component } from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-body',
  imports: [TasksComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
