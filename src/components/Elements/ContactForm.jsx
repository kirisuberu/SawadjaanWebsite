import styled from "styled-components";
import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from "react";

const {
  VITE_EMAILJS_PUBLIC_KEY,
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
} = import.meta.env;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prev) => ({ ...prev, submitting: true }));

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        message: formData.message || "No message provided",
      };

      const response = await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID, // Replace with your Template ID from EmailJS
        templateParams
      );

      if (response.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          error: null,
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        error: error.message || "An error occurred while sending the message.",
      });
    }
  };

  return (
    <Wrapper>
      <Form name="contact-form" id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <TextInput
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <label htmlFor="lastName">Last Name</label>
        <TextInput
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <TextInput
          type="email"
          name="email"
          id="email"
          placeholder="name@domain.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <TextAreaInput
          type="textarea"
          name="message"
          id="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        {status.error && <Alert variant="error">{status.error}</Alert>}

        {status.submitted && (
          <Alert variant="success">
            Thank you! Your form has been submitted successfully.
          </Alert>
        )}
        <Submit type="submit" value="Send" />
      </Form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #eee;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
const Form = styled.form`
  max-width: 500px;
  min-width: 300px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  input {
    border-radius: 1rem;
  }
  label {
    color: #19191a;
    font-family: "Poppins", sans-serif;
    font-size: 0.8rem;
  }
  -webkit-box-shadow: 1px 0px 21px 0px #19191a;
  box-shadow: 1px 0px 21px 0px #19191a;
`;
const TextInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #ddd;
  border: none;
  color: #19191a;
  ::placeholder {
    color: #19191a;
  }
`;
const TextAreaInput = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 1rem;
  background-color: #ddd;
  border: none;
  color: #19191a;
  ::placeholder {
    color: #19191a;
  }
`;

const Submit = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #19191a;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
`;
const Alert = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;

  ${(props) =>
    props.variant === "error" &&
    `
    background-color: #fef2f2;
    color: #991b1b;
    border: 1px solid #fecaca;
  `}

  ${(props) =>
    props.variant === "success" &&
    `
    background-color: #f0fdf4;
    color: #166534;
    border: 1px solid #bbf7d0;
  `}
`;
