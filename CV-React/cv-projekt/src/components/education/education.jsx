import React from 'react'
import './education.css'
import './card.jsx'
import Card from './card.jsx'

const education = () => {
  return (
    <section id="education">
      <h5>What I Leared</h5>
      <h2>Education and Work</h2>

      <div className="container education__container">
        <Card title={"PMF Split"} content={"Master's Degree: Mathematics and Computer Science Student"}/>
        <Card title={"FEG"} content={"Software Developer Internship: Java SpringBoot (2021.)"}/>
        <Card title={"Quizlet"} content={"Solving different mathematical problems step by step (2022.)"}/>
      </div>

    </section>
  )
}

export default education