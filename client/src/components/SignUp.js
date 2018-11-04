import React from 'react';
import styled from 'styled-components';
import { SignForm, SignGrid, FormHeader, InputGroup, Input,
  Label, ButtonPrimary } from './Form/Elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ErrorMessage from './ErrorMessage';

const Prompt = styled.p`
  text-align: right;
  color: #fcb150;
  font-size: 0.8rem;
  margin-top: 0px;
`;

const SignUp = (props) => {
  let username, name, password, confirmPassword;
  return (
    <div>
      <FormHeader>Sign Up</FormHeader>
      <SignForm>
        <ErrorMessage>{props.errMessage}</ErrorMessage>
        <Prompt>(All fields are required)</Prompt>
        <SignGrid>
          <Label htmlFor="email">Email</Label>
          <InputGroup>
            <FontAwesomeIcon icon="envelope" />
            <Input type="email" id="email" placeholder="Email"
              ref={(input) => {username = input}} >
            </Input>
          </InputGroup>
          <Label htmlFor="name">Name</Label>
          <InputGroup>
            <FontAwesomeIcon icon="user" />
            <Input type="text" id="name" placeholder="Name"
              ref={(input) => {name = input}} >
            </Input>
          </InputGroup>
          <Label htmlFor="password">Password</Label>
          <InputGroup>
            <FontAwesomeIcon icon="unlock" />
            <Input type="password" id="password" placeholder="Password"
              ref={(input) => {password = input}} />
          </InputGroup>
          <Label htmlFor="confirmPassword">Confirm<br/>password</Label>
          <InputGroup>
            <FontAwesomeIcon icon="unlock" />
            <Input type="password" id="confirmPassword" placeholder="Password"
              ref={(input) => {confirmPassword = input}} />
          </InputGroup>
          <ButtonPrimary style={{gridColumn: '2/3'}}
            onClick={(e) => {
              e.preventDefault();
              props.register(username.value, password.value, name.value);
            }}>Sign Up</ButtonPrimary>
        </SignGrid>
      </SignForm>
    </div>
  );
};


export default SignUp;
