import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: "Bob", age: '29'},
      { name: "steph", age: '12'},
      { name: 'Manu', age: '20'}
    ]
  }

  switchNameHandler = () => {
    console.log("was clicked");
    this.setState({
      persons: [
          { name: "BUN", age: '29'},
          { name: "BUNNA", age: '12'},
          { name: 'BUnny', age: '20'}
        ]
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>hey hey</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }/>
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }>My hobbies is Racing</Person>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }/>
      </div>
    );

    //return React.createElement('div', null, 'h1', 'hihihihih');
  }
}

export default App;
