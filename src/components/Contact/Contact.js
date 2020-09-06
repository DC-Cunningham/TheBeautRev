import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Wrapper from "../Wrapper";
import backgroundImage from "../../assets/images/BlueBinary.jpg";
import { Input, TextArea } from "./Input";

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
  max-width: 800px;
  margin-top: 200px;
  background-color: #191919;
  border-radius: 8px;
  padding: 40px;

  & > button {
    display: block;
    font-size: 20px;
    text-transform: uppercase;
    width: 250px;
    color: #fff;
    border: none;
    background: #0d0d0d;
    cursor: pointer;
    text-align: center;
    padding: 20px 20px;
    margin: 20px auto 20px;
  }
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: center;

  & > #icon {
    height: 75px;
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  & > p {
    margin-left: 20px;
  }
`;

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Please enter a valid email"),
  message: yup.string().required("Please enter a valid message"),
  name: yup.string().required("Please provide your name"),
});

function Contact(props) {
  function handleSubmit(values, props) {
    const {} = values;
    // perform api stuff
  }

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
                  <FormHeader>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      color="grey"
                      size="6x"
                      id="icon"
                    />
                    <p className="message-text">
                      If you wish to get in contact to discuss opportunities
                      please do and I will respond as promptly as possible
                    </p>
                  </FormHeader>
                  <Input
                    name={"name"}
                    labelText="Name"
                    required
                    onChange={handleChange}
                    value={values.name}
                    error={errors.name && touched.name}
                  />
                  <Input
                    name={"email"}
                    labelText="Email"
                    required
                    onChange={handleChange}
                    value={values.email}
                    error={errors.email && touched.email}
                  />
                  <Input
                    name={"subject"}
                    labelText="Subject"
                    onChange={handleChange}
                    value={values.subject}
                    error={errors.subject && touched.subject}
                  />
                  <TextArea
                    name={"message"}
                    labelText="Message"
                    required
                    onChange={handleChange}
                    value={values.message}
                    error={errors.message && touched.message}
                  />
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
