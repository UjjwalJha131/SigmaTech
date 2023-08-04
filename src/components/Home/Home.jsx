import React from 'react'
import {
  AiFillGoogleCircle, 
  AiFillAmazonCircle, 
  AiFillYoutube, 
  AiFillInstagram
} from "react-icons/ai"

import "./Home.css"
import vg from "../Assets/2.webp"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main className='home-text-container'>
        <h1>SigmaTech</h1>
        <p>One Step Solution For All Of Your Problems</p>
      </main>
    </div>

    <div className='home2'>
      <img src={vg} alt="graphics" />
      <div>
        <p>We are your one and only solution to all of your tech problems yoy face everyday. We are a leading tech company with aim to increase problem solving skills in childrens</p>
      </div>
    </div>

    <div className='home3' id='about'>
      <div>
        <h1>Who We Are?</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, eligendi praesentium? Minima fuga eos possimus cum consequatur illum explicabo ad ullam alias, voluptates nemo pariatur, unde dicta quae dolor necessitatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, eligendi praesentium? Minima fuga eos possimus cum consequatur illum explicabo ad ullam alias, voluptates nemo pariatur, unde dicta quae dolor necessitatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article className='icons'>

          <div style={{
            animationDelay: "0.3s"
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>

          <div style={{
            animationDelay: "0.5s"
          }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>

          <div style={{
            animationDelay: "0.7s"
          }}>
            <AiFillYoutube />
            <p>YouTube</p>
          </div>

          <div style={{
            animationDelay: "0.9s"
          }}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>

        </article>
      </div>
    </div>
    </>
  )
}

export default Home