import React, { Component } from 'react';
import DonutDetail from './DonutDetail/DonutDetail';
import './style.css';
import NewDonutForm from './NewDonutForm/NewDonuts';

class DonutsIndex extends Component {
    constructor(){
        super();
        this.state = {
            donuts: []
        }
    }
    async getDonuts(){
        console.log(process.env.REACT_APP_BACKEND_ADDRESS)
        const donuts = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/api/v1/donuts`);
        const donutsJSON = await donuts.json();
        console.log(donutsJSON);
        this.setState({
            donuts: donutsJSON
        })
    }
    createDonut = async (formData) => {
        console.log(JSON.stringify(formData));
        const newDonut = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/api/v1/donuts`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await newDonut.json();
        console.log(newDonut);
        if(newDonut.status === 200){
            this.setState({
                donuts: [...this.state.donuts, parsedResponse]
            })
        }
    }
    deleteDonut = async(id) => {
        console.log(`DELETING DONUT ${id}`)
        const deletedDonut = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/api/v1/donuts/${id}`, {
            method: "DELETE"
        })
        if(deletedDonut.status === 200){
            this.setState({
                donuts: this.state.donuts.filter(donut => donut._id !== id)
            })
        }
    }
    updateDonut = async (id, donut) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/api/v1/donuts/${id}`, {
            method: "PUT",
            body: JSON.stringify(donut),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const updatedDonut = await response.json();
        console.log(updatedDonut);
        if(response.status === 200){
            console.log("GOOD UPDATE BRO")
            this.setState({
                donuts: this.state.donuts.map((eachDonut)=>{
                    if(eachDonut._id === id){
                        return updatedDonut
                    }
                    return eachDonut
                })
            })
        }
    }
    componentDidMount(){
        this.getDonuts();
    }
    render(){
        const donutsList = this.state.donuts.map((donut)=>{
            return <DonutDetail updateDonut = {this.updateDonut} deleteDonut = {this.deleteDonut} donut={donut}></DonutDetail>
        })
        return(
            <div>
                <h5>Add a donut</h5>
                <NewDonutForm createDonut={this.createDonut}></NewDonutForm>
                <h1>DONUTS INDEX</h1>
                { donutsList }
            </div>
        )
    }
}

export default DonutsIndex;