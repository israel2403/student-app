import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { StudentEffects } from '../effects/student.effects';
import { studentReducer } from '../reducers/student.reducer';

export const studentStore = [
  provideStore({ students: studentReducer }),
  provideEffects([StudentEffects])
];