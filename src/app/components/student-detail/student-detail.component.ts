import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as StudentActions from '../../actions/student.actions';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ students: Student[] }>
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.store.select(state => state.students).subscribe(students => {
      this.student = students.find(s => s.id === id);
    });
  }

  saveStudent(): void {
    if (this.student) {
      this.store.dispatch(StudentActions.updateStudent({ student: this.student }));
    }
  }
}