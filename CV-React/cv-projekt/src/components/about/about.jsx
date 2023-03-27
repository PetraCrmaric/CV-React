import React from 'react'
import './about.css' 
import ME from "../../assets/me.jpg"

const about = () => {
  return (
    <section id="about">
      <h5> Get To Know </h5>
      <h2> About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <h5 className="h5-about">Date of Birth</h5>
              <p><small>19.01.2000.</small></p>
            </article>
            <article className="about_card">
              <h5 className="h5-about">Address</h5>
              <p><small>Ante Starčevića 203, Solin</small></p>
            </article>
            <article className="about_card">
              <h5 className="h5-about">Hobbies</h5>
              <p><small>Classical guitar</small></p>
            </article>
          </div>
          <p className='about_text'>           
            I am currently pursuing a masters degree in Mathematics and Computer Science at the
            Faculty of Science in Split.
            I am motivated and enthusiastic about learning new things and I love the fact that I could make an impact on people via my code, whatever tool I could build
            to help them solve their daily life sounds super exciting to me.
          </p>
        </div>
      </div>
    </section>
  )
}

export default about