import React, { useState } from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import LazyLoad from 'react-lazyload'
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-left p-4 `}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-left`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm  font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const MessageModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 md:m-48 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-96`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-4 mr-4 hocus:text-primary-500`;


export default ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description: "We strictly only deal with vendors that provide top notch security.",
      url: "https://timerse.com"
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://google.com"
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Customizable",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://reddit.com"
    }
  ],
  linkText = "Learn More",
  heading = "",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  const toggleModalCross = (type) => {
    if (type == "cross") {
      setModalMessageCross(!modalMessageCross)
    } else if (type == "mobile") {
      setModalMessageMobile(!modalMessageMobile)
    } else {
      setModalMessageFood(!modalMessageFood)
    }
  }
  const [modalMessageCross, setModalMessageCross] = useState(false);
  const [modalMessageMobile, setModalMessageMobile] = useState(false);
  const [modalMessageFood, setModalMessageFood] = useState(false);

  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card onClick={() => toggleModalCross(card.type)}>
                <span className="imageContainer" css={imageContainerCss}>
                  <LazyLoad height={100}>
                    <img src={card.imageSrc} alt={card.title} css={imageCss} />
                  </LazyLoad>
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
                {linkText && (
                  <span className="link">
                    <span>{linkText}</span>
                    <ArrowRightIcon className="icon" />
                  </span>
                )}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <MessageModal
          closeTimeoutMS={2}
          className="mainHeroModal"
          isOpen={modalMessageCross}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={() => setModalMessageCross(!modalMessageCross)}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="bg-white w-108 p-5 rounded">
            <p className="py-2 text-gray-500">
            The Fresa marketplace and virtual wallet lets you create your storefront and empowers you to
            send money immediately with the lowest commissions in the market.
            Send and receive money in seconds with just a phone number.<br/><br/>
            Withdraw through on/off ramp partners and reloadable debit card.<br/>
            Withdraw USD, EURO or REALs via cUSD, cEUR and cREAL stable coin transactions.<br/>
            No intermediaries.<br/><br/>
            Multiple languages*<br/>
            Fresa’s card integration allows for our distributed debit cards to enable fast and easy payments
            for our marketplace merchants and users. Our debit card allows un/underbanked merchants to
            thrive in today’s world by allowing them payment access and credit lines based on their
            marketplace sales.
            </p>
          </div>
        </MessageModal>
        <MessageModal
          closeTimeoutMS={2}
          className="mainHeroModal"
          isOpen={modalMessageMobile}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={() => setModalMessageMobile(!modalMessageMobile)}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="bg-white w-108 p-5 rounded">
            <p className="py-2 text-gray-500">
            Out native wallet allows for marketplace users to connect their Valora wallet or a wallet of their
            choice through Wallet Connector. Once a vendor connects their wallet of choice, we allow
            merchants to have full control through our native wallet and off ramp features.<br/><br/>
            Through a partnership with Coinbase, MasterCard and Celo our wallet allows Fresa users to have
            global access to their assets with just their phone. As a non-custodial storage wallet, we make
            you the sole owner of your stable assets.<br/><br/>
            Fresa generates a QR Code per storefront which makes you and your menu items available to
            anyone to browse via their cellphone. This allows all payments to be initiated through a quick
            QR scan and then straight to your wallet.<br/><br/>
            Our wallet and marketplace users get to keep more of their money with our flat 1% fee per
            transaction. Fresa’s merchants have full autonomy to carry out transfers without intermediaries
            to clients anywhere through our secure mobile transactions.
            </p>
          </div>
        </MessageModal>
        <MessageModal
          closeTimeoutMS={2}
          className="mainHeroModal"
          isOpen={modalMessageFood}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={() => setModalMessageFood(!modalMessageFood)}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="bg-white w-108 p-5 rounded">
            <p className="py-2 text-gray-500">
            Our marketplace allows all merchants with items that need to be sold before expiring to be
            pushed directly to wallets that have declared themselves as a food saver.<br/><br/>
            What does that mean?<br/><br/>
            We have an API that allows anyone from a rurarl
            </p>
          </div>
        </MessageModal>
    </Container>
  );
};
