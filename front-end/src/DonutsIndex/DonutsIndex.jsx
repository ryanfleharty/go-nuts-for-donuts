import React, { Component } from 'react';
import DonutDetail from '../DonutDetail';
import './style.css';

class DonutsIndex extends Component {
    constructor(){
        super();
        this.state = {
            donuts: [],
            houses: []
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
    async getHouses(){
        const houses = await fetch('https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/houses?pageSize=5')
        const housesJSON = await houses.json();
        this.setState({
            houses: housesJSON
        })
    }
    componentDidMount(){
        this.getDonuts();
        this.getHouses();
    }
    render(){
        console.log("RENDERING THE COMPONENT")
        const donutsList = this.state.donuts.map((donut)=>{
            return <DonutDetail donut={donut}></DonutDetail>
        })
        const housesList = this.state.houses.map((house)=>{
            return <div onClick={(e)=>{
                console.log("CLICKED AHOUSE");
                console.log(e.target);
                e.target.style.display = "none";
            }}>
                <h1>{house.name}</h1>
                <p>{house.coatOfArms}</p>
            </div>
        })
        return(
            <div>
                <h1>DONUTS INDEX</h1>
                { donutsList }
                { housesList}
            </div>
        )
    }
}

export default DonutsIndex;