import React from "react";
import App from "../App";

// function Greet(){
//     return <h1>Hello Meena</h1>
// }

const Greet = ({name,heroName}) =>{
   return( 
    <div>
   <h1>Hello {name} a.k.a {heroName}</h1>
  {/*{props.children}*/}
   </div>
   )
} 

export default Greet;