import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import {ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"
import {Container as ContainerBase } from "components/misc/Layouts.js"
import main_feature1 from "../../images/main_feature1.png"
import main_feature2 from "../../images/main_feature2.png"
import main_feature3 from "../../images/main_feature3.png"

const Container = tw(ContainerBase)`bg-fourth-500 -mx-8`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 text-white text-left text-3xl sm:text-3xl lg:text-4xl text-center md:text-left leading-tight`;

const Features = tw.div`mt-8 flex flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block text-center w-16 h-16 flex-shrink-0`}
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-12 text-center md:text-left`;
const FeatureHeading = tw.span`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm text-white text-lg`;


export default ({
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,

}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
           <img css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} alt="fresa pros"/>
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Features>
                <FeatureIconContainer><img alt="POS" src={main_feature1}></img></FeatureIconContainer>
                <FeatureText>
                  <FeatureDescription><FeatureHeading>Lack of access to</FeatureHeading> Point-Of-Sale technology and inventory management tools</FeatureDescription>
                </FeatureText>
            </Features>
            <Features>
                <FeatureIconContainer><img alt="unbanked" src={main_feature2}></img></FeatureIconContainer>
                <FeatureText>
                  <FeatureDescription>Unbanked farmers, vendors, and merchants have <FeatureHeading>no way to track digital payments</FeatureHeading></FeatureDescription>
                </FeatureText>
            </Features>
            <Features>
                <FeatureIconContainer><img alt="receipt" src={main_feature3}></img></FeatureIconContainer>
                <FeatureText>
                  <FeatureDescription>Use of <FeatureHeading>paper receipts</FeatureHeading> to track their sales, all while doing math <FeatureHeading>on their smartphone</FeatureHeading></FeatureDescription>
                </FeatureText>
            </Features>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
