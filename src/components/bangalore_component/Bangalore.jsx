import React, { Component } from 'react'
//import {style} from '/home/vikrant/Application/emApp/EmAppv1.3/react-bootstrap-emapp/src/components/bangalore_component/Bangalore.css'
//import hospital from 'assets/hospital.jpg';
//import hotel from 'assets/hotel.jpg';
//import college from 'assets/college.jpg';
export default class Bangalore extends Component{
    constructor(props){
        super(props);
        //this.state = {collapse: false};
        console.log(props);
    }
   
    
    // toggle = () => {
    //     this.setState(state => ({collapse: |this.state.collapse}));
    // }
     state = {
         headers: []
     }
     componentDidMount(){
        fetch('/test/findallHeader')
        .then(res => res.json())
        .then((data) => {
          this.setState({ headers: data })
        })
        .catch(console.log);
     }
    render(){
        return(
            <section class="bg-light">
            <div class="container">
            <div class="row">
                <div class="col-lg-12 order-1 order-lg-1">
                <h3 className="heading">Welcome to Bangalore/Bengaluru</h3>
                {this.state.headers.map((header, index) => (
                    <div>
                      <p key={index}>{header.headerId == 2 ? header.introduction : ""}</p>
                    </div>
                ))}
                <br></br>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card shadow border-0 h-100"><a href="/hospital/bangalore"><img src={'https://drive.google.com/open?id=1CyvRtBM2i4_OB1pD5WskSXnjIrylVD2X'} alt="" class="card-img-top" /></a>
                            <div class="card-body">
                                <h5> <a href="/hospital/bangalore" class="text-dark">Hospital in Bangalore</a></h5>
                                <p class="card-text"><a href="#">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card shadow border-0 h-100"><a href="/hotel/bangalore"><img src={'https://drive.google.com/thumbnail?id=1qRBWYHU7nVA1QJP2HhX16kTSxLY8kaPG'} alt="" class="card-img-top" /></a>
                            <div class="card-body">
                                <h5> <a href="/hotel/bangalore" class="text-dark">Hotels in Bangalore</a></h5>
                                <p class="card-text"><a href="#">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card shadow border-0 h-100"><a href="college"><img src={'https://drive.google.com/thumbnail?id=1MT_VNo_3AYBd0x2ER1HrE6CBe4IM-OCx'} alt="" class="card-img-top" /></a>
                            <div class="card-body">
                                <h5> <a href="bangalore" class="text-dark">Colleges in Bangalore</a></h5>
                                <p class="card-text"><a href="#">Read more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="heading">Railway stations near Bangalore</h3>
                <table>
                    <tr>
                        <td>
                        <h6>1. CST(Chatrpati Shivaji terminal) (Majestic): </h6>
                        </td>
                        <td>
                        <h6>This is the main station in bangalore</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <h6>2. Yeshwantpur: </h6>
                        </td>
                        <td>
                        <h6>This is the second most popular station in bangalore</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <h6>2. Krishnarajpuram (K R Puram): </h6>
                        </td>
                        <td>
                        <h6>This is the third most popular station in bangalore</h6>
                        </td>
                    </tr>
                </table>
                <br/>
                <h3 className="heading">Airport near Bangalore</h3>
                    <p>Named as Kempegowda International Airport which is around 50 km from the main bangalore</p>
                    <h4 stylclassNamee="heading">Note:</h4>
                    <p>There is government bus available which is on every 30 min in all the bus stop in bangalore for 24 hr</p>
                </div>
            </div>
            </div>
        </section>
        )
    }
}