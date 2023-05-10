import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const ItemProjectStyled = styled.div`
  border: 2px solid transparent;
  .navlink {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
      background-color: #00ff85;
      color: black;
      path {
        fill: black;
      }
    }
  }
  &:hover {
    border: 2px solid #00ff85;
    .overlay {
      height: 100%;
      opacity: 100;
    }
  }
  .overlay {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 400ms;
    overflow: hidden;
    width: 100%;
    height: 0;
    opacity: 0;
    position: absolute;
    bottom: 0;
  }
`;

const ItemProject = ({
  image,
  name,
  description,
  technology,
  teamSize,
  slug,
  gitHub,
  delay,
}) => {
  AOS.init();
  return (
    <ItemProjectStyled
      className="relative w-full transition-all aspect-video"
      data-aos="fade-left"
      data-aos-delay={delay}
      data-aos-duration="600"
    >
      <div className="w-full h-full">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-around gap-2 p-6 text-white overlay">
        <div className="absolute bottom-0 left-0 z-0 flex flex-col justify-around w-full h-full gap-2 p-6 text-white bg-black opacity-80"></div>
        <h1 className="z-10 mx-auto mb-3 text-2xl font-bold">{name}C</h1>
        <div className="z-10 ">
          <span className="mr-1 font-bold">- Description:</span>
          <span className="font-normal leading-5">{description}</span>
        </div>
        <div className="z-10 ">
          <span className="mr-1 font-bold">- Technology:</span>
          <span className="font-normal leading-5">{technology}</span>
        </div>
        <div className="z-10 ">
          <span className="z-10 mr-1 font-bold">- Team size:</span>
          <span className="z-10 font-normal">{teamSize}</span>
        </div>
        <div className="z-10 flex items-center justify-around">
          <NavLink
            to={slug}
            className=" navlink flex px-6 py-3 items-center border-[2px] rounded-md border-[#00ff85] justify-center gap-3 transi"
          >
            <span>View</span>
            <span>
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
                  fill="white"
                />
              </svg>
            </span>
          </NavLink>
          <NavLink
            to={gitHub}
            className="navlink flex px-6 py-3 items-center border-[2px] rounded-md border-[#00ff85] justify-center gap-3"
          >
            <span>GitHub</span>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                  fill="white"
                />
              </svg>
            </span>
          </NavLink>
        </div>
      </div>
    </ItemProjectStyled>
  );
};

export default ItemProject;
