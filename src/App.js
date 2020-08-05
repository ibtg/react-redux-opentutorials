import React, { Component } from 'react';
// import AddNumberRoot from './with-redux/components/AddNumberRoot';
// import DisplayNumberRoot from './with-redux/components/DisplayNumberRoot';
// import AddNumberRoot from './without-redux/AddNumberRoot';
// import DisplayNumberRoot from './without-redux/DisplayNumberRoot';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';
import './App.css';

// redux with dependancy
class App extends Component {
  state = { number: 0 };
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

// with out redux
// depth가 굉장히 깊어질 수 록 더 관리하기 복잡해진다. 그리고 변화가 생기면 상위, 하위 컴포넌트를 모두 호출해야한다
// class App extends Component {
//   state = { number: 0 };
//   render() {
//     return (
//       <div className="App">
//         <h1>Root</h1>
//         <AddNumberRoot
//           onClick={function (size) {
//             this.setState({ number: this.state.number + size });
//           }.bind(this)}
//         ></AddNumberRoot>
//         <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
//       </div>
//     );
//   }
// }

export default App;
