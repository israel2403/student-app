import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { studentStore } from './store/student.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule.forRoot(routes), ...studentStore],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-app';
}