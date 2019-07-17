import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then(response => console.log(response))
    .catch(err => console.log(err));
}

  }


  render(){
    return (
      <div className="App">
        
      </div>
    );

  }
}

export default App;
