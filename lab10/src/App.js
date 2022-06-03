import React from 'react';

import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions';
import Profile from './Profile';
import NavBar from './NavBar';


import {getHeaders} from './utils';



{/* TODO: Break up the HTML below into a series of React components. */}
class App extends React.Component {  

    constructor(props) {
        super(props);
        // issue fetch request to /api/profile:
        
        this.getProfileFromServer();
        this.state = {
            user: {}
        }

    }

    getProfileFromServer () {
        fetch('/api/profile', {

            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                user: data
            })
        })
    }

    render () {
        return (
            <div>

                <NavBar title="Photo App" 
                        username={this.state.user.username} />
                

            <aside>
                <Profile 
                    photo = {this.state.user.image_url}
                    username= {this.state.user.username}
                />
                <Suggestions />
            </aside>

            <main className="content">
                
                {/* TODO: REPLACE WITH REACT COMPONENT */}
                <Stories />
                <Posts />
            </main>

            </div>
        );
    }
}

export default App;