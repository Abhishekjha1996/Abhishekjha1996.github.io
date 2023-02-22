import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Proj from './Project/Project'
import Skill from './Skill/Skill'
import Github from './Stats/Github'

export const HomePage = () => {
  return (
    <div>
        <Home />
        <About />
        <Skill />
        <Proj />
        <Github />
        <Contact />
    </div>
  )
}
