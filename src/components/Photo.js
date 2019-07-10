import React from 'react';

function Photo(props){
    console.log(props.apod)
    return(
        <div>
            <img src={props.apod} alt="Space" />
            <p></p>
        </div>
    )
}

export default Photo;