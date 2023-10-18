import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';
import auth from './auth';

const store = configureStore({
    reducer: {
        counter: counter,
        auth: auth
    }
});




export default store;