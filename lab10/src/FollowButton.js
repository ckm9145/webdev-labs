import React from 'react';
import {getHeaders} from './utils';




class FollowButton extends React.Component {
  
    constructor(props) {
        super(props);

        this.toggleFollow=this.toggleFollow.bind(this);
        this.createFollower=this.createFollower.bind(this);
        this.removeFollower=this.removeFollower.bind(this);
        this.state= {
            followingId: null
        }
    
        
        // initialization code here
    }


    componentDidMount() {
        // fetch posts and then set the state...
    }

    toggleFollow () {
        if (this.state.followingId) {
            this.removeFollower();
        } else {
            this.createFollower();
        }

    }

    createFollower () {
        const url = '/api/following/';
        console.log('create follow', url);

        const followData = {
            user_id: this.props.userId
        }

        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(followData)
        }).then(Response => Response.json())
        .then(data => {
            console.log(data)
            this.setState({
                followingId: data.id
            })

            console.log("i just hit the follow button")
        })
    }

    // const postData = {
    //     "user_id": 1
    // };
    
    // fetch("http://localhost:5000/api/following/", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-CSRF-TOKEN': 'b8e22c1b-05e7-41c8-98bf-95c05fed1687'
    //         },
    //         body: JSON.stringify(postData)
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     });

    removeFollower () {
        const url = '/api/following/' + this.state.followingId;
        //console.log('remove follow', url);

        fetch(url, {
            method: 'DELETE',
            headers: getHeaders()
            
        }).then(Response => Response.json())
        .then(data => {
            console.log(data)
            this.setState({
                followingId: null
                
            })
            console.log("i unfollowed a user");
            

        })
    }

    // fetch("http://localhost:5000/api/following/2", {
    //     method: "DELETE",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-CSRF-TOKEN': 'b8e22c1b-05e7-41c8-98bf-95c05fed1687'
    //     }
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // });





     render () {
        const isLiked = false;
        
        const followingClass= (this.state.followingId ? 'unfollow' : 'follow');

        return (
                
            <button 
                    className={followingClass}
                    onClick={this.toggleFollow}
                    aria-label="follow / unfollow">
                    
                    {this.state.followingId ? "Unfollow" : "Follow"}
                    
            </button>
                )
        }
     
}

export default FollowButton;