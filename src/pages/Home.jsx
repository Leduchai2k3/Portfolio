import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { NavLink } from "react-router-dom";
const HomeStyled = styled.div`
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
  svg {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 1s;
    :hover {
      path {
        fill: #00ff85;
      }
    }
  }
`;

const Home = () => {
  AOS.init();

  return (
    <HomeStyled
      className="w-full h-full bg-[#212121] rounded-lg"
      // data-aos="zoom-out-up"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="600"
    >
      <div className="flex items-center h-full gap-4 p-8 ">
        <img
          src="/IMG_0121.jpg"
          alt="avatar"
          className="object-cover h-full rounded-lg aspect-square"
          data-aos="fade-right"
          data-aos-delay="150"
          data-aos-duration="600"
        />
        <div className="flex flex-col items-center gap-8">
          <h4
            className="text-lg text-[#888888] font-normal"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            Get To Know Me
          </h4>
          <h1
            className="text-[60px] font-semibold text-white"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            Lê Đức Hải
          </h1>
          <span
            className="w-[180px] h-[4px] rounded-full bg-[#00ff85] custom-loader"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="600"
          ></span>
          <p
            className="text-[32px] font-semibold text-[#00ff85]"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            FRONTEND DEVELOPER
          </p>
          <div
            className="flex gap-6 "
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            <a href="https://www.facebook.com/coder.hai/" target="blank">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 12.5313C25 5.61404 19.4 0 12.5 0C5.6 0 0 5.61404 0 12.5313C0 18.5965 4.3 23.6466 10 24.812V16.2907H7.5V12.5313H10V9.3985C10 6.97995 11.9625 5.01253 14.375 5.01253H17.5V8.77193H15C14.3125 8.77193 13.75 9.33584 13.75 10.0251V12.5313H17.5V16.2907H13.75V25C20.0625 24.3734 25 19.0351 25 12.5313Z"
                  fill="#888888"
                />
              </svg>
            </a>
            <a href="https://github.com/Leduchai2k3" target="blank">
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                  fill="#888888"
                />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@duchaidev" target="blank">
              <svg
                width="22"
                height="25"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6 2.82C11.9164 2.03962 11.5397 1.03743 11.54 0H8.44997V12.4C8.42614 13.071 8.14284 13.7066 7.65974 14.1729C7.17663 14.6393 6.53142 14.8999 5.85997 14.9C4.43997 14.9 3.25997 13.74 3.25997 12.3C3.25997 10.58 4.91997 9.29 6.62997 9.82V6.66C3.17997 6.2 0.159973 8.88 0.159973 12.3C0.159973 15.63 2.91997 18 5.84997 18C8.98997 18 11.54 15.45 11.54 12.3V6.01C12.793 6.90985 14.2973 7.39265 15.84 7.39V4.3C15.84 4.3 13.96 4.39 12.6 2.82Z"
                  fill="#888888"
                />
              </svg>
            </a>
          </div>
          <span
            className="text-[#888888] text-center leading-8 text-lg font-normal"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            My name is Le Duc Hai. I’m 20 years old. I started learning and
            learning programming in mid-2020. As a programming enthusiast, I am
            willing to learn new technologies to meet my work.
          </span>
          <div className="flex gap-6" data-aos="fade-up" data-aos-delay="200">
            <NavLink to="/contact">
              <button
                className="px-6 py-4 bg-[#00ff85] rounded-lg font-semibold"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Hire Me
              </button>
            </NavLink>
            <NavLink to="/about">
              <button
                className="px-6 py-4 bg-[#00ff85] rounded-lg font-semibold"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                About Me
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;
