import React, { Component } from 'react';
import Caruseldiv from './Caruseldiv';
import Services from './Services';
import Contact from './Contact';
import Photography from './Photography';
import Physician from './Physician';
import Team from './Team';
import SimpleMap from './Map';
export default class Index extends Component {
  render() {
    return (
      <React.Fragment>
        
        <div className="caruseldivclass">
          <Caruseldiv />
        </div>
        <br />
        <br />
        <Services />
        <br />
        <br />
        <Physician />
        <br />
        <br />
        <Team />
        <br />
        <br />
        <Photography />
        <br />
        <br/>
        <SimpleMap />
        <br />
        <br/>
        <Contact />
        <br />
        <br/>
        
      </React.Fragment>
    );
  }
}
