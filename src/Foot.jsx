import React, { useEffect, useState } from "react";
import "./Foot.css";
import { HashLink } from "react-router-hash-link";
import Logo from "./assets/ctflogo.webp";
import KrkLogo from "./assets/krk2024.webp";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaDiscord,
} from "react-icons/fa6";

const Foot = ({ isMenuOpen }) => {
  const socialIcons = [
    <a
      href="#"
      target="_blank"
      aria-label="Join our Discord Server"
    >
      <FaDiscord />
    </a>,
    <a
      href="#"
      target="_blank"
      aria-label="Find more about us on Instagram"
    >
      <FaInstagram />
    </a>,
    <a
      href="#"
      target="_blank"
      aria-label="Find more about us on Facebook"
    >
      <FaFacebook />
    </a>,
    <a
      href="#"
      target="_blank"
      aria-label="Find more about us on Twitter"
    >
      <FaXTwitter />
    </a>,
    <a
      href="#"
      target="_blank"
      aria-label="Find more about us on LinkedIn"
    >
      <FaLinkedin />
    </a>,
  ];

  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    const url = window.location.href;
    setCurrentUrl(url);
  }, []);

  return (
    <footer
      className="mx-auto rounded-t-xl sm:rounded-t-2xl border-t-2 xl:border-l xl:border-r border-violet-200/20 bg-gradient-to-r from-violet-900/10 to-rose-800/10  backdrop-blur-md"
      id="contact"
    >
      <div className="footer_container">
        <div className="form_link_div">
          <div className="footer_form"> 
            <a href={"#"} target="_blank">
              <img src={Logo} alt="Ctf Tech Forum" />
            </a>
            <p className="text-teal-100">Ask Us</p>
            <form
              action="https://formsubmit.co/techops@cegtechforum.in"
              method="POST"
            >
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                autoComplete="email"
              />
              <textarea name="Query" placeholder="Queries" required />
              <input
                type="hidden"
                value="K! Hacks Site - Footer Query Response"
                name="Source"
              />
              <input
                type="hidden"
                name="_next"
                value={currentUrl + "?formsubmit=true"}
              />
              <input
                type="hidden"
                name="_subject"
                value="K! Hacks - Footer form - New Submission"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <button
                className="h-9 px-4 rounded-lg 
                bg-blue-800/20 hover:bg-violet-600/30 transition-colors duration-300 w-[90%] min-[450px]:max-w-fit font-medium tracking-wider hover:text-blue-300"
              >
                Send
              </button>
            </form>
          </div>
          <div className="footer_links">
            <a
              href={"#"}
              target="_blank"
              className="krklogo"
            >
              <img src={KrkLogo} alt="Kurukshetra 2024" />
            </a>
            <div className="q_links">
              <p className="text-teal-100">Quick Links</p>
              <div className="links_flex">
                <div className="links">
                  <HashLink smooth={true} to="/#sponsors">
                    Sponsors
                  </HashLink>
                  <HashLink smooth={true} to="/#prizes">
                    Prizes
                  </HashLink>
                  <HashLink smooth={true} to="/#themes">
                    Themes
                  </HashLink>
                  <HashLink smooth={true} to="/about">
                    About
                  </HashLink>
                </div>
                <div className="links">
                  <HashLink smooth={true} to="/#faqs">
                    FAQs
                  </HashLink>
                  <HashLink smooth={true} to="/#timeline">
                    Timeline
                  </HashLink>
                  <HashLink smooth={true} to="/call-sponsors">
                    Call for Sponsors
                  </HashLink>
                  <HashLink smooth={true} to="/call-mentors">
                    Call for Mentors
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_contact">
          <div className="fc_top">
            <p className="text-teal-100">Get in Touch</p>
            <a href="mailto:khacks@cegtechforum.in">khacks@cegtechforum.in</a>
            <a href="mailto:hr@cegtechforum.in">hr@cegtechforum.in</a>
          </div>
          <div className="mx-4 min-[550px]:mx-8 my-4 w-72 sm:w-[20rem] flex justify-between text-xl sm:text-2xl">
            {socialIcons.map((icon, index) => (
              <div
                className="w-10 sm:w-12 h-10 sm:h-12 cursor-pointer rounded-full border-2 flex justify-center items-center hover:border-violet-400/[0.5] hover:bg-blue-800 hover:text-black transition-all duration-200"
                key={index}
              >
                {icon}
              </div>
            ))}
          </div>
          <div className="contact_us">
            <p className="text-teal-100">Contact Us</p>
            <div
              className="flex flex-col sm:flex-row flex-wrap gap-6 xl:gap-12"
            >
              <div>
                <p>Balaji A</p>
                <a
                  className="underline decoration-teal-100 underline-offset-2 hover:text-blue-400 transition-all duration-100"
                  href="tel:+91 73057 46710"
                >
                  +91 73057 46710
                </a>
              </div>
              <div>
                <p>Balamurugan K</p>
                <a
                  className="underline decoration-teal-100 underline-offset-2 hover:text-blue-400 transition-all duration-100"
                  href="tel:+91 73395 84875"
                >
                  +91 73395 84875
                </a>
              </div>
              <div>
                <p>Velmurugan J</p>
                <a
                  className="underline decoration-teal-100 underline-offset-2 hover:text-blue-400 transition-all duration-100"
                  href="tel:+91 94427 83160"
                >
                  +91 94427 83160
                </a>
              </div>
              <div>
                <p>Muralidharan V</p>
                <a
                  className="underline decoration-teal-100 underline-offset-2 hover:text-blue-400 transition-all duration-100"
                  href="tel:+91 73586 75381"
                >
                  +91 73586 75381
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer_bottom border-t-2 border-violet-200/20 bg-gradient-to-b from-background/40 to-slate-950/40"
      >
        <a
          href={"#"}
          target="_blank"
          className="text-teal-100 copyrights"
        >
          ©2024 CEG Tech Forum
        </a>
      </div>
    </footer>
  );
};

export default Foot;
