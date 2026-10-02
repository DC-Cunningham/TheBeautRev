import React, { useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Wrapper from "../Wrapper";
import backgroundImage from "../../assets/images/BlueBinary.jpg";
import { Input, TextArea } from "./Input";
import Turnstile from "./Turnstile";

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
  .message-text {
    font-family: "opensans-light", sans-serif;
    font-size: 18px;
    line-height: 36px;
  }
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  & > p {
    font-family: "opensans", sans-serif;
    margin-top: 10px;
    color: #ebeeee;
  }
  & > p.error {
    color: red;
  }
`;

// Hidden from people; bots that fill every field give themselves away.
const Honeypot = styled.div`
  position: absolute;
  left: -9999px;
  height: 0;
  overflow: hidden;
`;

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Please enter a valid email"),
  message: yup.string().required("Please enter a valid message"),
  name: yup.string().required("Please provide your name"),
});

function Contact(props) {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReset, setTurnstileReset] = useState(0);

  async function handleSubmit(
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) {
    const { name, email, subject, message, website } = values;
    try {
      await API.sendMail({
        name,
        email,
        subject,
        message,
        website,
        turnstileToken,
      });
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
    // Tokens are single use.
    setTurnstileToken("");
    setTurnstileReset((n) => n + 1);
  }

  return (
    <StyledBackground>
      <Overlay>
        <Wrapper>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              email: "",
              name: "",
              subject: "",
              message: "",
              website: "",
            }}
            validationSchema={validationSchema}
          >
            {({
              values,
              errors,
              touched,
              status,
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
                  <Honeypot aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      onChange={handleChange}
                      value={values.website}
                    />
                  </Honeypot>
                  <FormFooter>
                    <Turnstile
                      onToken={setTurnstileToken}
                      resetKey={turnstileReset}
                    />
                    {status?.success === true && (
                      <p>Thanks, your message has been sent.</p>
                    )}
                    {status?.success === false && (
                      <p className="error">
                        Sorry, your message could not be sent. Please try again.
                      </p>
                    )}
                  </FormFooter>
                  <button
                    type="submit"
                    disabled={isSubmitting || !turnstileToken}
                  >
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
