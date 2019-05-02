import React from 'react';

const DonutDetail = (props) => {
    return <div>
        <p>{props.donut.name}</p>
        {
            props.donut.tasty ?
            <p>And it sure is tasty!</p>
            :
            <p>And its GROSS YUCK</p>
        }
        
        </div>
}

export default DonutDetail;