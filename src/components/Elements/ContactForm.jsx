import styled from "styled-components";

export default function ContactForm() {
  return (
    <Wrapper>
      <Form name="contact-form" id="contact-form">
        <TextInput
          type="text"
          name="FName"
          id="Fname"
          placeholder="First Name"
        />
        <TextInput
          type="text"
          name="LName"
          id="Lname"
          placeholder="Last Name"
        />
        <TextInput
          type="email"
          name="Email"
          id="Email"
          placeholder="name@domain.com"
        />
        <TextAreaInput
          type="textarea"
          name="Message"
          id="Message"
          placeholder="Message"
        />
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
  -webkit-box-shadow: 1px 0px 21px 0px #006747;
  box-shadow: 1px 0px 21px 0px #006747;
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
  background-color: #00674f;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
`;
