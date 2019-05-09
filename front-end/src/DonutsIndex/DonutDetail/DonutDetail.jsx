import React from 'react';
import EditDonut from './EditDonut/EditDonut';
import { Button } from 'reactstrap'

const DonutDetail = (props) => {
    return <div>
        <p>{props.donut.name}</p>
        {
            props.donut.tasty ?
            <p>And it sure is tasty!</p>
            :
            <p>And its GROSS YUCK</p>
        }
        <Button color="primary" onClick={()=>{
            props.deleteDonut(props.donut._id)
        }}>THROW THIS DONUT AWAAAY</Button>
        <EditDonut updateDonut = {props.updateDonut} donut={props.donut}></EditDonut>
        </div>
}

export default DonutDetail;