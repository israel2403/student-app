import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as StudentActions from '../actions/student.actions';
import { StudentService } from '../services/student.service';

@Injectable()
export class StudentEffects {

  loadStudents$ = createEffect(() => this.actions$.pipe(
    ofType(StudentActions.loadStudents),
    mergeMap(() => this.studentService.getStudents()
      .pipe(
        map(students => StudentActions.loadStudentsSuccess({ students })),
        catchError(error => of(StudentActions.loadStudentsFailure({ error })))
      ))
  ));

  addStudent$ = createEffect(() => this.actions$.pipe(
    ofType(StudentActions.addStudent),
    mergeMap(action => this.studentService.addStudent(action.student)
      .pipe(
        map(student => StudentActions.addStudentSuccess({ student })),
        catchError(error => of(StudentActions.addStudentFailure({ error })))
      ))
  ));

  updateStudent$ = createEffect(() => this.actions$.pipe(
    ofType(StudentActions.updateStudent),
    mergeMap(action => this.studentService.updateStudent(action.student)
      .pipe(
        map(student => StudentActions.updateStudentSuccess({ student })),
        catchError(error => of(StudentActions.updateStudentFailure({ error })))
      ))
  ));

  deleteStudent$ = createEffect(() => this.actions$.pipe(
    ofType(StudentActions.deleteStudent),
    mergeMap(action => this.studentService.deleteStudent(action.id)
      .pipe(
        map(() => StudentActions.deleteStudentSuccess({ id: action.id })),
        catchError(error => of(StudentActions.deleteStudentFailure({ error })))
      ))
  ));

  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) {}
}