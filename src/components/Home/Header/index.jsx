import React from 'react';
import './style.css'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'


const Header = () => (
  <header className='home-header'>
    <h2>Welcome 🙋‍♂️</h2>
    <h1>
      <span>“</span> TWR - The Weeky Roundup <span>”</span>
    </h1>
    <p>
      Discover, Engage, Elevate!  Your one-stop destination <br />  for captivating articles, vibrant discussions,  <br /> and limitless
      inspiration.
    </p>

    <div className="social-links">
      <div className="social-icons">
        <a href="https://www.twitter.com/theweeklyroundu" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter /></a>
        <a href="https://www.linkedin.com/newsletters/the-weekly-roundup-7057605958335676416" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
        <a href="https://www.instagram.com/theweeklyroundup" target='_blank' rel='noreferrer noopener'><AiFillInstagram /></a>
      </div>
    </div>

  </header>
);

export default Header;
