import React from 'react'
import './experience.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'; 
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.jpg'
import IMG3 from '../../assets/IMG3.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      {/* <div className="container experience__container" style={{ display: 'block', width: 1200, padding: 30 }}>  */}
      <div className="container experience__container" > 
      <Carousel className='my_carousel'> 
        <Carousel.Item interval={1500}> 
        <div className="experience__slide">
          <div className="experience_image">
            <img  src={IMG1} alt='' />
          </div>
          
          <div className="experience__content">
          <h3>Sanmarg Daily</h3>
            <article className='experience__details'>
              {/* < BsPatchCheckFill className='experience__details-icon'/> */}
              <div>
              <h4>Intership</h4>
              <small className='text-light'>December 2020 - January 2021</small>
              </div>
            </article>

          </div>

        </div>
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
        <div className="experience__slide">
        <div className="experience_image">
            <img  src={IMG2} alt='' />
          </div>

          <div className="experience__content">
          <h3>Jai Balaji Group India</h3>

            <article className='experience__details'>
              <div>
              <h4>Branding Community Officer</h4>
              <small className='text-light'>July 2021 - August 2022</small>
              </div>
            </article>

            </div>

        </div> 
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
        <div className="experience__slide">
        <div className="experience_image">
            <img  src={IMG3} alt='' />
          </div>
          
          <div className="experience__content">
          <h3>CitySpidey</h3>
            <article className='experience__details'>
              {/* < BsPatchCheckFill className='experience__details-icon'/> */}
              <div>
              <h4>Reporter</h4>
              <small className='text-light'>July 2022 - July 2023 </small>
              </div>
            </article>

            </div>

        </div> 
        </Carousel.Item> 
      </Carousel> 
    </div> 

    </section>
  )
}

export default Experience