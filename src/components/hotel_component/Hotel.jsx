import React, { Component } from 'react'
export default class Hotel extends Component{
      constructor(props) {
        super(props);
        this.state = {
            city: [],
            headers: [],
            user: null,
            value: this.props.match.params.cityId.slice(0, this.props.match.params.cityId.indexOf("-"))
        };
        console.log(props);
    } 
      componentDidMount () {
        const { hospital } = this.props.match.params
        fetch('/test/findallCity${hospital}')
      .then((user) => {
        this.setState(() => ({ user }))
      })
      }
    render(){

        return(
            <section class="bg-light">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12 order-1 order-lg-1">
                        <h1>Hotel: {this.state.value}</h1>
                        <p>Here are the hotels available in {this.state.value} </p>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}