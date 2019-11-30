import { StateType } from 'typesafe-actions';
import { Store as ReduxStore } from 'redux';

export type RootState = StateType<ReturnType<typeof import('./root-reducer').default>>;

export type Store = ReduxStore<RootState>;
