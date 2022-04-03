import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import banner from "images/banner.png";
import banner2 from "images/banner2.png";
import banner3 from "images/banner3.png";

export default function App() {
const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>DeFi cross-border payment <HighlightedText>Fresa Wallet [POS]</HighlightedText></>}
        description="Point-Of-Sale QR wallet for unbanked food vendors and farmers"
        imageSrc={banner}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Get it now"
        watchVideoButtonText="Video demo"
      />
      <MainFeature
        subheading={<Subheading>This PROBLEM includes food vendors and smallholder farmers.</Subheading>}
        heading={
          <>
            1.7 BILLION GLOBAL CITIZENS ARE UNBANKED 
            <wbr /> <HighlightedText>UNBANKED.</HighlightedText>
          </>
        }
        description={
          <Description>
           Without a bank account, vendors have no way to transact online and a limited ability to interact in the e-commerce economy.
            <br />
            <br />
            Point-Of-Sale technology with inventory & finance management tools are not available to un/underbanked vendors.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={banner2}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <Features
        heading={
          <>
            Our <HighlightedText>solution</HighlightedText> empowers every mobile phone.
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Food access",
            description: "Connection and access to community food supply at discounted rate",
            url: "https://www.canva.com/design/DAE77VxKVtc/view"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Point-Of-Sale",
            description: "First fully Decentralized mobile phone [POS]system ensuring reliability, transparency & traceability.",
            url: "https://www.canva.com/design/DAE77VxKVtc/view"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Send, Save and Spend.",
            description: "Full control of finances with  low remittance and transaction fees as well as micro lending options ",
            url: "https://www.canva.com/design/DAE77VxKVtc/view"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "<1cent",
            value: "Transaction fee",
          },
          {
            key: "Free",
            value: "SKU/UPC features"
          }
        ]}
        primaryButtonText="Read more"
        primaryButtonUrl="https://www.canva.com/design/DAE77VxKVtc/view"
        imageInsideDiv={false}
        imageSrc={banner3}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Fresa Wallet.</HighlightedTextInverse></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
