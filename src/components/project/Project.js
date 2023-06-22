import React from 'react'
import "./project.css"
 export const  Project=({img,link,title}) => {
  return (
   
    <div className='p'>
<div className="p-browser">
<a href={link} target="_blank"  rel='noreferrer'><i class="fa fa-github"></i>  work on Github {title} </a>
<div className="p-circle"></div>
<div className="p-circle"></div>
<div className="p-circle"></div>
</div>
<a href={link} target="_blank" rel='noreferrer'>

<img src={img} alt="" className='p-img'/>

</a>
    </div>
  )
}

export default Project
