import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    border: 1px solid black; 
    color: green;
    background-color: beige;
    padding: 1px;
`

function Title(props){
    console.log(props.apodData.title)
    return(
        <Div>
            <h1>{props.apodData.title}</h1>
        </Div>
    )
}

export default Title;