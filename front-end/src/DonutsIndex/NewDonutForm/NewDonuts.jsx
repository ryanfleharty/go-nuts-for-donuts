import React, {Component} from 'react';

class NewDonutForm extends Component {
    constructor(){
        super();
        this.state = {
            name: null,
            tasty: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    toggleTasty = () => {
        this.setState({
            tasty: !this.state.tasty
        })
    }
    render(){
        return <form onSubmit={(e)=>{
            e.preventDefault();
            e.target.reset()
            this.setState({
                name: null
            })
            this.props.createDonut(this.state);
        }}>
            Name: <input onChange={this.handleChange} type="text" name="name"/>
            Tasty: <input onChange={this.toggleTasty} type="checkbox" name="tasty"/>
            <input type="submit"/>
        </form>
    }
}
export default NewDonutForm