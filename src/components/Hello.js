import React from "react";

const Hello = () => {

    //with jsx
    // return (
    //     <div>
    //         <h1>Working on JSX!</h1>
    //     </div>
    // );

    //without jsx
    return React.createElement(
        'div',
        {id:"hello",className:"dummyclass"},
        React.createElement('h1', null, 'Working on JSX!')
    );
}
export default Hello;