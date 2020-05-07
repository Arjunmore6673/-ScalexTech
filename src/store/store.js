import {createStore} from 'redux';

import reducers from '../reducer/reducers'; //Import the reducer

// Connect our store to the reducers
export default createStore(reducers);
