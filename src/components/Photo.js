import React from 'react';
import styled from 'styled-components';

const PhotoDiv = styled.div`
    height: 100vh;
    background-color: black;
`

function Photo(props){
    console.log(props.apodData)
    return(
        <PhotoDiv>
            {/* <h1>{props.apodData.title}</h1> */}
            <img src={props.apodData.url} alt="Space" />
            <p></p>
        </PhotoDiv>
    )
}

export default Photo;