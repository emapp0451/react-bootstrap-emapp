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
          <div className="pb-sm-5">
            <section className="bg-light">
            <div className="container">
                <h4 className="text-primary">Aim of Easy Move:</h4>
                {this.state.headers.map((header, index) => (
                    <div>
                      <h5 key={index}>{header.headerId == 1 ? header.introduction : ""}</h5>
                    </div>
                ))}
                <br></br>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="/city/bangalore"><img src={ban} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h5> <a href="/city/bangalore" className="text-dark">Welcome to Bangalore</a></h5>
                      {this.state.contacts.map((contact, index) => (
                       <div className="text-success">
                          <p key={index}>{contact.cityName == "Bangalore" ?  "population: " + contact.population : ""}</p>
                          <p key={index}>{contact.cityName == "Bangalore" ?  "Language spoken: " + contact.languageSpoken : ""}</p>
                          <p key={index}>{contact.cityName == "Bangalore" ?  "Weather: " + contact.weather : ""}</p>
                        </div> 
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="/city/bhopal"><img src={bhopal} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h5> <a href="/city/bhopal" className="text-dark">Welcome to Bhopal</a></h5>
                      {this.state.contacts.map((contact, index) => (
                       <div className="text-success">
                          <p key={index}>{contact.cityName == "Bhopal" ?  "population: " + contact.population : ""}</p>
                          <p key={index}>{contact.cityName == "Bhopal" ?  "Language spoken: " + contact.languageSpoken : ""}</p>
                          <p key={index}>{contact.cityName == "Bhopal" ?  "Weather: " + contact.weather : ""}</p>
                        </div> 
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100"><a href="city/chennai"><img src={chennai} alt="" className="card-img-top" /></a>
                    <div className="card-body">
                      <h5> <a href="city/chennai" className="text-dark">Welcome to Chennai</a></h5>
                      {this.state.contacts.map((contact, index) => (
                       <div className="text-success">
                          <p key={index}>{contact.cityName == "Chennai" ?  "population: " + contact.population : ""}</p>
                          <p key={index}>{contact.cityName == "Chennai" ?  "Language spoken: " + contact.languageSpoken : ""}</p>
                          <p key={index}>{contact.cityName == "Chennai" ?  "Weather: " + contact.weather : ""}</p>
                        </div> 
                      ))}
                    </div>
                  </div>
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