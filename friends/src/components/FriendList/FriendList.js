import React from 'react';
import { Link } from "react-router-dom";
import './friend.css';


function FriendList(props) {

    console.log(props.list,"from FriendList");

const data = Array.from(props.list);

            return(
                <div className="contacts-frame">
                        {data.map( f => 
                        <div className="friend-card" key={f.id}>
                                <div className="header"><h1>{f.name}</h1></div>
                                <ul className="contact-info">
                                    <li>Age: {f.age}</li>
                                    <li>Email: {f.email}</li>
                                </ul>
                                <ul className="contact-edits">
                                    <li>
                                    <Link to={`/${f.id}`}>edit</Link>
                                    </li>
                                    <li>hide</li>
                                    <li>delete</li>
                                </ul>
                              
                        </div>
                        
                        
                        
                        )}
                       
                
                 </div>
            )
}






export default FriendList;