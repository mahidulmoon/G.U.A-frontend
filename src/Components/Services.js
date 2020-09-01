import React, { Component } from 'react';
import {Row ,Col} from 'react-bootstrap';
export default class Services extends Component {
  render() {
    return (
        <React.Fragment>
            <center><h3>OUR SERVICES</h3></center>
            <div id="feature" className="feature">
                <Row>
                    <div className="ftdesign">
                        <div className="green-square"><img src="imagesccu.png" /></div>
                        <h5>Coronary Care Unit (CCU)</h5>
                        <p>A hospital ward specialized in the care of patients with heart attacks, unstable angina, cardiac dysrhythmia and other cardiac conditions that require continuous monitoring and treatment.</p>
                    </div>
                    <div className="ftdesign">
                        <div className="green-square"><img src="IMG_20200818_194051.jpg" /></div>
                        <h5>Critical Care</h5>
                        <p>Also called intensive care, this department is for seriously ill patients.</p>
                    </div>
                    <div className="ftdesign">
                        <div className="green-square"><img src="imagesdl.jfif" /></div>
                        <h5>Discharge Lounge</h5>
                        <p>Patients who don't need to stay in a ward are transferred to the lounge on the day of discharge. Many hospitals now have discharge lounges with facilities such as TV's, radio, puzzles, magazines, books and newspapers</p>
                    </div>
                    <div className="ftdesign">
                        <div className="green-square"><img src="5c90ae7ba7f26900016313f2.jpg" /></div>
                        <h5>Gynecology</h5>
                        <p>Investigates and treats problems relating to the female urinary tract and reproductive organs, such as Endometriosis, infertility and incontinence.</p>
                    </div>
                </Row>\<br />
                <Row>
                    <div className="ftdesign">
                        <div className="green-square"><img src="emergency.jfif" /></div>
                        <h5>Accident and  <br/>emergency (A&E)</h5>
                        <p>Also called Casualty Department, where you're likely to be taken if you have arrived in an ambulance or emergency situation.</p>
                    </div>
                    <div className="ftdesign">
                        <div className="green-square"><img src="anth.jfif" /></div>
                        <h5>Anesthetics </h5>
                        <p>Doctors in this department give anesthetic for operations and procedures. An anesthetic is a drug or agent that produces a complete or partial loss of feeling. There are three kinds of anesthetic: general, regional and local.</p>
                    </div>
                    <div className="ftdesign">
                        <div className="green-square"><img src="breat.jfif" /></div>
                        <h5>Breast Screening</h5>
                        <p>Screens women for breast cancer and is usually linked to the X-ray or radiology department.s</p>
                    </div>
                    <div className="ftdesign">
                        <div className="green-square"><img src="cardiology.png" /></div>
                        <h5>Cardiology</h5>
                        <p>Provides medical care to patients who have problems with their heart or circulation.</p>
                    </div>
                </Row>
                
            </div>
        </React.Fragment>
    );
  }
}
