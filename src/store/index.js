import { createStore } from 'redux';

import Root from './Reducers/root';

const Store = createStore(Root);

export default Store;