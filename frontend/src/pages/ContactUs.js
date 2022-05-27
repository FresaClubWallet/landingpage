import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";

import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Oxnard",
            description: (
              <>
                <Address>
                  <AddressLine>2660 Peninsula Rd</AddressLine>
                  <AddressLine>California, US 93035</AddressLine>
                </Address>
                <Email>hello@fresaclub.com</Email>
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
