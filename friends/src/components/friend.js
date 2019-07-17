import React from 'react';

function Friend(props) {

console.log(props.friend);

    return(
        <div>
                 {props.friend.map( (f) => <h1>{f.name}</h1>)}

        </div>
       
    )
   


}



export default Friend;