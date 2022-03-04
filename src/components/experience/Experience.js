import React from 'react';
import './experience.css';
import Technologies from './Technologies';
import Work from './Work';
function Experience() {
  const skillsArray = [
    'html',
    'css',
    'js',
    'C#',
    'Java',
    'react',
    'node',
    'express',
    'sql',
    'mongo',
  ];
  const workArray = [
    {
      id: 0,
      company: 'CFT',
      role: 'Intern Database&Oracle',
      period: '6 months',
    },
    {
      id: 1,
      company: 'UltraPro',
      role: 'Intern Java',
      period: '3 months',
    },
  ];

  const workElement = workArray.map((item) => {
    return (
      <Work
        key={item.id}
        company={item.company}
        role={item.role}
        period={item.period}
      />
    );
  });
  const experienceElement = skillsArray.map((item, index) => {
    return <Technologies key={index} skill={item} />;
  });
  return (
    <section id="experience">
      <div className="experience--intro">
        <h5>An insight related to</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container experience--container">
        <div className="experience--work">
          <h3>Previous Experience</h3>
          <div className="experience--work--content">
            <article className="work--details">{workElement}</article>
          </div>
        </div>
        <div className="experience--technologies">
          <h3>Technologies</h3>
          <div className="experience--technologies--content">
            <article className="technologies--details">
              {experienceElement}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
