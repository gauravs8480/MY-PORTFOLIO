import React from 'react'
import "./projectlist.css"
import Project from "../project/Project"
import { projects } from '../../data'

export const ProjectList = () => {
  return (
    <div className='pl'>

<div className="pl-texts">


<h1 className="pl-title">Create & inspire</h1>
        <p className="pl-desc">
          Here are some of my project that i have made during this learning journey of web development 
        </p>
</div>

<div className="pl-list">

{projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}



</div>

    </div>
  )
}

