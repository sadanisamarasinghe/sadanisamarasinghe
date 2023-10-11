import Twitter from "../resources/twitter-154-svgrepo-com.png";
import Fb from "../resources/facebook-176-svgrepo-com.png";
import Li from "../resources/linkedin-svgrepo-com.png";
import Inster from "../resources/instagram-svgrepo-com.png";
import Logo from "../resources/logo-xing-svgrepo-com.svg";

import React from 'react';
import { Link } from 'react-router-dom';


function navbar() {
    return (
      <div className="flex justify-between text-white bg-black">
        <div className="my-3 justify-items-center">
            <img src={Logo} className="w-auto h-9"></img>
        </div>

        <div >
            <ul className="flex justify-center my-3 align-middle">
                <li className="mx-2"><a href="/">Home</a></li>
                <li className="mx-2"><a href="/about">About</a></li>
                <li className="mx-2"><a href="/book">Book</a></li>
                <li className="mx-2"><a href="/portfolio">Portfolio</a></li>
                <li className="mx-2"><a href="/blog">Blog</a></li>
                <li className="mx-2"><a href="/contact">Contact</a></li>

            </ul>
        </div>

        <div className="">
        <ul className="flex justify-center my-3 align-middle" >
                <li className="mx-2"><img src={Twitter} className="w-auto h-6"></img> </li>
                <li className="mx-2"> <img src={Li} className="w-auto h-6"></img> </li>
                <li className="mx-2"><img src={Fb} className="w-auto h-6"></img></li>
                <li className="mx-2"><img src={Inster} className="w-auto h-6"></img></li>

            </ul>
        </div>
      </div>
    );
  }

  

  export default navbar;
  