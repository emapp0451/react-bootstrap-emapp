import React, { Component } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
export default class Filterd extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            value: this.props.match.params.values.split("-",3),
            hospitals: [],
            colleges: []
        };
        console.log(props);
    }
    componentDidMount () {
        if(this.state.value[1]=='treatment'){
        fetch('/test/findallHospitalAndArea?spec='+ this.state.value[2] + '&cityName=' + this.state.value[0])
          .then(res => res.json())
          .then((data) => {
            this.setState({ hospitals: data })
          })
          .catch(console.log);
        }
        if(this.state.value[1]=='education'){
            fetch('/test/findallCollegeAndArea?type='+ this.state.value[2] + '&cityName=' + this.state.value[0])
              .then(res => res.json())
              .then((data) => {
                this.setState({ colleges: data })
              })
              .catch(console.log);
            }
        }
    render(){
        let datas;

        if(this.state.value[1]=='treatment'){
            datas =  <div>
                <div className="pb-sm-5">
                    <section className="bg-light">
                        <div className="container">
                        <div className="row">
                        <div className="col-lg-12 order-1 order-lg-1">
                        <h2>Hospitals in {this.state.value[0]} for {this.state.value[2]} treatment</h2>
                    <Accordion>
                    {this.state.hospitals.map((us, index) => (
                           <AccordionItem> 
                               <AccordionItemHeading >
                               <AccordionItemButton className="p-3 mb-2 bg-info text-white">
                               <h4 key={index}>{us.hospitalName}</h4>
                                </AccordionItemButton>
                               </AccordionItemHeading>
                               <AccordionItemPanel>
                                    <h5 className="text-primary">Address: </h5>
                                        <p key={index}>{us.address}, contact: {us.contact}</p>
                                    <h5 className="text-primary">About Hospital: </h5>
									    <p key={index}>{us.hospital_description}</p>
                                    <h5 className="text-primary">Locality: </h5>
									    <p key={index}>{us.area_name}</p>
                                        <h6 className="text-success">About Locality: </h6>
                                            <p key={index}>{us.area_description}</p>
                                            <h6 className="text-success">Market: </h6>
                                            <p key={index}>{us.market}</p>
                                            <p key={index}><h6 className="text-success">Available Transports: </h6>{us.transportsAvailable}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                      ))}
                    </Accordion>
            
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
        }
        if(this.state.value[1]=='education'){
            datas =   <div>   
                <div className="pb-sm-5">
            <section className="bg-light">
                        <div className="container">
                        <div className="row">
                        <div className="col-lg-12 order-1 order-lg-1">
                        <h2>Colleges in {this.state.value[0]} for {this.state.value[2]}</h2>
           <Accordion>
                    {this.state.colleges.map((us, index) => (
                           <AccordionItem> 
                               <AccordionItemHeading >
                               <AccordionItemButton className="p-3 mb-2 bg-info text-white">
                               <h6 key={index}>{us.collegeName}</h6>
                                </AccordionItemButton>
                               </AccordionItemHeading>
                               <AccordionItemPanel>
                               <h5 className="text-primary">Address: </h5>
                                        <p key={index}>{us.address}</p>
                                    <h5 className="text-primary">About College: </h5>
									    <p key={index}>{us.collegeDescription}</p>
                                    <h5 className="text-primary">Locality: </h5>
									    <p key={index}>{us.area_name}</p>
                                        <h6 className="text-success">About Locality: </h6>
                                            <p key={index}>{us.description}</p>
                                            <h6 className="text-success">Market: </h6>
                                            <p key={index}>{us.market}</p>
                                            <p key={index}><h6 className="text-success">Available Transports: </h6>{us.transports_available}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                      ))}
                    </Accordion>
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
        }
        return(
            <div>
                   {datas}
                </div>
        )
    }
}