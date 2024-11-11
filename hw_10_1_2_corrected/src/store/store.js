import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import formReducer from '../store/formSlice';
import listReducer from '../features/Table/listReducer';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        form: formReducer,
        list: listReducer,
    }
})

export default store;
