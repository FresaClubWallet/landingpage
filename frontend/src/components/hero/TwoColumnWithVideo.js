import React, { useState } from 'react';
import styled from "styled-components";
import tw from "twin.macro";


import Header from "../headers/light.js";

import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration.webp";
import PowerLogoStripImage from "../../images/power-logo-strip.png";
import { Subheading as SubheadingBase } from "components/misc/Headings.js";
import LazyLoad from 'react-lazyload'

const CustomersLogoStrip = styled.div`
  ${tw`mt-4 lg:mt-8`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full md:pr-64 xl:pr-72`}
  }
`;
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-3xl leading-snug max-w-3xl text-left`;
const HighlightedText = tw.span`font-black text-3xl md:text-3xl leading-snug max-w-3xl text-primary-500 px-4 transform -skew-x-12`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-700 max-w-lg mx-auto lg:mx-0 text-left`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`border-2 px-10 lg:px-12 py-3 rounded-xl focus:outline-none font-medium transition duration-300 hocus:border-primary-700 border-primary-500 text-primary-500`;

const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;

const IllustrationContainer = tw.div`mt-4 flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;

const MessageModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 md:w-1/2 md:m-64 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-64`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;
const CloseMessageButton = tw.button`absolute top-0 right-0 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white`;
const Form = tw.form`text-sm max-w-sm sm:max-w-none mx-auto`
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-12 py-3 mt-1 rounded bg-third-500 tracking-wider font-bold  focus:border-third-500 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-primary-500`
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-3 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-300 border border-primary-500 hocus:border-primary-700`
const Subheading = tw(SubheadingBase)`text-center md:text-left text-black`;

export default ({
  description="Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText="Get Started",
  primaryButtonUrl="https://www.figma.com/proto/OP8fckKtfDJ0MWtc5aAHxz/Fresa?node-id=352%3A2&scaling=scale-down&page-id=88%3A2&starting-point-node-id=352%3A2",
  watchVideoButtonText="Watch Video",
  watchVideoYoutubeUrl="https://www.youtube.com/watch?v=215Fn7eHT9c",
  imageSrc=DesignIllustration,
  imageCss=null,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  const toggleModalMessage = () => setModalMessage(!modalMessage);
  const [email, setEmail] = useState('');
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
        res.json()
        console.log(res.status)
      })
      .then(res => {
      setMsg(res.msg)
      setModalMessage(true)
    });
  }

  return (
    <>
      <Header />
      <Container >
        <TwoColumn>
          <LeftColumn>
            <Heading>Being an<HighlightedText>unbanked merchant</HighlightedText> shouldn’t have to be so difficult.</Heading>
            <Paragraph>{description}</Paragraph>
            <Form>
              <Subheading>Subscribe to our mailing list</Subheading>
              <Input name="newsletter" type="email" placeholder="Your Email Address" onChange={e => setEmail(e.target.value)} value={email}/>
              <Button onClick={handleOnClick}>Subscribe Now</Button>
            </Form>
            <Actions>
               <PrimaryButton as="a" href={primaryButtonUrl} target="_blank">
                {primaryButtonText}
              </PrimaryButton>
              <WatchVideoButton onClick={toggleModal}>
                <span className="playIconContainer">
                  <PlayIcon className="playIcon" />
                </span>
                <span className="playText">{watchVideoButtonText}</span>
              </WatchVideoButton>
            </Actions>
            <CustomersLogoStrip>
              <p>Powered by</p>
              <LazyLoad height={200}>
                <img src={PowerLogoStripImage} alt="Our Customers" class="w-full md:pr-64 xl:pr-72"/>
              </LazyLoad>
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <LazyLoad height={200}>
                <img
                  fetchpriority="high"
                  css={imageCss}
                  src={imageSrc}
                  alt="Hero"
                  class="max-w-3xl lg:max-w-none"
                />
              </LazyLoad>
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
        {/* <MessageModal
          closeTimeoutMS={2}
          className="mainHeroModal"
          isOpen={modalMessage}
          onRequestClose={toggleModalMessage}
          shouldCloseOnOverlayClick={true}
        >
          <CloseMessageButton onClick={toggleModalMessage}>
            <CloseIcon tw="w-6 h-6" />
          </CloseMessageButton>
          <div className="bg-white w-96 p-5 rounded">
          <h1 className="font-bold text-2xl text-blue-500">
              
          </h1>
          <p className="py-1 text-gray-500">
            {msg}
          </p>
        </div>
        </MessageModal> */}
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">
            <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
          </div>
        </StyledModal>
      </Container>
    </>
  );
};
