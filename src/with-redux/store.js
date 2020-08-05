import { createStore } from 'redux';

export default createStore(function (state, action) {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === 'INCREMENT') {
    return { ...state, number: state.number + action.size };
    // state 중에 number만 변경시킨다
    // https://velog.io/@ashnamuh/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-rest-spread-%EB%AC%B8%EB%B2%95%EA%B3%BC-destructuring
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
// redux devtools
