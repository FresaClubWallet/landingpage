import React, { useState } from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import contactUsIllustrationSrc from "images/contactUs.webp";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
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
const PrimaryButton = tw.button`border-2 px-10 lg:px-12 py-3 rounded-xl focus:outline-none font-medium transition duration-300 hocus:border-primary-700 border-primary-500 text-primary-500`;

const CloseModalButton = tw.button`absolute top-0 right-0 mt-4 mr-4 hocus:text-primary-500`;
const ButtonClose = tw(PrimaryButton)`w-full mt-16`;
const ButtonSuccess = tw.button`border-2 px-1 py-1 rounded-xl bg-green-500 font-medium transition duration-300 border-green-500 text-white mr-2`;
const ButtonError = tw.button`border-2 px-1 py-1 rounded-xl bg-red-500 font-medium transition duration-300 border-red-500 text-white mr-2`;

const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-8 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`py-8 text-center md:text-left`;

const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col`
const Input = tw.input`mt-6 border rounded-xl first:mt-0 py-3 focus:outline-none px-4 font-medium transition duration-300 hocus:border-fourth-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw.button`w-full sm:w-40 mt-6 py-2 bg-primary-500 text-white rounded-md font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

export default ({
  subheading = "Contact Us",
  heading = <><span tw="text-primary-500">Contact Us</span><wbr/></>,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = false,
}) => {
  const [modalMessage, setModalMessage] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false)

  const toggleModalMessage = () => setModalMessage(!modalMessage);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [msg, setMsg] = useState('')

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
    fetch(`${process.env.REACT_APP_BACKEND}/contact/create`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name" : name,
        "email": email,
        "subject": subject,
        "message": message,
        "g-recaptcha-response": token
      })
    }).then(res => {
        if (res.status === 200) {
          setIsSuccess(true)
          setEmail("")
          setName("")
          setSubject("")
          setMessage("")
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
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={contactUsIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Form action={formAction} method={formMethod}>
              <Input type="text" name="fullname" placeholder="Full name" onChange={e => setName(e.target.value)} value={name}/>
              <Input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email}/>
              <Input type="text" name="subject" placeholder="Subject" onChange={e => setSubject(e.target.value)} value={subject}/>
              <Textarea name="message" placeholder="Message" onChange={e => setMessage(e.target.value)} value={message}/>
            </Form>
            <SubmitButton onClick={handleOnClick} type="submit">{submitButtonText}</SubmitButton>
          </TextContent>
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
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
