import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';
import { RootState } from './types';
import sagaMain from './middlewares/sagas';

/*
    Сonvention: 
    Action type must be a plane string - https://github.com/piotrwitek/typesafe-actions#tutorial-v4-v5-is-wip-188
     
*/

const initStore = (state: RootState) => {
    const sagaMiddleware = createSagaMiddleware();
    const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
    const store = createStore(rootReducer, state, enhancers);
    sagaMiddleware.run(sagaMain);

    return store;
};

export default initStore;
