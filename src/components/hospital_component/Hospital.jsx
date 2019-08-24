import React, { Component } from 'react'
export default class Hospital extends Component{
      constructor(props) {
        super(props);
        this.state = {
            city: [],
            headers: [],
            user: [],
            value: this.props.match.params.cityId
        };
        console.log(props);
    } 
      componentDidMount () {
      fetch('/test/findallHospitalByCityId?cityName='+ this.state.value)
        .then(res => res.json())
        .then((data) => {
          this.setState({ user: data })
        })
        .catch(console.log);
      }
    render(){

        return(
            <section class="bg-light">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12 order-1 order-lg-1">
                        <h1>Hospital: {this.state.value}</h1>
                        <p>Here are the hospitals available in {this.state.value} </p>
                        {this.state.user.map((us, index) => (
                       <div>
                          <h6 key={index}>{us.hospitalName}</h6>
                          <p key={index}>{us.description}</p>
                        </div> 
                      ))}
                    </div>
                </div>
                </div>
            </section>
        )
    }
}