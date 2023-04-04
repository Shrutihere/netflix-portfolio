import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/shruti-here/"><BsLinkedin /></a>
        <a href="https://github.com/Shrutihere/"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials