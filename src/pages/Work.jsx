import styled from "styled-components";
import Item from "../components/Item";
import AOS from "aos";
import "aos/dist/aos.css";
import ItemProject from "../components/ItemProject";
import { useState } from "react";

const WorkStyled = styled.div`
  .menu-item {
    background-color: transparent;
    transition: 0.5s;
    &.active {
      rotate: 10deg;
      span {
        background-color: transparent;
        color: white;
      }
    }
  }
  .custom-loader {
    background: repeating-linear-gradient(
        90deg,
        #00ff85 0 calc(25% - 5px),
        #0000 0 25%
      )
      left/calc(4 * 100%/3) 100%;
    animation: i1 2.2s infinite linear;
  }
  @keyframes i1 {
    100% {
      background-position: right;
    }
  }
`;

const listSkill = [
  {
    id: 1,
    image: "/React-icon.svg.png",
    name: "React Js",
    delay: 0,
  },
  {
    id: 2,
    image: "/ant.png",
    name: "Ant Design",
    delay: 200,
  },
  {
    id: 3,
    image: "/bootstrap.png",
    name: "Bootstrap",
    delay: 350,
  },
  {
    id: 4,
    image: "/CSS3_logo.svg.png",
    name: "CSS",
    delay: 500,
  },
  {
    id: 5,
    image: "/image.jpeg",
    name: "HTML",
    delay: 650,
  },
  {
    id: 6,
    image: "/nodejs.png",
    name: "Node JS",
    delay: 800,
  },
];

const listProject = [
  {
    id: 1,
    image: "/shop.png",
    name: "WEBSITE MUSIC",
    description:
      "This website helps users can watch trailer, ranking movie. They can book ticket on website",
    technology: "ReactJS, Bootstrap, Ant Design",
    teamSize: 1,
    slug: "",
    gitHub: "",
    delay: 0,
  },
  {
    id: 2,
    image: "/shop.png",
    name: "WEBSITE MUSIC",
    description:
      "This website helps users can watch trailer, ranking movie. They can book ticket on website",
    technology: "ReactJS, Bootstrap, Ant Design",
    teamSize: 1,
    slug: "",
    gitHub: "",
    delay: 200,
  },
  {
    id: 3,
    image: "/shop.png",
    name: "WEBSITE MUSIC",
    description:
      "This website helps users can watch trailer, ranking movie. They can book ticket on website",
    technology: "ReactJS, Bootstrap, Ant Design",
    teamSize: 1,
    slug: "",
    gitHub: "",
    delay: 350,
  },
  {
    id: 4,
    image: "/shop.png",
    name: "WEBSITE MUSIC",
    description:
      "This website helps users can watch trailer, ranking movie. They can book ticket on website",
    technology: "ReactJS, Bootstrap, Ant Design",
    teamSize: 1,
    slug: "",
    gitHub: "",
    delay: 500,
  },
];
const Work = () => {
  document.title = "Work";
  const [project, setProject] = useState(false);

  AOS.init();
  return (
    <WorkStyled
      className="w-full h-full bg-[#212121] rounded-lg overflow-y-scroll overflow-x-hidden"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="600"
    >
      <div className="flex flex-col items-center h-full gap-4 p-8 ">
        <div
          className="flex flex-col items-center gap-5"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          <h5 className="text-[#888888] text-lg">
            Showcasing Some Of My Skill, Certificate And Project
          </h5>
          <div className="flex gap-5">
            <h1 className="text-[60px] font-semibold text-white">My</h1>
            <h1 className="text-[60px] font-semibold text-[#00ff85]">
              Portfolio
            </h1>
          </div>
          <span className="w-[180px] h-[3px] rounded-full bg-[#00ff85] custom-loader"></span>
        </div>
        <div
          className="flex gap-5 mt-4 text-white"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="600"
        >
          <button
            className={`px-5 py-3 border-[2px] hover:scale-90 transition-all cursor-pointer border-[#00ff85] bg-[#00ff85] text-black rounded-md font-medium ${
              project ? "" : "-rotate-6 bg-transparent text-white"
            }`}
            onClick={() => setProject(false)}
          >
            Skill
          </button>
          <button
            className={`px-5 py-3 border-[2px] hover:scale-90 transition-all cursor-pointer border-[#00ff85] bg-[#00ff85] text-black rounded-md font-medium ${
              !project ? "" : "-rotate-6 bg-transparent text-white"
            }`}
            onClick={() => setProject(true)}
          >
            Project
          </button>
        </div>
        {project === false ? (
          <div className="grid grid-cols-5 gap-8 pb-5 mt-8">
            {listSkill.map((item) => {
              return (
                <Item
                  key={item.id}
                  delay={item.delay}
                  image={item.image}
                  name={item.name}
                ></Item>
              );
            })}
          </div>
        ) : (
          <div className="grid w-full grid-cols-3 gap-6 pb-6">
            {listProject.map((item) => {
              return (
                <ItemProject
                  key={item.id}
                  delay={item.delay}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  technology={item.technology}
                  teamSize={item.teamSize}
                  slug={item.slug}
                  gitHub={item.gitHub}
                ></ItemProject>
              );
            })}
          </div>
        )}
      </div>
    </WorkStyled>
  );
};

export default Work;
