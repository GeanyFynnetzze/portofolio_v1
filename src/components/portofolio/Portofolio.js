import React from 'react';
import './portofolio.css';
import PortofolioItem from './PortofolioItem';
function Portofolio() {
  const projectsArray = [
    {
      id: 0,
      title: 'Title of the project',
      image:
        'https://i.postimg.cc/TwrZjLLv/d64e2a027a6d7567501995ba23a70eda46c0afb6-full.jpg',
      github: 'Intern Database&Oracle',
      live: '6 months',
    },
    {
      id: 1,
      title: 'Title of the project',
      image:
        'https://i.postimg.cc/TwrZjLLv/d64e2a027a6d7567501995ba23a70eda46c0afb6-full.jpg',
      github: 'Intern Database&Oracle',
      live: '6 months',
    },
    {
      id: 2,
      title: 'Title of the project',
      image:
        'https://i.postimg.cc/TwrZjLLv/d64e2a027a6d7567501995ba23a70eda46c0afb6-full.jpg',
      github: 'Intern Database&Oracle',
      live: '6 months',
    },
    {
      id: 3,
      title: 'Title of the project',
      image:
        'https://i.postimg.cc/TwrZjLLv/d64e2a027a6d7567501995ba23a70eda46c0afb6-full.jpg',
      github: 'Intern Database&Oracle',
      live: '6 months',
    },
    {
      id: 4,
      title: 'Title of the project',
      image:
        'https://i.postimg.cc/TwrZjLLv/d64e2a027a6d7567501995ba23a70eda46c0afb6-full.jpg',
      github: 'Intern Database&Oracle',
      live: '6 months',
    },
    {
      id: 5,
      title: 'Title of the project',
      image:
        'https://i.postimg.cc/TwrZjLLv/d64e2a027a6d7567501995ba23a70eda46c0afb6-full.jpg',
      github: 'Intern Database&Oracle',
      live: '',
    },
  ];
  const projectElement = projectsArray
    .sort()
    .reverse()
    .map((item) => {
      return (
        <PortofolioItem
          key={item.id}
          title={item.title}
          image={item.image}
          github={item.github}
          live={item.live}
        />
      );
    });
  return (
    <section id="portofolio">
      <div className="portofolio--intro">
        <h5>Here you can find</h5>
        <h2>My Recent Work</h2>
      </div>

      <div className="container portofolio--container">{projectElement}</div>
    </section>
  );
}

export default Portofolio;
