import React, { Component } from 'react';
import DonutDetail from '../DonutDetail';
import './style.css';

class DonutsIndex extends Component {
    constructor(){
        super();
        this.state = {
            donuts: []
        }
    }
    async getDonuts(){
        const donuts = await fetch('http://localhost:9001/donuts');
        const donutsJSON = await donuts.json();
        console.log(donutsJSON);
        this.setState({
            donuts: donutsJSON
        })
    }
    componentDidMount(){
        this.getDonuts();
    }
    render(){
        const donutsList = this.state.donuts.map((donut)=>{
            return <DonutDetail donut={donut}></DonutDetail>
        })
        return(
            <div>
                <h1>DONUTS INDEX</h1>
                { donutsList }
            </div>
        )
    }
}

export default DonutsIndex;