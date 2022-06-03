import React from 'react';
import { getHeaders } from './utils';




class Story extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            story: props.model
        }
        // this.refreshStoryDataFromServer= this.refreshStoryDataFromServer.bind(this);



        // initialization code here
    }

    // refreshStoryDataFromServer () {
    //     //refetch post
    //     const url = '/api/stories';
    //     fetch(url, {
    //         headers: getHeaders()
    //     }).then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         this.setState ({
    //             story: data

    //         })
    //     })
    // }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    render() {
        const story = this.state.story;
        return (
            <div>
                <img src={story.user.thumb_url} className="pic" alt={"profile pic for " + story.user.username } />
                <p>{story.user.username}</p>
            </div>
        )
    }

}

export default Story; 