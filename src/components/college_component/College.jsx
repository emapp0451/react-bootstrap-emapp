import React, { Component } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
export default class College extends Component{
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
      fetch('/test/findallCollegeByCityId?cityName='+ this.state.value)
        .then(res => res.json())
        .then((data) => {
          this.setState({ user: data })
        })
        .catch(console.log);
      }
    render(){

        return(
            <section className="bg-light">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 order-1 order-lg-1">
                    <h2>List of colleges in {this.state.value}</h2>

                    <Accordion>
                    {this.state.user.map((us, index) => (
                           <AccordionItem> 
                               <AccordionItemHeading >
                               <AccordionItemButton className="p-3 mb-2 bg-info text-white">
                               <h3 key={index}>{us.collegeName}</h3>
                                </AccordionItemButton>
                               </AccordionItemHeading>
                               <AccordionItemPanel>
                                    <p key={index}><h6>Address: </h6>{us.address}</p>
                                    <p key={index}><h6>About: </h6>{us.collegeDescription}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                      ))}
                    </Accordion>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

const DummyContent = () => (
    <p style={{ padding: '18px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  );
  