import { Component } from "react";
import React from "react";  


// class Welcome extends Component {

//     render() {
//         return (
//         <div>
//             <h1>Welcome to Class componets!</h1>
//             <p>{this.props.name} a.k.a {this.props.heroName}</p>
//         </div>
//         );
//     }
// }


//destructing props in clas comp

class Welcome extends Component {

    render() {
        const {name,heroName} = this.props;
        // const {state1,state2} = this.state;
        return (
        <div>
            <h1>Welcome to Class componets!</h1>
            <p>{name} a.k.a {heroName}</p>
        </div>
        );
    }
}


export default Welcome;