import React from 'react'
import './Footer.css';
import logo from "./image.png"
import image from "./Footer image.jpg"

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='foot'>
                <div className='logo'>
                    <img src={image} className="footer-video" alt="image" />
                </div>
                <div className='footer-coll'>
                <h1>About Us</h1>
                <p> Digi-Vertex is a one-stop Destination fot All your Marketing needs Providing you with over a Dozen Services, like Digital Marketing, and Many More</p>
                </div>
                <div className='footer-col'>
                    <ul className='box'>
                        <li className='link-box'>SERVICES</li>
                        <li><a href='#'>SEO Optimization</a></li>
                        <li><a href='#'>Social Media marketing </a></li>
                        <li><a href='#'>Content Marketing</a></li>
                        <li><a href='#'>Web Developer</a></li>
                        <li><a href='#'>Creative Design</a></li>
                        <li><a href='#'>Adversting</a></li>
                        <li><a href='#'>Ecommerce Solution</a></li>
                        <li><a href='#'>Graphics Design</a></li>
                    </ul>
                </div>
                    <div className='form'>
                    <div className='logo'>
                    <img src={logo} className="logo-image" alt="image" />
                </div>
                        <h2>SUBSCRIPTION</h2>
                        <p>Whether you're on the east coast or the west.</p>
                        <form>
                            <input type="text" className="fill" placeholder="Your Email Address" />
                        </form>
                        <button className='btn'>SUBMIT</button>
                    </div>
            </div>
            <div className='bottom-details'>
                    <div className="copyright">
                        <h1>Copyright by<span> @digi-Vertex</span> Right Reserved</h1>
                        <div className='bottom-col'>
                          <a href='#'>PRIVACY</a>
                          <a href='#'>TERMS & CONDITIONS</a>
                          <a href='#'>BLOG</a>
                        </div>
                    </div>
                    </div>
        </div>
</div>
    </div>
  )
}

export default Footer