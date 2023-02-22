import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import {SiChakraui} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
// import vella from '../../764x310_1.png';
// import fabbag from '../../Women_s-page---Reveal.png'
// import kind from '../../707-4819-m.png'
import Slider from "react-slick";
import ajio from "./ajiohome.jpg"
import IndiaToday from "./IndiaToday.jpg"
import Overstock from "./overstock.jpg"
import exploreup from "./exploreUp.jpg"

import("./Project.css");



export default function Proj(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <div id="project" className="proj">
      <h1 className="h14">My Recent Projects</h1>

      <img src="https://media.tenor.com/PykA8MgJn2wAAAAC/divider.gif" style = {{height:"3px" , width: "100%"}} alt="divider" />

      <div className="projCont">
      <div className="final">


          <div className="img">
            <img src={ajio} alt="ajio" />
          </div>


          <div>
            <h2 style={{fontSize:"20px"}}>Ajio clone</h2>
            <p>
            Ajio is an e-commerce website. Which is an online shopping website which deals in garments.
            AJIO, a fashion and lifestyle brand, is Reliance Retail's digital commerce initiative and is the ultimate fashion destination for styles that are handpicked.
            </p>


            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
               
              </div>
              <div>
                 <FaReact className='techfont'/> 
                 <p>React</p> 
              </div>
              <div>
                 <SiChakraui className='techfont'/> 
                 <p>Chakra UI</p> 
              </div>
             
              
            </div>
            <div className="buttons">
              <a
                href="https://ajioclone-abhishekjha1996.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/Abhishekjha1996/gentle-government-5205"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>


      <div className="final">


          <div>
            <h2 style={{fontSize:"20px"}}>Overstock clone</h2>
            <p>
            Overstock.com, Inc. is an American internet retailer selling primarily furniture headquartered in Midvale, Utah, near Salt Lake City. Businessman Patrick M.
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
               
              </div>
              <div>
                 <FaReact className='techfont'/> 
                 <p>React</p> 
              </div>
              <div>
                 <FaReact className='techfont'/> 
                 <p>Chakra UI</p> 
              </div>
              
            </div>
            <div className="buttons">
              <a
                href="https://candid-frangollo-88e2e5.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/Abhishekjha1996/needed-prose-9946"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>


          <div className="img">
            <img src={Overstock} alt="" />
          </div>


        </div>

         <div className="final">
    
         
          <div className="img">
            <img src={IndiaToday} alt="ind" />
          </div>
          
  
          <div>
            <h2 style={{fontSize:"20px"}}>India Today Clone</h2>
            <p>
            India Today is a weekly Indian English-language news magazine published by Living Media India Limited. A website to live news reading and watch the live news.  
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
              </div>
              <div>
                {/* <FaReact/> */}
                {/* <p>ReactJs</p> */}
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://sparkly-kitten-6c9a45.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/nitinkondhari03/Indiatoday-Clone"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>

       

        <div className="final">

         
          <div>
            <h2 style={{fontSize:"20px"}}>Travelocity Clone</h2>
            <p>
            Travelocity.com is an online travel agency owned by Expedia Group. It has 12.4 million monthly unique visitors, making it the third most popular website owned by Expedia Group, after Expedia.com and Hotels.com. It was a collaborative project. we worked on this project on our construct week in masai in which we had to complete this in the span of 5
              
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>Json-Server</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://admirable-arithmetic-e1de52.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/gyan2501/abandoned-transport-7963"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className="img">
            <img src={exploreup} alt="abhi" />
          </div>


        </div> 
        
       

       
      </div>
    </div>
  );
}