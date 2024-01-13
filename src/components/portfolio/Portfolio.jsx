import React from 'react'
import IMG1 from '../../assets/p1.png'
import IMG2 from '../../assets/p2.jpg'
import IMG3 from '../../assets/p3.jpg'
import IMG4 from '../../assets/p4.jpg'
import IMG5 from '../../assets/p5.png'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Interview with Dr Sudha Acharya",
    demo: "https://www.youtube.com/watch?v=Q-NHC2SRiyM"
  },
  {
    id: 2,
    image: IMG2,
    title: "Video Review for 7th Heaven",
    demo: "https://www.instagram.com/reel/CjKV1AhgVxu/?igshid=NjcyZGVjMzk%3D"
  },
  {
    id: 3,
    image: IMG3,
    title: "Field Reporting",
    demo: "https://www.instagram.com/reel/ClI7IbCAKob/?igshid=OGQ2MjdiOTE%3D"
  },
  {
    id: 4,
    image: IMG4,
    title: "Event Posts for JBG",
    demo: "https://www.behance.net/gallery/128337727/sports-event-post"
  },
  {
    id: 5,
    image: IMG5,
    title: "Interview with Kalamjeet Sehrawat",
    demo: "https://www.youtube.com/watch?v=EPAWq4Y_uhc"
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image, title, demo}) => {
            return (
              <article key={id} className='portfolio__item zoom'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={demo} className='btn btn-primary' target='_blank'>Watch now</a>
                </div>
              </article>
            )
          })
        }
        


        
      </div>

    </section>
  )
}

export default Portfolio