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
  display: flex;
  background: #191919;
  position: absolute;
  width: 80%;
  max-width: 1700px;
  top: 250px;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto auto 200px;
  padding: 96px 0 102px;
  color: #636363;
  overflow: scroll;

  ul {
    margin: auto;
    width: 100%;
    font-family: "opensans-bold", sans-serif;
    line-height: 24px;
    letter-spacing: 3px;
    font-size: 16px;
  }

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    & > label {
      flex: 1 0 120px;
      max-width: 220px;
      width: 25%;
      min-width: 300px;
      color: #ebeeee;
      & > .required {
        color: #0762f9;
        padding-left: 5px;
      }
    }

    & > input,
    & > textarea {
      flex: 1;
      justify-self: center;
      padding: 10px 20px;
      color: #eee;
      background: #373233;
      margin: 10px 30px 20px;
      max-width: 1000px;
      min-width: 210px;
      border: ${(props) =>
        console.log(props) || (props.errors ? "1px solid red" : "none")};
    }

    & > textarea {
      min-height: 120px;
    }
  }

  button {
    font-size: 20px;
    text-transform: uppercase;
    width: 50%;
    color: #fff;
    border: none;
    background: #0d0d0d;
    cursor: pointer;
    text-align: center;
    padding: 20px 20px;
    margin: 20px auto 18px;
  }

  .error p {
    margin: 0 auto;
    color: red;
  }
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
                  <ul>
                    <li>
                      <label>
                        Name<span class="required">*</span>
                      </label>
                      <input
                        label="Name*"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                      />
                    </li>
                    <li className="error">
                      {errors.name && touched.name && <p>a name is required</p>}
                    </li>
                    <li>
                      <label htmlFor="email">
                        Email<span class="required">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </li>
                    <li className="error">
                      {errors.email && touched.email && (
                        <p>please check your email</p>
                      )}
                    </li>
                    <li>
                      <label htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        onChange={handleChange}
                        value={values.subject}
                      />
                    </li>
                    <li className="error">
                      {errors.subject && touched.subject && (
                        <p>please check your subject</p>
                      )}
                    </li>
                    <li>
                      <label htmlFor="message">
                        Message<span class="required">*</span>
                      </label>
                      <textarea
                        id="message"
                        min={3}
                        max={6}
                        name="message"
                        onChange={handleChange}
                        value={values.message}
                      />
                    </li>
                    <li className="error">
                      {errors.message && touched.message && (
                        <p>please add a message</p>
                      )}
                    </li>
                    <li>
                      <button type="submit" disabled={isSubmitting}>
                        Send Message
                      </button>
                    </li>
                  </ul>
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
