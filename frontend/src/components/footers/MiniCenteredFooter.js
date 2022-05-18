import React from "react";
import tw from "twin.macro";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/favicon.png";


const Container = tw(ContainerBase)`bg-third-500 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-16`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider text-black`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row text-black`
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-300 hocus:border-primary-300 pb-1 transition duration-300 mt-2 mx-4`;


export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>Fresa</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="/page/PrivacyPolicy">Privacy Policy</Link>
            <Link href="/page/TermsOfService">Terms & Condition</Link>
            <Link href="/page/ContactUs">Contact Us</Link>
          </LinksContainer>
        </Row>
      </Content>
    </Container>
  );
};
