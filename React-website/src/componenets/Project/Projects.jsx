

// Projects.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './project.css'
import tour from '../../assets/tour.png'
import calculator from '../../assets/calculator.png'
import netflixhome from '../../assets/netflix.png'
import temprature from '../../assets/temp.png'
import portfolio from '../../assets/port.png'


const Projects = () => {
  const projects = [
    { id: 1, title: 'Portfolio Website', description: 'Showcasing my expertise and accomplishments in one place – explore my portfolio for a glimpse into my skills and projects', imageUrl: portfolio },
    { id: 2, title: 'Tout Travel website', description: '', imageUrl:tour },
    { id: 3, title: 'Netflx Home Page', description: 'Description for Project 2', imageUrl: netflixhome },
    { id: 4, title: 'Temprature converter', description: 'Description for Project 2', imageUrl:temprature  },

    // Add more project objects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="projects" id='project'>
      <h1>My Projects</h1>
      <Slider {...settings}>
        {projects.map(project => (
          <div key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
