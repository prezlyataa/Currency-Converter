import React, { Component } from 'react';
import './converter.css';
import { appService } from '../../services/getData';


class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            inputValue: '',
            output_select: 'USD',
            result: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeOutputSelect = this.handleChangeOutputSelect.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleChangeOutputSelect(event) {
        this.setState({
            output_select: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.calculate();
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
    
    calculate() {
        const { inputValue, output_select, data }  = this.state;
        switch (output_select) {
            case 'USD':
                this.setState({
                    result: inputValue * data[0].sale
                });
                break;
            case 'EURO':
                this.setState({
                    result: inputValue * data[1].sale
                });
                break;
        }
    }


    render(){
        console.log( this.state );
        return(
        <div className="main">
            <div className="main_header">
                <h1>Currency Converter</h1>
            </div>  
            <form action="javascript:void(0);" onSubmit={ this.handleSubmit }>
                <div className="all">
                <div className="in">
                    <input type="number" min="0" step="0.01" id="input_curr" placeholder=" input" value={ this.state.inputValue } onChange={ this.handleChange }/>
                    <select id="pick_input">
                    <option value="USD">USD</option>
                    <option value="EURO">EURO</option>
                    <option value="UAH">UAH</option>
                    </select>
                </div>
                <div className="out">
                    <input type="text" id="output_curr" placeholder={this.state.result}/>
                    <select id="pick_output" onChange={this.handleChangeOutputSelect}>
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