import React, { useEffect } from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import img1 from '../images/img1.avif'; // Adjust paths as necessary
import img2 from '../images/img2.avif';
import img3 from '../images/img3.avif';
import service1 from "../images/service1.jpg";
import brainstorming from "../images/brainstorming.png";
import knowledge from "../images/knowledge.png";
import "./About.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function About({ id }) {
    useGSAP(() => {
        // Animate images in the left component
        gsap.from(".imagesside1 img", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".imagesside1",
                start: "top 80%",
                toggleActions: "play reverse play reverse",
            },
        });

        gsap.from(".imagesside2 img", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".imagesside2",
                start: "top 80%",
                toggleActions: "play reverse play reverse",
            },
        });

        // Animate the "ABOUT US" title and text content in the right component
        gsap.from(".rightComp .about", {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".rightComp .about",
                start: "top 90%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(".aboutHeading ", {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".aboutHeading",
                start: "top 85%",
                toggleActions: "play reverse play reverse",
            },
        });

        gsap.from(".rightComp p", {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".rightComp p",
                start: "top 85%",
                toggleActions: "play reverse play reverse",
            },
        });

        // Animate each service block individually with a staggered effect
        gsap.from(".services .service1, .services .service2", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".services",
                start: "top 80%",
                toggleActions: "play reverse play reverse",
            },
        });
    }, []);

    return (
        <section id='About'>
            <div className="leftComp">
                <div className="imagesside1">
                    <img className='img1' src={img1} alt="" />
                    <div className='inquiry'>
                        <img className='img2' src={brainstorming} alt="" />
                        <h3>30 Years Of Quality Service</h3>
                    </div>
                </div>
                <div className="imagesside2">
                    <img className='img3' src={img2} alt="" />
                    <img className='img4' src={img3} alt="" />
                </div>
            </div>

            <div className="rightComp">
                <div className="about">
                    <AutoStoriesIcon />
                    <h2>ABOUT US</h2>
                </div>
                <h2 className='aboutHeading'>Empowering Students to <span className='highLight'>Achieve</span> Dreams.</h2>
                <p>Our university is dedicated to fostering an educational environment that promotes personal growth, innovation, and academic excellence.</p>
                <div className="services">
                    <div className="service1">
                        <div className="serve">
                            <img className='img5' src={service1} alt="" />
                            <h3>Academic Excellence</h3>
                        </div>
                        <p>Our faculty, resources, and state-of-the-art facilities ensure that students have access to everything they need to succeed and thrive.</p>
                    </div>
                    <div className="service2">
                        <div className="serve">
                            <img className='img6' src={knowledge} alt="" />
                            <h3>Global Partnerships</h3>
                        </div>
                        <p>We believe in the power of global collaboration. Our university is partnered with prestigious institutions worldwide.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
