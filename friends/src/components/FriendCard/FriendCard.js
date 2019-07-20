import React from 'react';
import FormEdit from '../FormEdit/edit';

import './card.css';


function FriendCard(props){
        

return(
        
     
        <div className="friend-card">
                <div className="header">{props.current ? (<h1>{props.current.name}</h1>):(null)}</div>
                <ul className="contact-info">
                    <li>Age:    {props.current ? (props.current.age):(null)} </li>
                    <li>Email:  {props.current ? (props.current.email):(null)}</li>
                </ul>
                <FormEdit  update={props.current}  id={props.match.params.id}/>
        </div>
   )   
}

export default FriendCard;