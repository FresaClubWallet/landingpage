import React, { useState } from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-96 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 text-primary-500 text-left text-3xl sm:text-3xl lg:text-3xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base font-medium leading-relaxed text-black`;

const PrimaryButton = tw(PrimaryButtonBase)`shadow-xl mt-2 md:mt-2 rounded-xl text-sm inline-block mx-auto md:mx-0`;

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
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://www.figma.com/proto/OP8fckKtfDJ0MWtc5aAHxz/Fresa?node-id=352%3A28&scaling=scale-down&page-id=88%3A2&starting-point-node-id=352%3A2",
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const defaultStatistics = [
    {
      key: "Clients",
      value: "2282+"
    },
    {
      key: "Projects",
      value: "3891+"
    },
    {
      key: "Awards",
      value: "1000+"
    }
  ];
  const toggleModalMessageLive = () => setModalMessageLive(!modalMessageLive);
  const toggleModalMessageSale = () => setModalMessageSale(!modalMessageSale);
  const toggleModalMessageVendor = () => setModalMessageVendor(!modalMessageVendor);

  const [modalMessageLive, setModalMessageLive] = useState(false);
  const [modalMessageSale, setModalMessageSale] = useState(false);
  const [modalMessageVendor, setModalMessageVendor] = useState(false);

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? <Image imageSrc={imageSrc} css={imageCss} class="h-96 md:h-auto"/> : 
          <img src={imageSrc} css={imageCss} alt="fresa feature" class="h-96 md:h-auto"/>}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>Live inventory</Heading>
            <Description>Users have access to merchant’s live inventory. Vendors can add products with real time inventory tracking.</Description>
            <PrimaryButton onClick={() => toggleModalMessageLive()}>
              {primaryButtonText}
            </PrimaryButton>
            <Heading>Sales metrics reporting</Heading>
            <Description>Merchants can view data on sales including: 
              Gross daily, weekly, and monthly sales
              Top grossing products and sales information
            </Description>
            <PrimaryButton onClick={() => toggleModalMessageSale()}>
              {primaryButtonText}
            </PrimaryButton>
            <Heading>Vendor location feature</Heading>
            <Description>Customers can find their favorite roaming vendor’s location in real time with WiFi or GPRS.</Description>
            <PrimaryButton onClick={() => toggleModalMessageVendor()}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <MessageModal
          closeTimeoutMS={2}
          className="mainHeroModal"
          isOpen={modalMessageLive}
          onRequestClose={toggleModalMessageLive}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModalMessageLive}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="bg-white w-108 p-5 rounded">
            <p className="py-2 text-gray-500">
              Our live inventory feature lets you broadcast your exact amount of product available for sale.
              Once you sell out, you can choose to add your item back to your menu or wait for the next day!<br/>
              Whether you’re searching for how many Tacos your favorite taqueria has left before you walk
              over, or you have a limited item that you’d like the public to know exactly how many you have.
              You’ll no longer arrive at your favorite merchant and not know what’s in stock.<br/>
              Why is live inventory special…Think about your favorite roaming food vendor, remote store or
              seasonal farmers and fisherman who have a product and every day they transact; You can see in
              real time how many items are in stock.<br/>
              Every digital transaction naturally updates each merchant’s inventory through Fresa’s
              blockchain technology.<br/>
              Using our unique inventory features vendors/users can now have decentralized real-time
              inventory tracking. Merchants are now empowered not only as stand-alone business but with a
              live digital presence globally.
            </p>
          </div>
        </MessageModal>
        <MessageModal
          closeTimeoutMS={2}
          className="mainHeroModal"
          isOpen={modalMessageSale}
          onRequestClose={toggleModalMessageSale}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModalMessageSale}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="bg-white w-108 p-5 rounded">
            <p className="py-2 text-gray-500">
            Fresa empowers its users to view data on their sales including: Gross daily, weekly and monthly
            top grossing sales products. Our merchants using Android or iOS smartphones will now be
            empowered with sales metrics and information digitizing marginalized business owners with key
            information.<br/><br/>
            Our blockchain technology allows every merchant to now validate their micro business
            transactions, while providing key sales information for micro-lending opportunities. With Fresa,
            an informal merchant now has the power and insights on their business sales volumes and other
            key metrics.<br/><br/>
            Everyone deserves the power of data, our decentralized application allows key information on
            daily transactions to illuminate a brighter understanding for informal merchants to thrive as a
            business.
            </p>
          </div>
        </MessageModal>
        <MessageModal
          closeTimeoutMS={2}
          className="mainHeroModal"
          isOpen={modalMessageVendor}
          onRequestClose={toggleModalMessageVendor}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModalMessageVendor}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="bg-white w-108 p-5 rounded">
            <p className="py-2 text-gray-500">
            Fresa was built for the roaming vendor, farmer and micro businesses to transact in the digital
            world. Our marketplace was built for informal merchants to operate and be found from
            anywhere in the world.<br/><br/>
            We focused on our users’ daily lives where business is non-traditional and mobile every day.

            With a focus on empowering mobile merchants, our decentralized app utilizes WiFi/GPRS for
            accurate locations of mobile merchants.<br/><br/>
            No matter where you go in the world, the Fresa marketplace will show you in real-time where to
            find overlooked merchants and their inventory. Our Google maps integration will guarantee you
            won’t get lost along the way.
            </p>
          </div>
        </MessageModal>
    </Container>
  );
};
