import AddNumber from '../components/AddNumber';
import React, { Component } from 'react';
import store from '../store';
export default class extends Component {
  render() {
    return (
      <AddNumber
        onClick={function (size) {
          store.dispatch({ type: 'INCREMENT', size: size });
        }.bind(this)}
      ></AddNumber>
    );
  }
}

//containers의 컴포넌트가 리덕스와 상호작용한다
