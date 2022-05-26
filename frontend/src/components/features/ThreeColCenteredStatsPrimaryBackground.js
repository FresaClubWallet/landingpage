import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import {  ContentWithPaddingXl } from "components/misc/Layouts";
import styled from "styled-components";
import feature2 from "../../images/feature2.webp";
import { motion } from "framer-motion";
import LazyLoad from 'react-lazyload'

const HighlightedText = tw.span`text-black`;

const Container = styled(motion.div)`
  ${props => css`background-image: url("${feature2}");`}
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
`;
const HeadingContainer = tw.div`md:p-24 lg:p-32`;
const Heading = tw(SectionHeading)`sm:text-xl md:text-2xl lg:text-3xl text-white `;

export default () => {
  return (
    <LazyLoad height={200} once >
      <Container>
        <ContentWithPaddingXl>
          <HeadingContainer>
            <Heading>We’re making everyone a vendor with a </Heading>
            <Heading><HighlightedText>decentralized</HighlightedText> point of sale marketplace.</Heading>
          </HeadingContainer>
        </ContentWithPaddingXl>
      </Container>
    </LazyLoad>
  );
};
