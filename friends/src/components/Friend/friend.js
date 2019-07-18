import React from 'react';
import './friend.css';
import FormEdit from '../FormEdit/edit';

// {"id":1,"name":"Ben","age":30,"email":"ben@lambdaschool.com"}

function Friend(props) {

    console.log(props.friend,"from Friend");

            return(
                <div className="contacts-frame">
                        {props.friend.map( f => 
                        <div className="friend-card" key={f.id}>
                                <div className="header"><h1>{f.name}</h1></div>
                                <ul className="contact-info">
                                    <li>Age: {f.age}</li>
                                    <li>Email: {f.email}</li>
                                </ul>
                                <ul className="contact-edits">
                                    <li>edit</li>
                                    <li>hide</li>
                                    <li>delete</li>
                                </ul>
                                <FormEdit props={props} />
                        </div>
                        
                        
                        
                        )}
                       
                
                 </div>
            )
}



export default Friend;