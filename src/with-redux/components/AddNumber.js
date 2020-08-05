import React, { Component } from 'react';
import store from '../store';
class AddNumber extends Component {
  state = { size: 1 };
  render() {
    return (
      <div>
        <h1>Add Number </h1>
        <input
          type="button"
          value="+"
          onClick={function () {
            store.dispatch({ type: 'INCREMENT', size: this.state.size });
          }.bind(this)}
        />
        <input
          type="text"
          value={this.state.size}
          onChange={function (e) {
            this.setState({ size: Number(e.target.value) });
          }.bind(this)}
        />
      </div>
    );
  }
}
// 예전과 같이 리덕스에 종속되지 않고 프리젠테이셔널 컴포넌트의 역할을 한다
export default AddNumber;
