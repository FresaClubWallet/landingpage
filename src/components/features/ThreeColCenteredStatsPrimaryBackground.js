import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";
import styled from "styled-components";
import feature2 from "../../images/feature2.png";
import { motion } from "framer-motion";

const HighlightedText = tw.span`text-black`;

const Container = styled(motion.div)`
  ${props => css`background-image: url("${feature2}");`}
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
`;
const HeadingContainer = tw.div`p-32`;
const Heading = tw(SectionHeading)`sm:text-xl md:text-2xl lg:text-3xl text-white `;

export default ({
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          <Heading>We’re making everyone a vendor with a </Heading>
          <Heading><HighlightedText>decentralized</HighlightedText> point of sale marketplace.</Heading>
        </HeadingContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
