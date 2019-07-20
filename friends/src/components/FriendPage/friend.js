import React from 'react';
import FriendCard from '../FriendCard/FriendCard';
import './friend.css';

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            friend: {}
        }
    }
   

render(){
        const index = this.props.match.params.id - 1;
        
                    return (
                    
                        <div className="contacts-frame">
                            <FriendCard  current={this.props.current[`${index}`]}/>
                        </div>
                    )

            }  
}






export default Friend;