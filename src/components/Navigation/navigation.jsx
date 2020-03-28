import React from 'react';
import './navigation.styles.scss';

import './navigation.styles.scss';
import SmallScreenNav from './smallScreenNav';
import WebNav from './webNav';

class MainNavigation extends React.Component {
    render() {
        
        return (
            <div className="main-navigation">
                <SmallScreenNav/>
                <WebNav className={`web-view`} style_diff={this.props.style_diff} rentpage={this.props.rentpage} />
            </div>
        )
    }
}

export default MainNavigation;



// <div className="other-link">
// <div className="list-property">
//     <Link to="/add-property">List a Property</Link>
// </div>
// <div className="sign-in-up-box">
//     <div className="log-in">
//         <Link to="/login">Log In</Link>
//     </div>
//     <div className="divider">

//     </div>
//     <div className="sign-up">
//         <Link to="/sign-up">Sign Up</Link>
//     </div>
// </div>
// </div>


// <div className="rent-buy-box">
// {/* <Link to="/rent">Rent</Link>
// <Link to="/buy">Buy</Link>
// </div> */}