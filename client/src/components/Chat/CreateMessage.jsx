import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonPrimary, ButtonInvisible } from '../Form/Elements';

const MessageInput = styled.textarea`
  box-sizing: border-box;
  height: 70px;
  width: 80%;
  @media (max-width: 767px) {
    width: 60%;
  }
  float: left;
  background-color: rgba(255, 255, 255, 0.15);
  border: solid 1px #9099b7;
  color: #fff;
  padding: 10px;
  ::placeholder {
    color: #9099b7;
  }
  ::-ms-input-placeholder {
    color: #9099b7;
  }
`;

//TODO: make sure the message is sent on hitting Enter

const CreateMessage = () => {
  return (
    <div style={{padding: '15px 7px 20px 27px'}}>
      <MessageInput rows='10' placeholder='Type here'/>
      <div style={{float: 'left', marginLeft: '20px'}}>
        <div style={{marginBottom: '18px'}}>
        <ButtonInvisible>
          <FontAwesomeIcon icon='smile' className='fa-lg'/>
        </ButtonInvisible>
        <ButtonInvisible>
          <FontAwesomeIcon icon='microphone' className='fa-lg'/>
        </ButtonInvisible>
        </div>
        <ButtonPrimary>Send</ButtonPrimary>
      </div>
    </div>
  );
};

export default CreateMessage;