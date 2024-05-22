import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './components/Navbar';
import ParticleBackground from "./components/ParticleBackground";
import Atropos from "atropos/react";
import Namaste from './assets/Namaste.mp4';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './App.css'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const navbarRef = useRef(null);
  const particleRef = useRef(null);
  const comp = useRef(null);
  const servicesRef = useRef(null);
  const visionRef = useRef(null);
  const aboutRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        yPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.6,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.5,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })
        .from("#tagline", {
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
        })
        .from(navbarRef.current, {
          opacity: 0,
          duration: 0.5,
        })
        .from(particleRef.current, {
          opacity: 0,
          duration: 0.5
        })

      gsap.fromTo(servicesRef.current.children, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 100%",
          end: "bottom 100%",
          scrub: true,
        }
      });

      gsap.fromTo(visionRef.current.children, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 95%",
          end: "bottom 70%",
          scrub: true,
        }
      });

      gsap.fromTo(aboutRef.current.children, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 95%",
          end: "bottom 70%",
          scrub: true,
        }
      });

      gsap.fromTo(ctaRef.current.children, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 95%",
          end: "bottom 70%",
          scrub: true,
        }
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 justify-center place-items-center font-poppins z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <video src={Namaste} width="300" height="300" autoPlay={true} muted />
        <h1 className="text-9xl" id="title-1">
          Namaste!
        </h1>
      </div>
      <div className="h-screen bg-white">
        <ParticleBackground ref={particleRef}/>
        <Navbar ref={navbarRef} id="navbar" />
        <div className="h-screen flex flex-col bg-black justify-center place-items-center z-1">
          <h1
            id="welcome"
            className="text-9xl font-bold text-gray-100 font-poppins z-20"
          >
            Ravian AI
          </h1>
          <h3 id="tagline" className="text-3xl text-gray-100 font-poppins z-20 align-center">
            Turn Data into Decisions, with our AI Data Scientist
          </h3>
        </div>
      </div>

      <div className="offerings-section bg-white pl-10 pr-10" ref={servicesRef}>
        <h1 className="text-8xl font-semibold text-white font-poppins">Our Offerings</h1>
        <div className="container mx-auto flex flex-row justify-around items-start gap-10 pt-10">
          <Atropos activeOffset={40}
          shadowScale={1.05}
          className="my-atropos bg-gradient-to-r from-gray-950  p-10 rounded-lg transition duration-500 hover:shadow-xl hover:shadow-white cursor-pointer " >
              <div className="my-atropos-image rounded-lg" data-atropos-offset="5"></div>
              <h2 className="text-4xl font-bold mb-5 text-white align-center mt-5" data-atropos-offset="5">AI Data Analyst</h2>
              <p className="text-md text-white text-poppins" data-atropos-offset="5" >Unlock the full potential of your data with RAVIAN AI Data Analyst - an intelligent platform designed to transform raw data into actionable insights. Our AI Data Analyst is equipped with the latest machine learning algorithms and cutting-edge technologies to analyze, interpret and visualize data with precision and speed.</p>
          </Atropos>
          <Atropos activeOffset={40}
          shadowScale={1.05}
          className="my-atropos bg-gradient-to-r from-gray-950  p-10 rounded-lg transition duration-500 hover:shadow-xl hover:shadow-white cursor-pointer " >
              <div className="my-atropos-image-1 rounded-lg" data-atropos-offset="-5"></div>
              <h2 className="text-4xl font-bold mb-5 text-white align-center mt-5" data-atropos-offset="-5">Gen AI Vision Analyst</h2>
              <p className="text-md text-white text-poppins" data-atropos-offset="-5" >Introducing the Gen AI Vision Analyst: Redefining Visual Intelligence at RAVIAN AI. We are excited to introduce our revolutionary GenAI Vision Analyst - a next generation solution that sets a new standard for visual intelligence and data analysis.</p>
          </Atropos>
        </div>

        <div className="vision-section pt-40 pb-20 " ref={visionRef}>
          <h1 className="text-8xl font-semibold text-white font-poppins mb-10">Our Vision</h1>
          <div className="container mx-auto p-4">
            <h3 className="text-5xl font-thin text-white">At Ravian, our vision is to redefine the frontiers of data science by integrating artificial intelligence with human ingenuity.</h3>
            <p className="text-xl font-light text-white pt-10 w-11/12">
              We strive to develop AI-driven solutions that not only solve complex business problems but also cultivate a deeper understanding of the data that shapes our world. We envision a future where every organization, regardless of its size or sector, has access to the power of advanced data analytics, enabling them to make smarter decisions, innovate faster and drive meaningful progress. Our goal is to become the cornerstone for transformative analytics that empower business to lead with confidence and clarity.
            </p>
          </div>
        </div>

        <div className="about-section pt-40 " ref = {aboutRef} >
          <h1 className="text-8xl font-semibold text-white font-poppins mb-10">About Us</h1>
          <div className="container mx-auto p-4">
            <h3 className="text-5xl font-thin text-white">At Ravian, we are dedicated to transforming the landscape of data analytics through innovation and cutting-edge technology</h3>
            <p className="text-xl font-light text-white pt-10 w-11/12">
            As pioneers in the field. we have developed the world's leading Al data scientist-an intelligent platform that leads the way in crafting machine learning and deep learning models, conducting comprehensive data analysis, and delivering actionable insights through intuitive visualizations.
            </p>
            <p className="text-xl font-light text-white pt-5 w-11/12">
            Our journey began with a vision to empower businesses with the tools they need to harness the power of their data and make informed decisions that drive success. With a team of passionate experts and a commitment to excellence, we have turned that vision into reality.
            </p>
            <p className="text-xl font-light text-white pt-5 w-11/12">
            Today, RAVIAN stands at the forefront of Al-driven analytics. helping businesses of all sizes unlock the full potential of their data assets. Whether you're uncovering hidden patterns. predicting future trends, or optimizing operations. RAVIAN Al is your trusted partner in navigating the complexities of data- driven decision-making. Join us on this journey as we continue to push the boundaries of what's possible in the realm of data analytics. Welcome to RAVIAN AJ-where innovation meets intelligence.
            </p>
          </div>
        </div>

        <div className="cta-section pt-20 " ref = {ctaRef}>
          <h1 className="text-8xl font-semibold text-white font-poppins mb-10">What are you waiting for?</h1>
          <button className="animated-button flex justify-center place-items-center font-poppins">Try Ravian</button>
        </div>
        
      </div>
        <footer className="bg-gray-950 text-white py-10 w-full mt-20 absolute">
            <div className="container mx-auto flex flex-col items-center font-poppins">
              <h2 className="text-2xl font-semibold mb-4">Ravian AI</h2>
              <p className="mb-4 text-center w-10/12">
                Empowering businesses with AI-driven insights and data solutions.
              </p>
              <div className="flex space-x-4 mb-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-xl hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-xl hover:text-blue-400 transition-colors" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-xl hover:text-blue-700 transition-colors" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-xl hover:text-pink-500 transition-colors" />
                </a>
              </div>
              <p className="text-sm text-gray-400">&copy; 2024 Ravian AI. All rights reserved.</p>
            </div>
          </footer>
    </div>
  );
};

export default App;