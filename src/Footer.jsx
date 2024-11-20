import React from 'react'
import './Footer.css'
import logo from './assets/ctflogo.webp'
import kkr from './assets/krk2024.webp'
import { NavLink, Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = ({ isMenuOpen }) => {
  return (
    <div className={`${isMenuOpen ? "hidden" : ""} h-screen  flex justify-center items-center`}>
      <div className='  border-black grid grid-cols-10 grid-rows-5 rounded-3xl  h-96 start'>
          <div className='col-span-3 row-span-5 eachBox  border-2  flex justify-center items-center'>
            <div className=' askUs flex flex-col gap-y-4'>
              
              <img src={logo} alt="description" className='ctflogo'/>
             
              <h1 className='text-xl ask'>Ask Us</h1>
              <div>
                <form >
                <input type="text" placeholder="Your Email" />
                <input type="text" placeholder="Queries" />
                </form>
      
              </div> 
              <button className='send rounded-md '>Send</button>
            </div>
          </div>
          <div className='col-span-3 row-span-2 eachBox border-r-2 border-t-2   p-16 flex justify-center items-center'>
            <img src={kkr} alt="Image here" />
            </div>
          <div className='getInCover col-span-4 row-span-3  eachBox rounded-tr-lg border-r-2 border-t-2 border-b-2  flex justify-start items-start flex-col gap-3'>
            <div className='get' >Get in Touch</div>
            <div className='mail flex flex-col gap-2'>
              <NavLink to="hr@cegtechforum.in" >khacks@cegtechforum.in</NavLink>
              <NavLink to="hr@cegtechforum.in" >hr@cegtechforum.in</NavLink>
            </div>
            <div className='flex gap-5 iconCont mt-4'>
              <div className='discord rounded-full'><FaDiscord /></div>
              <div className='discord rounded-full'><FaInstagram  /></div>
              <div className='discord rounded-full'><FaFacebook /></div>
              <div className='discord rounded-full'><FaXTwitter /></div>
              <div className='discord rounded-full'><FaLinkedin /></div>
            </div>
          </div>
          <div className='col-span-3   row-span-3 eachBox quickCover border-b-2 border-t-2 border-r-2   flex justify-start items-start flex-col '>
            <div className='quick'>Quick Links</div>
            <div className='linksOuter flex gap-10'>
              <div className='flex gap-1 flex-col'>
                <div><NavLink to="sponsors">Sponsors</NavLink></div>
                <div><NavLink to="prizes">Prizes</NavLink></div>
                <div><NavLink to="themes">Themes</NavLink></div>
                <div><NavLink to="about">About</NavLink></div>
              </div>
              <div className='flex gap-1 flex-col'>
                <div><NavLink to="faqs">FAQs</NavLink></div>
                <div><NavLink to="timeline">Timeline</NavLink></div>
                <div><NavLink to="callS">Call for Sponsors</NavLink></div>
                <div><NavLink to="callM">Call for Mentors</NavLink></div>
              </div>
            </div>
          </div>
          <div className='contactCover col-span-4 row-span-2 eachBox border-b-2 border-r-2 rounded-br-lg  flex flex-col justify-start items-start gap-4'>
            <div className='contactIn'>Contact Us</div>
            <div className='numbersCont flex gap-6'>
              <div className='flex flex-col gap-2'>
                <div className='numbers'>Balaji A</div>
                <div className='phoneNum'>+911234351654</div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='numbers'>Balamurugan K</div>
                <div className='phoneNum'>+911234561234</div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='numbers'>Velmurugan J</div>
                <div className='phoneNum'>+911234512345</div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='numbers'>Muralidharan V</div>
                <div className='phoneNum'>+911234512345</div>
              </div>
            </div>
          </div>
          
      </div>

    </div>
  )
}
export default Footer;