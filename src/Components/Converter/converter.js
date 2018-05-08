import React, { Component } from 'react';
import './converter.css';
import { appService } from '../../services/getData';


class Converter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    getData(){
        appService.getData()
        .then(data => {
            this.setState({
                data: data
            });
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentWillMount(){
        this.getData();
    }


    render(){
        console.log(this.state.data)
        return(
        <div className="main">
            <div className="main_header">
                <h1>Currency Converter</h1>
            </div>  
            <form action="javascript:void(0);">
                <div className="all">
                <div className="in">
                    <input type="number" min="0" step="0.01" id="input_curr" placeholder=" input"/>
                    <select id="pick_input">
                    <option value="USD">USD</option>
                    <option value="EURO">EURO</option>
                    <option value="UAH">UAH</option>
                    </select>
                </div>
                <div className="out">
                    <input type="text" id="output_curr" placeholder=" output"/>
                    <select id="pick_output">
                    <option value="USD">USD</option>
                    <option value="EURO">EURO</option>
                    <option value="UAH">UAH</option>
                    </select>
                </div>
                </div>
                <input id="button" type="submit"  value="CONVERT"/>
            </form>
      </div>
      )
    }
}

export default Converter;