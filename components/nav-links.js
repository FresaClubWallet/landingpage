import React from "react";
import Link from "next/link";
import SubNavToggler from "./sub-nav-toggler";
import { Link as ScrollLink } from "react-scroll";

const NavLinks = () => {
  return (
    <ul className="one-page-scroll-menu navigation-box">
      <li>
        <ScrollLink
          activeClass="current"
          to="banner"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
          <SubNavToggler />
        </ScrollLink>

        <ul className="sub-menu">
          <li>
            <Link href="/">
              <a>Home One</a>
            </Link>
          </li>
          <li>
            <Link href="/index-2">
              <a>Home Two</a>
            </Link>
          </li>
          {/* <li>
            <a href="index.html">
              Header Versions
              <SubNavToggler />
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="/">
                  <a>Header One</a>
                </Link>
              </li>
              <li>
                <Link href="/index-2">
                  <a>Header Two</a>
                </Link>
              </li>
            </ul>
          </li> */}
        </ul>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Features
        </ScrollLink>
      </li>
      {/* <li>
        <ScrollLink
          activeClass="current"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Pricing
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Testimonials
        </ScrollLink>
      </li> */}
      <li>
        <ScrollLink
          activeClass="current"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Blog
          <SubNavToggler />
        </ScrollLink>

        <ul className="sub-menu">
          <li>
            <Link href="/blog">
              <a>Blog Page</a>
            </Link>
          </li>
          <li>
            <Link href="/blog-details">
              <a>Blog Details</a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
