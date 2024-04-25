import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Anuj Kumar</h4>
      <div className='footerLinks'>
        <a href="https://github.com/0xanujkumar"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/0xanujkumar"><FaLinkedin/></a>
        <a href='mailTo:anujkumar992862@gmail.com'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer
