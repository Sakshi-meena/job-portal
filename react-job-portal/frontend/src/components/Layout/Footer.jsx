import React, { useContext } from 'react';
import { Context } from "../../main";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiMailFill } from "react-icons/ri";

function Footer() {
  const { isAuthorized } = useContext(Context);

  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}> 
      <div>&copy; All Rights Reserved by Sakshi.</div>
      <div>
        <a href="mailto:sakshimeena7733@gmail.com" title="Email"> 
          <RiMailFill />
        </a>
        <a href="https://github.com/Sakshi-meena" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sakshimeena/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/u/Sakshimeena7733/" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
