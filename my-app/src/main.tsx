/**
 * reduxの記載方法
 */

import React from "react";
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";

import counterStore from "./store/redux/store/counterStore";
import App from "./App";

// 一番後ろに記載している「!」は右側のエレメントがnullでないことを保障するという意味
const root = createRoot(document.getElementById('root')!);
root.render(
    <Provider store={counterStore}>
        <App />
    </Provider>,

);



/**
 * 普通の書き方
 */

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
