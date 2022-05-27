import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const Container = tw.div`bg-third-100 -mx-8`;
const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)`text-primary-500`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-12 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background: url("${props.imageSrc}") no-repeat center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;`}
  ${tw`w-40 h-40 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  }
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Meet These Fine Folks.",
  cards = [
    {
      imageSrc: "team-ramiro.webp",
      position: "Founder - CEO",
      name: "Ramiro Arevalo Jr.",
      links: [
        {
          url: "https://twitter.com/FresaClub",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/ramirojarevalo/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/fresaClubWallet/",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "team-mat.webp",
      position: "CTO - Sr.Dev/Dapp",
      name: "Mat Waller",
      links: [
        {
          url: "https://twitter.com/MathewWaller8",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/indieblocks/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/MatWaller",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "team-anh.webp",
      position: "Full Stack Dev",
      name: "Anh Nguyen",
      links: [
        {
          url: "https://twitter.com/DeFasToAn1",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/anh-nguyen-684a9015a/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/anhfactor",
          icon: GithubIcon,
        },
      ],
    }
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {heading && <Heading>Our team</Heading> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url} target="_blank" rel="noreferrer">
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
