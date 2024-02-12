
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
import Customer from '../../assets/Screenshot (273).png'
import social from '../../assets/Screenshot (248).png'
import pharmacy from '../../assets/11.png'
import blood from '../../assets/Screenshot (135).png'

const Projects = () => {
  const projects = [
    { id: 1, title: 'Portfolio Website', description: 'Showcasing my expertise and accomplishments in one place – explore my portfolio for a glimpse into my skills and projects', imageUrl: portfolio },
    { id: 2, title: 'Tout Travel website', description: '', imageUrl:tour },
    { id: 3, title: 'Netflx Home Page', description: '', imageUrl: netflixhome },
    { id: 4, title: 'Blood Donation Management System', description: '', imageUrl:blood  },
    { id: 5, title: 'Simple Social Media', description: '', imageUrl:social   },
    { id: 6, title: 'Pharmacy Management system', description: '', imageUrl:pharmacy  },

    { id: 7, title: 'Customer Service', description: '', imageUrl:Customer  },



    
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
            <img className='project-img' src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
