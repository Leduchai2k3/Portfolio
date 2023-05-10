import styled from "styled-components";

import { NavLink } from "react-router-dom";
const listNavBar = [
  {
    title: "Home",
    url: "/",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 386 381"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M198.56 2.28011C197.071 0.855916 195.09 0.0610352 193.03 0.0610352C190.97 0.0610352 188.989 0.855916 187.5 2.28011L3.3999 178.15C2.61805 178.898 1.99604 179.797 1.57149 180.792C1.14694 181.787 0.928674 182.858 0.929901 183.94L0.899902 349C0.899902 357.487 4.27132 365.626 10.2725 371.628C16.2736 377.629 24.413 381 32.8999 381H129C133.243 381 137.313 379.314 140.314 376.314C143.314 373.313 145 369.244 145 365V229C145 226.878 145.843 224.844 147.343 223.343C148.843 221.843 150.878 221 153 221H233C235.122 221 237.156 221.843 238.657 223.343C240.157 224.844 241 226.878 241 229V365C241 369.244 242.686 373.313 245.686 376.314C248.687 379.314 252.756 381 257 381H353.06C361.547 381 369.686 377.629 375.687 371.628C381.688 365.626 385.06 357.487 385.06 349V183.94C385.061 182.858 384.843 181.787 384.418 180.792C383.994 179.797 383.372 178.898 382.59 178.15L198.56 2.28011Z"
          fill="gray"
        />
      </svg>
    ),
  },
  {
    title: "About",
    url: "/about",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.146 12.1123 0.438 11.637C0.73 11.1617 1.11733 10.7993 1.6 10.55C2.63333 10.0333 3.68333 9.64567 4.75 9.387C5.81667 9.12833 6.9 8.99933 8 9C9.1 9 10.1833 9.12933 11.25 9.388C12.3167 9.64667 13.3667 10.034 14.4 10.55C14.8833 10.8 15.271 11.1627 15.563 11.638C15.855 12.1133 16.0007 12.634 16 13.2V16H0Z"
          fill="gray"
        />
      </svg>
    ),
  },
  {
    title: "Work",
    url: "/work",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 19C1.45 19 0.979002 18.804 0.587002 18.412C0.195002 18.02 -0.000664969 17.5493 1.69779e-06 17V6C1.69779e-06 5.45 0.196002 4.979 0.588002 4.587C0.980002 4.195 1.45067 3.99934 2 4H6V2C6 1.45 6.196 0.979002 6.588 0.587002C6.98 0.195002 7.45067 -0.000664969 8 1.69779e-06H12C12.55 1.69779e-06 13.021 0.196002 13.413 0.588002C13.805 0.980002 14.0007 1.45067 14 2V4H18C18.55 4 19.021 4.196 19.413 4.588C19.805 4.98 20.0007 5.45067 20 6V17C20 17.55 19.804 18.021 19.412 18.413C19.02 18.805 18.5493 19.0007 18 19H2ZM8 4H12V2H8V4Z"
          fill="gray"
        />
      </svg>
    ),
  },
  {
    title: "Contact",
    url: "/contact",
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
          fill="gray"
        />
      </svg>
    ),
  },
];
const NavBarStyled = styled.div`
  .menu-item {
    padding: 20px;
    background-color: transparent;
    border-radius: 100%;
    border: 6px solid transparent;
    transition: 0.5s;
    &.active {
      span {
        svg {
          path {
            fill: #00ff85;
          }
        }
      }
      padding: 20px;
      background-color: #212121;
      border-radius: 100%;
      border: 6px solid black;
      transform: translateX(-50px);
    }
  }
`;

const NavBar = () => {
  return (
    <NavBarStyled
      className="w-[100px] h-full bg-[#212121] rounded-l-xl flex flex-col translate-x-2 items-center justify-center gap-8"
      data-aos="fade-left"
    >
      {listNavBar.map((item) => {
        return (
          <NavLink to={item.url} className="menu-item" key={item.title}>
            <span className="w-[15px] h-[15px]">{item.icon}</span>
          </NavLink>
        );
      })}
    </NavBarStyled>
  );
};

export default NavBar;
