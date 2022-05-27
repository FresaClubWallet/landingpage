import React, { useEffect } from 'react';
import tw from "twin.macro";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import why1 from "images/why1.png";
import why2 from "images/why2.png";
import why3 from "images/why3.webp";
import banner from "images/banner.webp";
import banner2 from "images/banner2.webp";
import banner3 from "images/banner3.webp";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComponentRenderer from "ComponentRenderer.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import LazyLoad from 'react-lazyload'

export default function App() {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;
  const HighlightedText = tw.span`text-primary-500`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    }

    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_SITE_KEY}`, function () {
      console.log("Script loaded!");
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/:type/:name">
          <ComponentRenderer />
        </Route>
    <Route path="/">
      <StyledDiv>
        <Hero 
          heading={<>DeFi Point-of-Sale remittance wallet.</>}
          highlight="Fresa Wallet"
          description="Fresa is a decentralized marketplace bringing DeFI Point-Of-Sale tools to the marginalized."
          imageSrc={banner}
          imageCss={imageCss}
          imageDecoratorBlob={true}
          primaryButtonText="Get it now"
          watchVideoButtonText="Video demo"
        />
        <LazyLoad height={200} once ><>
        <MainFeature
          subheading={<Subheading>This PROBLEM includes food vendors and smallholder farmers.</Subheading>}
          heading={
            <>
              1.7 BILLION GLOBAL CITIZENS ARE <HighlightedText>UNBANKED.</HighlightedText>
            </>
          }
          description={
            <Description>
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
        <FeatureStats/>
        <MainFeature2
          primaryButtonUrl="https://www.figma.com/proto/OP8fckKtfDJ0MWtc5aAHxz/Fresa?node-id=352%3A28&scaling=scale-down&page-id=88%3A2&starting-point-node-id=352%3A2"
          imageInsideDiv={false}
          imageSrc={banner3}
          imageCss={Object.assign(tw`bg-cover`, imageCss)}
          imageContainerCss={tw`md:w-1/2 h-auto`}
          imageDecoratorBlob={true}
          imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
          textOnLeft={true}
        />
        <Features
          heading={
            <>
              <HighlightedText>Why choose Fresa?</HighlightedText>
            </>
          }
          cards={[
            {
              imageSrc: why1,
              title: "Cross Border Remittance",
              description: "Merchants and consumers don't lose money on foreign exchange transactions as Fresa utilises the power of stablecoins combined with the speed of the Celo network.",
              url: "https://www.figma.com/proto/OP8fckKtfDJ0MWtc5aAHxz/Fresa?node-id=352%3A1005&scaling=scale-down&page-id=88%3A2&starting-point-node-id=352%3A2"
            },
            {
              imageSrc: why2,
              title: "Mobile native wallet",
              description: "Merchants and customers have their Celo stablecoin digital currency stored on a convenient mobile native wallet authenticated by a cell phone number.",
              url: "https://www.figma.com/proto/OP8fckKtfDJ0MWtc5aAHxz/Fresa?node-id=352%3A1005&scaling=scale-down&page-id=88%3A2&starting-point-node-id=352%3A2"
            },
            {
              imageSrc: why3,
              title: "Foodwaste prevention",
              description: "Merchants push specific items to wallets to save perishable items from landfills.",
              url: "https://www.figma.com/proto/OP8fckKtfDJ0MWtc5aAHxz/Fresa?node-id=352%3A1005&scaling=scale-down&page-id=88%3A2&starting-point-node-id=352%3A2"
            }
          ]}

          imageContainerCss={tw`p-2!`}
          imageCss={tw`w-20! h-20!`}
        />
        <TeamCardGrid />
        <DownloadApp
          text={<>Now you can buy local foods from community
            vendors who are unbanked anywhere in the world
            with just a click</>}
        />
        <SubscribeNewsLetterForm />
        <ContactUsForm/>
        <Footer />
        </></LazyLoad>
      </StyledDiv>
      </Route>
      </Switch>
    </Router>
  );
}
