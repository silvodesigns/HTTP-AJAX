import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';


import FriendList from './components/FriendList/FriendList';
import Friend from './components/FriendPage/friend';


class App extends React.Component {
  constructor(){
    super();
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
          {/* <Friend friend={this.state.friends}  props={this.props}/> */}
          <Route exact path="/" render={props => <FriendList {...props} list={this.state.friends} />}/>
          <Route path="/:id" render={props => <Friend {...props} list={this.state.friends} />}/>

      </div>
    );

  }
}


export default App;
