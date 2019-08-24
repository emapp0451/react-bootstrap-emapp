import React, { Component } from 'react'
import {style} from 'components/bangalore_component/Bangalore.css'
import hospital from 'assets/hospital.jpg';
import hotel from 'assets/hotel.jpg';
import college from 'assets/college.jpg';
import { Link } from 'react-router-dom';
export default class Bangalore extends Component{
    constructor(props) {
        super(props);
        this.state = {
            city: [],
            header: [],
            value: this.props.match.params.cityId
        };
        console.log(props);
    }

    passdatatohospital = (newdata) => {
        this.setState({urldata:newdata});
    }
     componentDidMount(){
        fetch('/test/findallHeaderByName?headerName='+ this.state.value)
        .then(res => res.json())
        .then((data) => {
          this.setState({ header: data })
        })
        .catch(console.log);
        fetch('/test/findallCityByCityName?cityName='+ this.state.value)
        .then(res => res.json())
        .then((data) => {
          this.setState({ city: data })
        })
        .catch(console.log);
     }
    render(){
        
        return(
            <section class="bg-light">
            <div class="container">
            <div class="row">
                <div class="col-lg-12 order-1 order-lg-1">
                <h3 className="heading">Welcome to {this.state.value}</h3>
                {this.state.header.map((he, index) => (
                       <div>
                          <p key={index}>{he.introduction}</p>
                        </div> 
                      ))}
                <br></br>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card shadow border-0 h-100"><Link to={"/hospital/" + this.state.value} ><img src={hospital} alt="" class="card-img-top" /></Link>
                            <div class="card-body">
                                <h5> <Link to={"/hospital/" + this.state.value} class="text-dark">Hospital in Bangalore</Link></h5>
                                <p class="card-text"><a href="#">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card shadow border-0 h-100"><a href={"/hotel/" + this.state.value}><img src={hotel} alt="" class="card-img-top" /></a>
                            <div class="card-body">
                                <h5> <a href={"/hospital/" + this.state.vaule} class="text-dark">Hotels in Bangalore</a></h5>
                                <p class="card-text"><a href="#">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card shadow border-0 h-100"><a href="college"><img src={college} alt="" class="card-img-top" /></a>
                            <div class="card-body">
                                <h5> <a href="bangalore" class="text-dark">Colleges in Bangalore</a></h5>
                                <p class="card-text"><a href="#">Read more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="heading">Railway stations near {this.state.value}</h3>
                <table>
                {this.state.city.map((ci, index) => (
                    <div>
                    {ci.stations.map((st, index1) => (
                        <tr>
                        <td key={index1}>
                        <h6>* {st.stationName}: </h6>
                        </td>
                        <td>
                        <h6>{st.description}</h6>
                        </td>
                    </tr>
                    ))}
                    </div>
                ))}
                </table>
                <br/>
                <h3 className="heading">Airport near {this.state.value}</h3>
                {this.state.city.map((ci, index) => (
                    <div>
                    {ci.airports.map((ai, index1) => (
                        <div>
                        <h6 key={index1}>* {ai.airportName}: </h6>
                        <h6>{ai.description}</h6>
                        </div>
                    ))}
                    </div>
                ))}
                   
                </div>
            </div>
            </div>
        </section>
        )
    }
}