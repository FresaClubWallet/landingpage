import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import contactUsIllustrationSrc from "images/contactUs.webp";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-8 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`py-8 text-center md:text-left`;

const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col`
const Input = tw.input`mt-6 border rounded-xl first:mt-0 py-3 focus:outline-none px-4 font-medium transition duration-300 hocus:border-fourth-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw.button`w-full sm:w-40 mt-6 py-2 bg-primary-500 text-white rounded-md font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

export default ({
  subheading = "Contact Us",
  heading = <><span tw="text-primary-500">Contact Us</span><wbr/></>,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={contactUsIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Form action={formAction} method={formMethod}>
              <Input type="text" name="fullname" placeholder="Full name" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="text" name="subject" placeholder="Subject" />
              <Textarea name="message" placeholder="Message" />
            </Form>
            <SubmitButton type="submit">{submitButtonText}</SubmitButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
