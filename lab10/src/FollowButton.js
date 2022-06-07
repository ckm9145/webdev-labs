import React from 'react';
import {getHeaders} from './utils';




class FollowButton extends React.Component {
  
    constructor(props) {
        super(props);

        this.toggleFollow=this.toggleFollow.bind(this);
        this.createFollower=this.createFollower.bind(this);
        this.removeFollower=this.removeFollower.bind(this);

        

        
        // initialization code here
    }


    componentDidMount() {
        // fetch posts and then set the state...
    }

    toggleFollow () {
        if (this.props.followingId) {
            this.removeFollower();
        } else {
            this.createFollower();
        }

    }

    createFollower () {
        const url = '/api/following/';
        console.log('create like', url);

        const followData = {
            following_id: this.props.followingId
        }

        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(followData)
        }).then(Response => Response.json())
        .then(data => {
            console.log(data)
            this.props.refreshPost();
        })
    }

    removeFollower () {
        const url = '/api/following/' + this.props.userId;
        console.log('remove like', url);

        fetch(url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(Response => Response.json())
        .then(data => {
            console.log(data)
            this.props.refreshPost();
            

        })



    }

     render () {
        const isLiked = false;
        const FollowClass= (following_Id ? 'className = follow' : 'classname= unfollow');

        return (
                
            <button onClick={this.toggleFollow}
                    aria-label="follow / unfollow">
                    {FollowClass}

                    
            </button>
                )
        }
     
}

export default FollowButton;