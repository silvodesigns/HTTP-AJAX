import React from 'react';
import './friend.css';
// import FormEdit from '../FormEdit/edit';

// {"id":1,"name":"Ben","age":30,"email":"ben@lambdaschool.com"}

function Friend(props) {

            const id = props.match.params.id;
            const friend = props.list.find(f => `${f.id}` === id);
            console.log(friend);
           


            return(
                <div className="contacts-frame">
                     <h1>HELLO FROM FRIENDS</h1>
                        <p></p>
                 </div>
            )
}






export default Friend;