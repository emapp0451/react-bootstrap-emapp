import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, img, Button} from 'react-bootstrap';
import ban from 'assets/ban.jpg';
import bhopal from 'assets/bhopal.jpg';
import chennai from 'assets/chennai.jpg';
import header from 'assets/paragraphs.json';


export default class Home extends Component{
    state = {
        contacts: [],
        headers: []
      }

      componentDidMount() {
        fetch('/test/findallCity')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log);

        fetch('/test/findallHeader')
        .then(res => res.json())
        .then((data) => {
          this.setState({ headers: data })
        })
        .catch(console.log);
      }

    render(){
        return(
        <div>
            <section className="bg-light">
            <div className="container">
                <h3>Aim of Easy Move</h3>
                {this.state.headers.map((header, index) => (
                    <div>
                      <p key={index}>{header.headerId == 1 ? header.introduction : ""}</p>
                    </div>
                ))}
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="/city/bangalore"><img src={ban} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h5> <a href="/city/bangalore" className="text-dark">Welcome to Bangalore</a></h5>
                      {this.state.contacts.map((contact, index) => (
                       <div>
                          <h6 key={index}>{contact.cityName == "Bangalore" ?  "population: " + contact.population : ""}</h6>
                          <h6 key={index}>{contact.cityName == "Bangalore" ?  "Language spoken: " + contact.languageSpoken : ""}</h6>
                          <h6 key={index}>{contact.cityName == "Bangalore" ?  "Weather: " + contact.weather : ""}</h6>
                          {contact.areas.map((contact1, index1) => (
                              <div>
                                  <h6 key={index1}>{contact1.areaId == 1 ?  "Area: " + contact1.area_name : ""}</h6>
                              </div>
                          ))}
                        </div> 
                      ))}
                      <p className="card-text"><a href="#">Read more</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="/city/bhopal"><img src={bhopal} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h5> <a href="/city/bhopal" className="text-dark">Welcome to Bhopal</a></h5>
                      {this.state.contacts.map((contact, index) => (
                       <div>
                          <h6 key={index}>{contact.cityName == "Bhopal" ?  "population: " + contact.population : ""}</h6>
                          <h6 key={index}>{contact.cityName == "Bhopal" ?  "Language spoken: " + contact.languageSpoken : ""}</h6>
                          <h6 key={index}>{contact.cityName == "Bhopal" ?  "Weather: " + contact.weather : ""}</h6>
                        </div> 
                      ))}
                      <p className="card-text"><a href="#">Read more</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="city/chennai"><img src={chennai} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h5> <a href="city/chennai" className="text-dark">Welcome to Chennai</a></h5>
                      {this.state.contacts.map((contact, index) => (
                       <div>
                          <h6 key={index}>{contact.cityName == "Chennai" ?  "population: " + contact.population : ""}</h6>
                          <h6 key={index}>{contact.cityName == "Chennai" ?  "Language spoken: " + contact.languageSpoken : ""}</h6>
                          <h6 key={index}>{contact.cityName == "Chennai" ?  "Weather: " + contact.weather : ""}</h6>
                        </div> 
                      ))}
                      <p className="card-text"><a href="#">Read more</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
        )
    }
}