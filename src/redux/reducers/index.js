import {combineReducers} from 'redux';
import technology from './technology';
import medical from './medical';

const rootReducers = combineReducers({
   technology,
   medical,
});

export default rootReducers;
