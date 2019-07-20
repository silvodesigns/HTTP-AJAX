import React from 'react';
import './edit.css';
import axios from 'axios';


class FormEdit extends React.Component {
    constructor(props){
        super(props);
        this.state ={

            contact: {
                    name: "",
                    email: "",
                    age:""

            }

        }

      
      
    }



// putMessage = e =>{
//     e.preventDefault();
//     this.handleEdit();
   
// }


handleFocus = e =>{
    //simply prevents default focus behavior of inputs
    e.preventDefault();
   
}

handleEdit = () =>{
    //handleEdit of form onSubmit only
    const id = this.props.id;
    const dataToSend = this.state.contact;
    dataToSend.id = id;
    this.editContact(id, dataToSend);

}


handleChange = e => {

    //changes the state of the application as the user types in the fields

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
    .then(response => console.log(response,"it has been updated at last"))
    .catch(err => console.log(err));



  };



render(){


            return(
                <form  id="edit-form" className="edit-form"  onSubmit={this.handleEdit}>

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


                    <button>UPDATE</button>
                </form>
            )
        } 
}



export default FormEdit;