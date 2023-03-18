import React from 'react'
import { useForm,ValidationError } from '@formspree/react';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "./../assets/img/contact-img.svg";
import 'animate.css';



export default function Contact() {
 const [state, handleSubmit] = useForm("xpzelgea");
  if (state.succeeded) {
      return <p>Thanks for Connecting!</p>;
  }
  return (
    // <div>
    //   <h1>For any queriey Contact me</h1>
    //   <form onSubmit={handleSubmit} action="https://formspree.io/f/xpzelgea">
    //    <input type="text" id='name' placeholder='name'/>
    //    <input type="tel" id="tel" placeholder='mobile no'/>
    //    <input
    //     id="email"
    //     type="email" 
    //     name="email"
    //   />
    //   <ValidationError 
    //     prefix="Email" 
    //     field="email"
    //     errors={state.errors}
    //   />
      
    //   <textarea
    //     id="message"
    //     name="message"
    //   />
    //   <ValidationError 
    //     prefix="Message" 
    //     field="message"
    //     errors={state.errors}
    //   />
    //   <button type="submit" disabled={state.submitting}>
    //     Submit
    //   </button>
    // </form>
    // </div>

    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img  src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>         
                <div >
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/xpzelgea">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input name='name' type="text"  placeholder="First Name"  />
                      <ValidationError 
                    prefix="name" 
                    field="name"
                    errors={state.errors}
                     />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name='name' type="text"  placeholder="Last Name" />
                      <ValidationError 
                        prefix="name" 
                        field="name"
                        errors={state.errors}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name='email' type="email"  placeholder="Email Address"  />
                      <ValidationError 
                        prefix="email" 
                        field="email"
                        errors={state.errors}
                        />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name='phone' type="tel"  placeholder="Phone No." />
                      <ValidationError 
                     prefix="phone" 
                     field="phone"
                     errors={state.errors}
                     />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name='message' rows="6"  placeholder="Message" ></textarea>
                      <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      />
                      <button type="submit" disabled={state.submitting}>Submit</button>
                    </Col>
                  </Row>
                </form>
              </div>
           
          </Col>
        </Row>
      </Container>
    </section>
  )
  
}




