import React from 'react'
import "./about.css"
import Award from "../../img/award.png"
export const About=()=> {
  return (
    <div className='a' >

<div className="a-left">


<div className="a-card bg"></div>
<div className="a-card">
<img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="a-img" />

</div>







</div>
<div className="a-right">



<h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        currently studying in Manipal university, jaipur  with a degree in Computer Science, learning Mern stack  web development. Acquired a solid foundation in programming concepts, algorithms, and data structures. Completed coursework in oops programming ,  gaining a comprehensive understanding of building user-centric and scalable web applications.
        </p>



{/* <div className="a-award">
    <img src={Award} alt="" className="a-award-img" />

    <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
</div> */}

</div>



    </div>
  )
}

export default About