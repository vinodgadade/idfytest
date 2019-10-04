import React from 'react';

type Props = {};
type State = {value : string};
//type mandatory = {value : string};
let data = {
    "type": "text",
    "label": "Name",
    "placeholder": "Enter your name",
    "regex": "^[A-Z]+$",
    "mandatory": true
};
class FormComponent extends React.Component <Props,State> {
    constructor (props:Props){
        super(props);
        this.state = {value : ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event:any){
        this.setState({value: event.target.value});
        if(!event.target.value.match(data.regex)){
            console.log('false');
         }      
        //console.log(event.target.value);
    }
    render(){
        return(
            <div className="formComp">
                <form className="nameForm">
                    <label>{data.label}
                        <span>{data.mandatory ? '*' : ''}</span> <input type={data.type} value={this.state.value} onChange={this.handleChange} required = {data.mandatory} />
                    </label>
                </form>
            </div>
        )
    }
}

export default FormComponent;
