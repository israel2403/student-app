import { createReducer, on } from '@ngrx/store';
import * as StudentActions from '../actions/student.actions';
import { Student } from '../model/student.model';

export interface StudentState {
  students: Student[];
  error: any;
}

export const initialState: StudentState = {
  students: [],
  error: null
};

export const studentReducer = createReducer(
  initialState,
  on(StudentActions.loadStudentsSuccess, (state, { students }) => ({ ...state, students })),
  on(StudentActions.loadStudentsFailure, (state, { error }) => ({ ...state, error })),
  on(StudentActions.addStudentSuccess, (state, { student }) => ({ ...state, students: [...state.students, student] })),
  on(StudentActions.addStudentFailure, (state, { error }) => ({ ...state, error })),
  on(StudentActions.updateStudentSuccess, (state, { student }) => ({
    ...state,
    students: state.students.map(s => s.id === student.id ? student : s)
  })),
  on(StudentActions.updateStudentFailure, (state, { error }) => ({ ...state, error })),
  on(StudentActions.deleteStudentSuccess, (state, { id }) => ({
    ...state,
    students: state.students.filter(s => s.id !== id)
  })),
  on(StudentActions.deleteStudentFailure, (state, { error }) => ({ ...state, error }))
);