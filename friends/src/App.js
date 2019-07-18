import React from 'react';
import axios from 'axios';
import './App.css';


import Friend from './components/Friend/friend';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      friends: []

}
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err));

  }


  render(){
  
    return (
      <div className="App">
          <Friend friend={this.state.friends}  props={this.props}/>
      </div>
    );

  }
}


export default App;
