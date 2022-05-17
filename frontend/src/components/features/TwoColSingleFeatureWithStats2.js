import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";

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

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? <Image imageSrc={imageSrc} css={imageCss} /> : <img src={imageSrc} css={imageCss} alt="" />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>Live inventory</Heading>
            <Description>Users have access to merchant’s live inventory. Vendors can add products with real time inventory tracking.</Description>
            <PrimaryButton as="a" href={primaryButtonUrl} target="_blank">
              {primaryButtonText}
            </PrimaryButton>
            <Heading>Sales metrics reporting</Heading>
            <Description>Merchants can view data on sales including: 
              Gross daily, weekly, and monthly sales
              Top grossing products and sales information
            </Description>
            <PrimaryButton as="a" href={primaryButtonUrl} target="_blank">
              {primaryButtonText}
            </PrimaryButton>
            <Heading>Vendor location feature</Heading>
            <Description>Customers can find their favorite roaming vendor’s location in real time with WiFi or GPRS.</Description>
            <PrimaryButton as="a" href={primaryButtonUrl} target="_blank">
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
