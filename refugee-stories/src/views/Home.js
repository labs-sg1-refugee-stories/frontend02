import React from 'react';
import SignUp from './SignUp'

class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h1>home</h1>
            <SignUp></SignUp>
            </div>
         );
    }
}
 
export default Home;