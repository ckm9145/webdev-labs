import React from 'react';

class Profile extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

     render () {
         return ( 
            <header>
                
                {/* Navigation Links */}

                <div className="rec_p_header">
                    <img src={this.props.photo} alt={"profile pic for " + this.props.username} />
                    <h2> {this.props.username} </h2>

                </div>


            </header>


         )

    }
}

export default Profile;