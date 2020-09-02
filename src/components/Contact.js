import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";

import Wrapper from "./Wrapper";
import backgroundImage from "../assets/images/BlueBinary.jpg";

const StyledBackground = styled.section`
  height: calc(100vh);
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 180px;

  & > div.content {
    flex: 1;
    display: grid;
    place-items: center;
  }
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 200px 10px 1fr;
  background: #191919;
  position: absolute;
  width: 80%;
  max-width: 1700px;
  top: 20%;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto 200px;
  padding: 96px 0 102px;
  color: #636363;
  overflow: scroll;

  & label {
    font-family: "opensans-bold", sans-serif;
    font-size: 15px;
    line-height: 24px;
    margin: 12px 120px;
    color: #ebeeee;
    width: 26%;
  }

  &.required {
    color: #0762f9;
    font-size: 16px;
  }

  & > input,
  & > textarea {
    justify-self: center;
    padding: 10px 20px;
    color: #eee;
    background: #373233;
    margin-bottom: 42px;
    font-size: 15px;
    line-height: 24px;
    width: 65%;
  }

  & > textarea {
    min-height: 120px;
  }

  /* Button */
  & > button {
    font: 16px/30px "opensans-bold", sans-serif;
    grid-column-start: 3;
    text-transform: uppercase;
    width: 50%;
    letter-spacing: 3px;
    color: #fff;
    background: #0d0d0d;
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 12px 20px;
    margin: 0 auto 18px;
  }
  ${(props) =>
    props.error &&
    `
  border: 1px solid  red;
  `}
`;

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Please enter a valid email"),
  message: yup.string().required("Please enter a valid message"),
  name: yup.string().required("Please provide your name"),
});

function Contact(props) {
  function handleSubmit(values, props) {}

  return (
    <StyledBackground>
      <Overlay>
        <Wrapper>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{ email: "", name: "", subject: "", message: "" }}
            validationSchema={validationSchema}
          >
            {({
              values,
              errors,
              touched,
              isSubmitting,
              handleSubmit,
              handleChange,
            }) => {
              return (
                <StyledForm onSubmit={handleSubmit}>
                  <label>Name</label>
                  <span class="required">*</span>
                  <input
                    label="Name*"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  {errors.name && touched.name && <p>error for name</p>}
                  <label>Email</label>
                  <span class="required">*</span>
                  <input
                    // label="Email*"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email && <p>error for email</p>}
                  <label htmlFor="subject">Subject</label>
                  <span class="required"></span>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    value={values.subject}
                  />
                  {errors.subject && touched.subject && (
                    <p>error for subject</p>
                  )}
                  <label>Message</label>
                  <span class="required">*</span>
                  <textarea
                    // label="Message*"
                    min={3}
                    max={6}
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                  />
                  {errors.message && touched.message && (
                    <p>error for subject</p>
                  )}
                  <button type="submit" disabled={isSubmitting}>
                    Send Message
                  </button>
                </StyledForm>
              );
            }}
          </Formik>
        </Wrapper>
      </Overlay>
    </StyledBackground>
  );
}

export default Contact;
