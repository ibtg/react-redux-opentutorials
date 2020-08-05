import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

//app이라고 하는 컴포넌트는 Provider 안에 존재한다
//Provider는 반드시 store를 받아야 한다
//이렇게 Provider가 store를 전달해주면
//Provider 하위에 있는 모든 컴포넌트는 이 리덕스 store를 쓸 수 있다
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
