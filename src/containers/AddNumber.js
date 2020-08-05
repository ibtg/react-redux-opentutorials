import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

//containers의 컴포넌트가 리덕스와 상호작용한다

function mapDispatchToProps(dispatch) {
  //리덕스의dispatch를 리액트의 props로 연결해준다
  //AddNumber에 props로 전달해줄 값을 넣어준다
  return {
    onClick: function (size) {
      dispatch({ type: 'INCREMENT', size: size });
    },
  };
}
//connect에 인자 없어도 되고 하나만 있으면 mapStateToProps
export default connect(null, mapDispatchToProps)(AddNumber);

// import React, { Component } from 'react';
// import store from '../store';
// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function (size) {
//           store.dispatch({ type: 'INCREMENT', size: size });
//         }.bind(this)}
//       ></AddNumber>
//     );
//   }
// }
