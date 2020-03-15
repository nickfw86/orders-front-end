import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: '',
            loading: false,
            submitted: false,
            data: [],
        }
    }

    handleChange = field => event => {
        this.setState({[field]: event.target.value});
    }

    onSubmit() {
        this.setState({
            submitted: true,
            loading: true
        });
        fetch(`http://localhost:4000/orders/${this.state.order}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({
                'data': res.data,
                'loading': false,
            });
        })
    }

    render() {
        return <div>
            <input placeholder='Place Order Number Here' value={this.state.order} onChange={this.handleChange('order')}/>
            <button onClick={event => this.onSubmit()}>Fetch Order</button>
            {this.state.loading === false && this.state.submitted === true?
                this.state.data ?
                    this.state.data.length >= 1?
                        <div>
                            <div>Order Status: {this.state.data[0].Order_Status}</div>
                            <div>Order Id: {this.state.data[0].Order_ID}</div>
                            <div>Date: {this.state.data[0].Date_Created}</div>
                        </div>
                    :
                        <div>BOO HOO :( No Data!</div>  
                :
                    <div>BOO HOO :( No Data!</div>      
            :
                null
            }
        </div>
    }
}

export default Input;