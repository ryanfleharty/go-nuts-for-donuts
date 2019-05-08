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
        <button onClick={()=>{
            props.deleteDonut(props.donut._id)
        }}>THROW THIS DONUT AWAAAY</button>
        </div>
}

export default DonutDetail;