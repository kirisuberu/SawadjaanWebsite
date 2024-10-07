import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper>
      <h1>Contact Us</h1>
      <Form name="contact-form" id="contact-form">
        <input type="text" name="FName" id="Fname" placeholder="First Name" />
        <input type="text" name="LName" id="Lname" placeholder="Last Name" />
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="name@domain.com"
        />
        <input
          type="textarea"
          name="Message"
          id="Message"
          placeholder="Message"
        />
        <input type="submit" value="Send" />
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const Form = styled.form`
  max-width: 500px;
  min-width: 300px;
`;
