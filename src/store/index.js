import { createStore } from 'redux';
import lebook from './models/rootReducer';

const store = createStore(lebook);

export default store;
