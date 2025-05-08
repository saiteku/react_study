/**
 * reducerの定義を利用して、storeを作成する
 */

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/countReducer';

const counterStore = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default counterStore;