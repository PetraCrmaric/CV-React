import React from 'react'
import './experience.css'
import './progressBar';
import ProgressBar from './progressBar';

const experience = () => {
  return (
    <section id="experience">
           
      <h5>What Skills I Have</h5>
      <h2> My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <h4>HTML </h4>
              <ProgressBar completed={80} />    
            </article>
            <article className="experience__details">
              <h4>CSS</h4>
              <ProgressBar completed={50} />
            </article>
            <article className="experience__details">
              <h4>JavaScript</h4>
              <ProgressBar completed={70} />
            </article>
            <article className="experience__details">
              <h4>React</h4>
              <ProgressBar completed={20} />
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <h4>Java SpringBoot</h4>
              <ProgressBar completed={60} />
            </article>
            <article className="experience__details">
              <h4>C#</h4>
              <ProgressBar completed={50} />
            </article>
            <article className="experience__details">
              <h4>Python</h4>
              <ProgressBar completed={70} />
            </article>
            <article className="experience__details">
              <h4>MongoDB</h4>
              <ProgressBar completed={70} />
            </article>
            <article className="experience__details">
              <h4>SQL</h4>
              <ProgressBar completed={70} />
            </article>
            <article className="experience__details">
              <h4>Node.js</h4>
              <ProgressBar completed={50} />
            </article>
          </div>
        </div>
      </div>
    </section>

  )
}

export default experience