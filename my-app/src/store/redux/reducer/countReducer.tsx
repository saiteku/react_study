/**
 * reduxで利用するreducerの定義を作成する
 */

import { createSlice } from '@reduxjs/toolkit';

// 初期状態の型定義
interface CounterState  {
    value: number;
}

const initialState: CounterState = {value: 0};

// reduxの作成
const counterSlice  = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})

// アクションをエクスポート
export const { increment, decrement, reset } = counterSlice.actions;

// Reducerをエクスポート
export default counterSlice.reducer;