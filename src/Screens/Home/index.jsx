import React, { Component } from 'react'
import Slider from './components/Slider'
export default class index extends Component {
    state={
        i:1,
        b:2,
    }
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    handleChange=(name,value)=>{
        this.setState({
            [name]:value
        })
    }
    render() {
        const state = this.state;
        return (
            <div>
               <Slider props={state.i}/> 
               <Text onChange={()=>this.handleChange('i',state.i+1)}>Asd</Text>
               <Text onChange={()=>this.handleChange('b',2)}>Asd</Text>

            </div>
        )
    }
}
