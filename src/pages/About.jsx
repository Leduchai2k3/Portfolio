import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
const AboutStyled = styled.div`
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
  .button {
    background-color: #00ff85;
    border-radius: 5px;
    padding: 10px 20px;
    color: #fff;
    animation: rotate 1.5s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(15deg);
    }
    15% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(15deg);
    }
    25% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .button:hover {
    animation-play-state: paused;
  }
`;

const About = () => {
  document.title = "About";
  AOS.init();

  // You can also pass an optional settings object
  return (
    <AboutStyled
      className="w-full h-full bg-[#212121] rounded-lg overflow-y-scroll"
      data-aos="zoom-out"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="600"
    >
      <div className="flex flex-col w-full h-full gap-8 p-8 overflow-hidden">
        <div className="flex flex-col items-center gap-1" data-aos="fade-down">
          <h5 className="text-[#888888] text-lg">My Intro</h5>
          <div className="flex gap-5">
            <h1 className="text-[60px] font-semibold text-white">About</h1>
            <h1 className="text-[60px] font-semibold text-[#00ff85]">Me</h1>
          </div>
          <span className="w-[180px] h-[4px] rounded-full bg-[#00ff85] mt-3 custom-loader"></span>
        </div>
        <div className="flex pb-8 h-[80%] gap-8 items-center">
          <img
            src="/IMG_0121.jpg"
            alt="avatar"
            className="h-full aspect-square object-cover rounded-lg max-w-[50%]"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="600"
          />
          <div className="flex flex-col gap-4">
            <div
              className="flex gap-2 text-xl font-bold"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <h4 className="text-white">Who Am</h4>
              <h4 className="text-[#00ff85]">I ?</h4>
            </div>
            <div
              className="text-[28px] font-bold text-white flex gap-2"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <h4>I’m Le Duc Hai, </h4>
              <h4 className="text-[#00ff85]">Front-End Developer</h4>
              <h4>And</h4>
              <h4 className="text-[#00ff85]">Web Developer</h4>
            </div>
            <span
              className="text-[#888888] text-lg"
              data-aos="fade-left"
              data-aos-delay="150"
              data-aos-duration="600"
            >
              I’m 20 years old. I started learning and exploring Web
              applications in mid-2021 and have graduated a Front-End course
              from F8 and ReactJs by Evondev. I’m a sociable person and
              hard-working person.
            </span>
            <div
              className="flex gap-2 text-white text-[28px]"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              <h4>Personal</h4>
              <h4 className="text-[#00ff85]">Informations</h4>
            </div>
            <div
              className="flex gap-[300px] text-white"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              <div className="flex flex-col gap-5 ">
                <div className="flex gap-2">
                  <span className="text-[#888888] font-medium">
                    First Name:
                  </span>
                  <span>Hai</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#888888] font-medium">Last Name:</span>
                  <span>Le Duc</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#888888] font-medium">Address:</span>
                  <span>Hai Duong, Viet Nam</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#888888] font-medium">Age:</span>
                  <span>20</span>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <span className="text-[#888888] font-medium">E-Mail:</span>
                  <span>duchaidev@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#888888] font-medium">Github:</span>
                  <a
                    className="cursor-pointer"
                    href="https://github.com/Leduchai2k3"
                  >
                    github.com/Leduchai2k3
                  </a>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#888888] font-medium">Phone:</span>
                  <span>+8434 333 5657</span>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <a href="/LeDucHai-FE_ReactJs.pdf" download>
                <button className="px-5 py-4 bg-[#00ff85] rounded-md button mt-4 flex gap-4">
                  <p className="font-semibold text-black">Download CV</p>
                  <svg
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AboutStyled>
  );
};

export default About;
