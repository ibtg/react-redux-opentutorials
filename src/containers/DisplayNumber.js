import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

// redux의 state값이 바뀔 때 마다 호출한다
// redux의 스테이트를 인자로 받는다
function mapReduxStateToReactProps(state) {
  //리덕스의 state를 리액트의 props로 매핑시켜주는 역할
  //아래 subscribe 안의 함수의 역할을 한다
  return {
    number: state.number,
    // number: 아래 render의 return 부분에서 전달하는 number와 이름이 같아야 한다
    // state.number : redux의 state의 number
  };
}

function mapReduxDispatchToReactProps() {
  //리덕스의 dispatch를 리액트의 프롭스로 연결해준다
  return {};
}
//첫번째 인자는 리덕스의 state가 바뀔 때 마다 호출된다
export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(DisplayNumber);
// conncect는 인자가 없어도 되고, 인자가 하나만 있다면 mapStateToProps가 된다

//displayNumber라고 하는 컴포넌트를 래핑한 컴포넌트가
//export 된다
//displaynumber컴포넌트를 connect라는 함수의 인자로 전달해준다
// 그러면 아래 class~부분부터 아래 끝까지 모든 코드와 같은  기능을 하게 된다
// 부모인 DisplayNumberRoot가 props로 값을 전달하면
// 다른 별도의 처리 하지 않아도 자식인 DisplayNumber로 props를 전달해준다
// 원래는 상위 컴포넌트에서 unit이라는 값을 전달 받았다면
// 아래 코드에서 this.props.unit을 전달해주어야 하지만, connect 함수가 이 모든 역할을 대신해서 해준다

// import React, { Component } from 'react';
// import store from '../store';

// export default class extends Component {
//   state = { number: store.getState().number };
//   constructor(props) {
//     super(props);
//     // 리덕스의 state가 바뀔 때 마다 아래 함수가 실행된다
//     store.subscribe(
//       function () {
//         this.setState({ number: store.getState().number });
//       }.bind(this)
//     );
//   }
//    state가 바뀌게 되면 render 함수가 호출된다
//   render() {
//     return <DisplayNumber number={this.state.number}></DisplayNumber>;
//   }
// }
