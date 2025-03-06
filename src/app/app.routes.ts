import { Routes } from '@angular/router';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentListComponent } from './components/student-list/student-list.component';

export const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'student/:id', component: StudentDetailComponent }
];