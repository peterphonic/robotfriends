import React from "react";

//without destructuring
//const Card = (props) =>{

// props is destructured
const Card = ({name, email}) =>{    
    //const {name, email} = props;
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='robots' src={`https://robohash.org//${name}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;