import React from 'react'
import './about.css'
import img5 from '../../assets/img5.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { BsPatchCheck } from 'react-icons/bs'


const About = () => {

  const [placeholder, setPlaceholder] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleShow1 = () => {
    setShow1(!show1);
  };

  const toggleShow2 = () => {
    setShow2(!show2);
  };

  const
    string = "I hold a strong conviction in the power of impactful content and its ability to leave a lasting impression. Through my experience as a content strategist and creator, I have developed a proficiency for crafting compelling and emotionally resonant content that deeply connects with audiences. During my two years in the industry, I've acquired valuable insights into comprehending my target audience and adeptly tailoring content to engage and captivate them.",
    index = React.useRef(0);

  React.useEffect(() => {
    function tick() {
      setPlaceholder(prev => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length) {
      let addChar = setInterval(tick, 50);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <ul className='about__content'>

          <li className='about__cards' onClick={toggleShow}>
            Experience
          </li>
          {show && <div className='card__details about__experience'>
            <div className='exp__img'><img src={img5} alt="" /></div>
            <div>
            I hold a strong conviction in the power of impactful content and its ability to leave a lasting impression. Through my experience as a content strategist and creator, I have developed a proficiency for crafting compelling and emotionally resonant content that deeply connects with audiences. During my two years in the industry, I've acquired valuable insights into comprehending my target audience and adeptly tailoring content to engage and captivate them.          </div>
            </div>}

          <li className='about__cards' onClick={toggleShow1}>Skills</li>
          {show1 && <div className='card__details about__skills'>
            <div className='left'>
            <li><BsPatchCheck/>   Content Development</li>
            <li><BsPatchCheck/>   Copywriting</li>
            <li><BsPatchCheck/>   Social Media Communications</li>
            </div>
            
            <div className='right'>
            <li><BsPatchCheck/>   Public Relations</li>
            <li><BsPatchCheck/>   Web Content Writing</li>
            <li><BsPatchCheck/>   Team Management</li>
            </div>
            
            <div className='left'>
            <li><BsPatchCheck/>   Branding Strategy</li>
            <li><BsPatchCheck/>   Search Engine Optimization</li>
            <li><BsPatchCheck/>   Reporting</li>
            </div>

            </div>}

          <li className='about__cards' onClick={toggleShow2}>Projects</li>
          {show2 && <div className='card__details'>
            
          <div className='project__cards' >
            <li className='card__details'><FaAward/>   Created 100+ diverse graphic designs for brands and corporate clients, highlighting versatility and creativity.</li>
            <li className='card__details'><FiUsers/>   Led a team of four in developing and executing comprehensive brand strategies, ensuring consistency and impactful marketing campaigns.</li>
            <li className='card__details'><VscFolderLibrary/>   Managed social media for three distinct brands, curating content for audience resonance and enhanced engagement.</li>
            </div>

            </div>}



        </ul>

{/*         
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0+ worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>12+ completed</small>
            </article>

          </div>

          <p>
            {placeholder}
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div> */}


      </div>
    </section>
  )
}

export default About