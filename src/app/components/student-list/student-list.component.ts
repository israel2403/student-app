import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as StudentActions from '../../actions/student.actions';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students$: Observable<Student[]>;

  constructor(private store: Store<{ students: Student[] }>) {
    this.students$ = store.select(state => state.students);
  }

  ngOnInit(): void {
    this.store.dispatch(StudentActions.loadStudents());
  }

  deleteStudent(id: number): void {
    this.store.dispatch(StudentActions.deleteStudent({ id }));
  }
}