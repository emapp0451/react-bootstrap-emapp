import React, { Component } from 'react'
import {style} from '/home/vikrant/Application/emApp/EmApp V1.2/react-bootstrap-emapp-master/src/components/bangalore_component/Bangalore.css'
//import hospital from 'assets/hospital.jpg';
//import hotel from 'assets/hotel.jpg';
//import college from 'assets/college.jpg';
import { Link } from 'react-router-dom';
export default class City extends Component{
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
            <div>
                <div className="pb-sm-5">
            <section className="bg-light">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 order-1 order-lg-1">
                <h3 className="heading">Welcome to {this.state.value}</h3>
                {this.state.header.map((he, index) => (
                       <div>
                          <p key={index}>{he.introduction}</p>
                        </div> 
                      ))}
                <br></br>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 h-100"><Link to={"/hospital/" + this.state.value} ><img src={'https://drive.google.com/thumbnail?id=1CyvRtBM2i4_OB1pD5WskSXnjIrylVD2X'} alt="" className="card-img-top" /></Link>
                            <div className="card-body">
                                <h5> <Link to={"/hospital/" + this.state.value} className="text-dark">Hospital in {this.state.value}</Link></h5>
                                <p className="card-text"><a href="#">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 h-100"><a href={"/hotel/" + this.state.value}><img src={'https://drive.google.com/thumbnail?id=1qRBWYHU7nVA1QJP2HhX16kTSxLY8kaPG'} alt="" className="card-img-top" /></a>
                            <div className="card-body">
                                <h5> <a href={"/hospital/" + this.state.vaule} className="text-dark">Hotels in {this.state.value}</a></h5>
                                <p className="card-text"><a href="#">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 h-100"><a href={"/college/" + this.state.value}><img src={'https://drive.google.com/thumbnail?id=1MT_VNo_3AYBd0x2ER1HrE6CBe4IM-OCx'} alt="" className="card-img-top" /></a>
                            <div className="card-body">
                                <h5> <a href={"/college/" + this.state.value} className="text-dark">Colleges in {this.state.value}</a></h5>
                                <p className="card-text"><a href="#">Read more</a></p>
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
        </div>
        <footer className="footer fixed-bottom font-small bg-light">
        <div className="footer-copyright text-center py-3">© 2019 Copyright:
          Easy Move
        </div>
      </footer>
      </div>
        )
    }
}