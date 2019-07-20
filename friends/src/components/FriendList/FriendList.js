import React from 'react';
import { Link } from "react-router-dom";
import './friend.css';
// import FormEdit from '../FormEdit/edit';

// {"id":1,"name":"Ben","age":30,"email":"ben@lambdaschool.com"}

function FriendList(props) {

    console.log(props,"from Friend");

            return(
                <div className="contacts-frame">
                        {props.list.map( f => 
                        <div className="friend-card" key={f.id}>
                                <div className="header"><h1>{f.name}</h1></div>
                                <ul className="contact-info">
                                    <li>Age: {f.age}</li>
                                    <li>Email: {f.email}</li>
                                </ul>
                                <ul className="contact-edits">
                                    <li><Link to={`/${f.id}`}>edit</Link></li>
                                    <li>hide</li>
                                    <li>delete</li>
                                </ul>
                                {/* <FormEdit props={props} id={f.id} /> */}
                        </div>
                        
                        
                        
                        )}
                       
                
                 </div>
            )
}






export default FriendList;