import React from 'react';

// function Greet(props) {
//     console.log(props);
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}!</h1>
//             <p>{props.children}</p>
//         </div>
//   );
// }

//destructing props
// function Greet({name,heroName,children}) {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}!</h1>
//             <p>{children}</p>
//         </div>
//   );
// }


function Greet(props) {
const {name,heroName,children} = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}!</h1>
            <p>{children}</p>
        </div>
  );
}
// const Greet = () => <h1>Hello priya!</h1>
export default Greet;



//named export should change in app.js greet to {greet}
// export const Greet = () => <h1>Hello priya!</h1>
