import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  & > div {
    display: block;
    align-items: center;
    margin: 10px 20px;

    @media screen and (min-width: 768px) {
      display: flex;
    }

    & > label {
      font-family: "opensans-bold", sans-serif;
      color: #ebeeee;
      width: 150px;
      display: block;
    }

    & > input,
    textarea {
      padding: 10px 20px;
      color: #eee;
      background: #373233;
      border: 0;
      width: 100%;
      margin: 20px 0 10px;

      ${(props) => props.error && `border: 1px solid red;`}

      @media screen and (min-width: 768px) {
        flex: 1;
        margin-top: 0;
      }
    }

    & > textarea {
      height: 150px;
    }
  }

  & > span {
    color: red;
    position: relative;
    left: 20px;

    @media screen and (min-width: 768px) {
      left: 170px;
    }
  }
`;

export function Input({
  name,
  labelText,
  required,
  type = "text",
  onChange,
  value,
  error,
}) {
  return (
    <StyledInput error={error}>
      <div>
        <label htmlFor={name}>
          {labelText} {required && <span className="required">*</span>}
        </label>
        <input id={name} {...{ onChange, value, type, name }} />
      </div>
      {error && <span>{name} is a required field</span>}
    </StyledInput>
  );
}

export function TextArea({
  name,
  labelText,
  required,
  type = "text",
  onChange,
  value,
  error,
}) {
  return (
    <StyledInput error={error}>
      <div>
        <label htmlFor={name}>
          {labelText} {required && <span className="required">*</span>}
        </label>
        <textarea id={name} {...{ onChange, value, type, name }} />
      </div>
      {error && <span>{name} is a required field</span>}
    </StyledInput>
  );
}
