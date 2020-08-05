import React, { Component } from 'react';
import AddNumber from '../containers/AddNumber';
class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber></AddNumber>
      </div>
    );
  }
}
//기존의 addnumber는 화면에 무엇인가 표현하는 프리젠테이셔널 컴포넌트로써의 역할을 하게 된다
export default AddNumberRoot;
