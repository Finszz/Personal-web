"use client";
import Button from "@/component/buton";
import React from 'react';
import AboutPage from '@/aboutme/aboutme';
import ContactSection from "@/component/contact";
import Link from "next/link";
import Testimoni from "@/component/testimoni";


export default function Home() {
  return (
    <div className="relative">
      <nav id="navbar" className="fixed z-2 flex justify-between">
        <img src="Logo Nata.png" alt="Logo"className="w-40 max-md:w-25 max-md pl-0" />
        <ul id="nav-menu" className="">
          <li><Link href="#page">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#testimoni">Testimonial</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          
        </ul>
      </nav>
      <div className="grid md:grid-cols-2" id="belakang">
        <div className="bg-gray-200">
          <div className="mx-20">
            <p className="font-bold pt-15 pl-10 text-8xl max-lg:text-7xl md:pt-20 md:pl-15 font-serif justify-center">I&apos;m Akbar, as a Web Developer</p>
            <div className="flex items-center gap-7 pl-10 pt-6 md:pl-15 w-30">
              <Button title="My CV"></Button>
              <Button title="LinkedIn"></Button>
            </div>
          </div>
        </div>
        <div className="justify-between bg-gray-200 flex" id="gambar">
          <img src="tanpaBackground.png" className="w-screen max-md:hidden"></img>

        </div>
      </div>

    <div>
      <AboutPage />
    </div>

    <div>
      <Testimoni />  
    </div>

    <div>
      
      <ContactSection />
     
    </div>
    </div>


  )
};