import React from 'react';
import './edit.css';
import axios from 'axios';

// {"id":1,"name":"Ben","age":30,"email":"ben@lambdaschool.com"}

class FormEdit extends React.Component {
    constructor(props){
        super(props);
        this.state ={

            contact: {
                    id: "",
                    name: "",
                    email: "",
                    age:""

            }

        }
      
    }



putMessage = e =>{
    e.preventDefault();
    this.handleEdit();
   
}


handleFocus = e =>{
    e.preventDefault();
   
}

handleEdit = (id) =>{
    this.editContact(id, this.state.contact)
}


handleChange = e => {
    this.setState({
      contact: {
        ...this.state.contact,
        [e.target.name]: e.target.value
      }
    });
  };




editContact= (id, update) =>{

    axios
    .put(`http://localhost:5000/friends/${id}`, update)
    .then(response => console.log(response))
    .catch(err => console.log(err));

  };



render(){
            return(
                <form  id={`edit-form${this.props.id}`} className={`edit-form${this.props.id} hide`}  onSubmit={this.handleEdit(this.props.id)}>
                    <input 
                        type="text" 
                        name="name"  
                        placeholder="NAME"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        value={this.state.name}
                        />


                    <input 
                        type="text" 
                        name="age"  
                        placeholder="AGE"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        value={this.state.age}
                        />

                    <input
                        type="text"  
                        name="email" 
                        placeholder="EMAIL"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        value={this.state.email}
                        />


                    <button onClick={this.putMessage}>SAVE</button>
                </form>
            )
        } 
}



export default FormEdit;