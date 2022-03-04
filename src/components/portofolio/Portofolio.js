import React from 'react';
import './portofolio.css';
import PortofolioItem from './PortofolioItem';
function Portofolio() {
  const projectsArray = [
    {
      id: 0,
      title: 'Android App(Bachelor project)',
      image: 'https://i.postimg.cc/k4Qxv8QC/unknown.png',
      github: 'https://github.com/BorislavAleksiev/IrrigationAppV2',
      live: 'https://www.youtube.com/watch?v=XGzWSOH20Y0',
    },
    {
      id: 1,
      title: 'VR Mechanics',
      image: 'https://i.postimg.cc/mgTXKLXB/unknown.png',
      github: 'https://github.com/BorislavAleksiev/MIX_XR_Mechanics',
      live: 'https://youtu.be/HFc9EhwNZRE',
    },
    {
      id: 2,
      title: 'AR Dragon app',
      image: 'https://i.postimg.cc/B6pRw8sW/unknown.png',
      github: 'https://github.com/GeanyFynnetzze/DragonThingAR',
      live: 'https://www.youtube.com/watch?v=U70yxOzTTvw',
    },
    {
      id: 3,
      title: 'Unity Game',
      image: 'https://i.postimg.cc/wjSzhsx0/unknown.png',
      github: 'https://github.com/GeanyFynnetzze/UnityGame',
      youtube: 'https://www.youtube.com/watch?v=8WWL2mXS0rQ',
    },
    {
      id: 4,
      title: 'React meme app',
      image: 'https://i.postimg.cc/yY1pb6rB/unknown.png',
      github: 'https://github.com/GeanyFynnetzze/memes-app',
      live: 'https://app-meme-generator.netlify.app/',
    },
    {
      id: 5,
      title: 'React calculator',
      image: 'https://i.postimg.cc/KzcgyVXK/unknown.png',
      github: 'https://github.com/GeanyFynnetzze/react-calculator',
      live: 'https://react-calculator-testapp.netlify.app/',
    },
    {
      id: 6,
      title: 'VanillaJs Restaurant',
      image: 'https://i.postimg.cc/1tXgkg2x/unknown.png',
      github: 'https://github.com/GeanyFynnetzze/VanillaJsMenu',
      live: '',
    },
    {
      id: 7,
      title: 'Review section test(react)',
      image: 'https://i.postimg.cc/WzF7vpt3/unknown.png',
      github: 'https://github.com/GeanyFynnetzze/review-app',
      live: 'https://review-app-react.netlify.app/',
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
