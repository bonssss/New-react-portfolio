import React, { useEffect, useState } from 'react';
import './Skill.css'; // Import CSS file for styling

const Skill = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / scrollHeight) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skillsData = [
    { name: 'HTML', level: 9 },
    { name: 'CSS', level: 8 },
    { name: 'Java', level: 7 },
    { name: 'JavaScript', level: 9 },
    { name: 'React', level: 9 },
    { name: 'MERN Stack', level: 8 }
  ];

  return (
    <div id='skill'>
    <section className="skills-container" >
      <h1 className="skills-title">Skills</h1>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <h3 className="skill-title">{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${(skill.level / 10) * 100}%`, animationDelay: `-${scrollPercent}s` }}
              ></div>
              <div className="skill-level-number">{skill.level}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Skill;
