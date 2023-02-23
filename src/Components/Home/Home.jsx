import Typewriter from 'typewriter-effect'
import React from "react";
import {BiDownload} from 'react-icons/bi'
//import ReactDOM from 'react-dom/client';
import "./Home.css";
import pdf from "./Abhishek_Jha_Resume.pdf"


const Home=()=>{
  return (

    <div id="home">

      <img src="https://img.freepik.com/free-vector/web-development-concept-website-optimization-web-page-interface-design-coding-testing-site-internet-modern-technology-idea-isolated-flat-vector-illustration_613284-2551.jpg?w=740&t=st=1676631067~exp=1676631667~hmac=4ddf62e2a6f794ecbee71bd4842850b007dfca2da5b9a8fe93248537970da49a" alt="pic" />
      <div className="name">
        <h1 className='text-color'>Hi there </h1>
		    <h1 className='text-color'>I am Abhishek Jha</h1>
          <h1>
              <Typewriter
                className='auto-type'
                options={{
                  strings: [
                      "A Full Stack Web Developer.",
                      "A Problem Solver.",
                  ],
                   autoStart: true,
                  loop: true,
                  deleteSpeed: 80,
                }}
              />
          </h1>
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          download
        >
          <button id="resume-button-2" className='portButton'>Resume<BiDownload className="download"/></button>
        </a>
      </div>
      <div>
        <img src={'https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/200.webp?cid=ecf05e47o4hit66iql0yicpmif5vn4v3yto0vz6rss3686bw&rid=200.webp&ct=g'} alt="abhi" />
      </div>
    </div>
  );
}
export default Home;

