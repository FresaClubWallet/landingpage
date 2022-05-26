import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import mockupImageSrc from "images/app-mockup.webp"
import appDecorator from "images/decorator_downloadapp.png"
import { ContentWithPaddingXl, Container as ContainerBase } from "components/misc/Layouts";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import appleIconImageSrc from "images/apple-icon.png";
import googlePlayIconImageSrc from "images/google-play-icon.png"

const Container = tw(ContainerBase)`bg-primary-500 -mx-8`
const Content = tw(ContentWithPaddingXl)``
const Row = tw.div`px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center`;

const ColumnContainer = tw.div`max-w-2xl`
const TextContainer = tw(ColumnContainer)``;
const Text = tw(SectionHeading)`text-gray-100 lg:text-left max-w-none text-xl leading-snug`;
const Subheading = tw(SubheadingBase)`text-white mb-4 tracking-wider text-3xl`

const LinksContainer = tw.div`mt-8 lg:mt-16 flex flex-col items-center sm:block`
const Link = styled.a`
  ${tw`w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 first:ml-0 bg-gray-100 hocus:bg-gray-300 text-gray-900 hocus:text-gray-900 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300`}
  img {
    ${tw`inline-block h-8 mr-3`}
  }
  span {
    ${tw`leading-none inline-block`}
  }
`;

const ImageContainer = tw(ColumnContainer)`mt-16 lg:mt-0 lg:ml-16 flex justify-end`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
export default ({
  subheading = "Download App",
  text = "Developers all over the world are happily using Fresa.",
  link1Text = "App Store",
  link1Url = "http://apple.com",
  link1IconSrc = appleIconImageSrc,
  link2Text = "Google Play",
  link2Url = "http://play.google.com",
  link2IconSrc = googlePlayIconImageSrc,
  pushDownFooter = false,
  imageSrc = mockupImageSrc,
}) => {
  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
      <Content>
        <Row>
          <TextContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Text>{text}</Text>
            <LinksContainer>
              <Link href={link1Url}>
                <img src={link1IconSrc} alt=""/>
                <span>{link1Text}</span>
              </Link>
              <Link href={link2Url}>
                <img src={link2IconSrc} alt=""/>
                <span>{link2Text}</span>
              </Link>
            </LinksContainer>
          </TextContainer>
          <ImageContainer>
            <img src={imageSrc} alt="" tw="w-64"/>
          </ImageContainer>
        </Row>
        <DecoratorBlobContainer>
          <img src={appDecorator} alt="" tw="w-64"/>
        </DecoratorBlobContainer>
      </Content>
    </Container>
  );
};
