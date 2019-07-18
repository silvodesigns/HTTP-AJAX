import React from 'react';
import './edit.css';

// {"id":1,"name":"Ben","age":30,"email":"ben@lambdaschool.com"}

function FormEdit(props) {

            return(
                <form className="edit-form">
                    <input type="text" placeholder="NAME"/>
                    <input type="text" placeholder="AGE"/>
                    <input type="text" placeholder="EMAIL"/>
                    <button>SAVE</button>
                </form>
            )
}



export default FormEdit;