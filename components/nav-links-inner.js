import React from "react";
import Link from "next/link";
import SubNavToggler from "./sub-nav-toggler";

const NavLinksInner = () => {
  return (
    <ul className="one-page-scroll-menu navigation-box">
      <li>
        <Link href="/#banner">
          <a>
            Home
            <SubNavToggler />
          </a>
        </Link>

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
        <Link href="/#features">
          <a>Features</a>
        </Link>
      </li>
      {/* <li>
        <Link href="/#pricing">
          <a>Pricing</a>
        </Link>
      </li>
      <li>
        <Link href="/#testimonials">
          <a>Testimonials</a>
        </Link>
      </li> */}
      <li>
        <Link href="/blog">
          <a>
            Blog
            <SubNavToggler />
          </a>
        </Link>

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

export default NavLinksInner;
