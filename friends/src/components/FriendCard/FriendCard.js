import React from 'react';


function FriendCard(props){
        
        console.log(props.current,"from card");
return(
        
     
        <div className="friend-card">
                <div className="header">{props.current ? (<h1>{props.current.name}</h1>):(null)}</div>
                <ul className="contact-info">
                    <li>Age:    {props.current ? (props.current.age):(null)} </li>
                    <li>Email:  {props.current ? (props.current.email):(null)}</li>
                </ul>
                {/* <ul className="contact-edits">
                    <li><Link to={`/${f.id}`}>edit</Link></li>
                    <li>hide</li>
                    <li>delete</li>
                </ul>  */}

        </div>
   )   
}

export default FriendCard;