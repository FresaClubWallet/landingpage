import React, { useState } from 'react';
import tw from "twin.macro";
import styled from "styled-components";

import {ReactComponent as EmailNewsletterIconBase } from "../../images/email-newsletter-icon.svg"
import {Container as ContainerBase } from "components/misc/Layouts.js"
import {SectionHeading} from "components/misc/Headings.js";
import {PrimaryButton} from "components/misc/Buttons.js";
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";

const Container = tw(ContainerBase)`-mx-8`
const Content = tw.div`max-w-screen-xl mx-auto py-8 md:py-12 lg:py-16`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`
const TextColumn = tw.div`flex items-center flex-col sm:flex-row`
const FormColumn = tw.div`mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto`

const MessageModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 md:w-1/3 md:m-64 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-64`}
  }
`;

const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`w-16 h-16 text-primary-500`
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`
const Heading = tw(SectionHeading)`text-black sm:text-left leading-none`
const Description = tw.p`text-gray-500 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`

const Form = tw.form`text-sm max-w-sm sm:max-w-none mx-auto`
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-12 py-3 mt-1 rounded bg-third-500 tracking-wider font-bold  focus:border-third-500 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-primary-500`
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-3 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-300 border border-primary-500 hocus:border-primary-700`

const ButtonClose = tw(PrimaryButton)`w-full mt-16`;
const ButtonSuccess = tw.button`border-2 px-1 py-1 rounded-xl bg-green-500 font-medium transition duration-300 border-green-500 text-white mr-2`;
const ButtonError = tw.button`border-2 px-1 py-1 rounded-xl bg-red-500 font-medium transition duration-300 border-red-500 text-white mr-2`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-4 mr-4 hocus:text-primary-500`;

export default () => {
const toggleModalMessage = () => setModalMessage(!modalMessage);
const [email, setEmail] = useState('');
const [msg, setMsg] = useState('')
const [modalMessage, setModalMessage] = useState(false);
const [isSuccess, setIsSuccess] = useState(false)

const handleOnClick = e => {
  e.preventDefault();
  window.grecaptcha.ready(() => {
    window.grecaptcha.execute(process.env.REACT_APP_SITE_KEY, { action: 'submit' }).then(token => {
      submitData(token);
    });
  });
}

const submitData = (token) => {
  // call a backend API to verify reCAPTCHA response
  fetch(`${process.env.REACT_APP_BACKEND}/newsletter/create`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "g-recaptcha-response": token
    })
  }).then(res => {
    if (res.status === 200) {
      setIsSuccess(true)
      setEmail("")
    } else setIsSuccess(false)
    return res.json()
    })
    .then(res => {
      setMsg(res.msg)
      setModalMessage(true)
    })
    .catch(error => {
      setIsSuccess(false)
      setMsg("Error please try again later!")
      setModalMessage(true)
    });
}
  return (
    <Container>
      <Content>
        <Row>
          <TextColumn>
            <EmailNewsletterIcon />
            <HeadingInfoContainer>
              <Heading>Newsletter</Heading>
              <Description>Subscribe now to get our latest blog posts.</Description>
            </HeadingInfoContainer>
          </TextColumn>
          <FormColumn>
          <Form>
              <Input name="newsletter" type="email" placeholder="Your Email Address" onChange={e => setEmail(e.target.value)} value={email}/>
              <Button onClick={handleOnClick}>Subscribe Now</Button>
          </Form>
          </FormColumn>
        </Row>
        <MessageModal
          closeTimeoutMS={2}
          className="mainHeroModal"
          isOpen={modalMessage}
          onRequestClose={toggleModalMessage}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModalMessage}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="bg-white w-96 p-5 rounded">
          <h1 className="font-bold text-2xl text-blue-500">
              
          </h1>
          <p className="py-1 text-gray-500">
            {isSuccess ?
              <ButtonSuccess><CheckIcon tw="w-6 h-6" /></ButtonSuccess> :
              <ButtonError><CloseIcon tw="w-6 h-6" /></ButtonError>}
              {msg}
          </p>
          <ButtonClose onClick={toggleModalMessage}>Close</ButtonClose>
        </div>
        </MessageModal>
      </Content>
    </Container>
  );
};
