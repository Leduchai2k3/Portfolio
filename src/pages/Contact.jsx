import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactStyled = styled.div`
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

const Contact = () => {
  AOS.init();
  return (
    <ContactStyled
      className="w-full h-full bg-[#212121] rounded-lg overflow-y-scroll"
      data-aos="zoom-out"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="600"
    >
      <div className="flex flex-col w-full h-full gap-8 p-8 overflow-hidden">
        <div className="flex flex-col items-center gap-1" data-aos="fade-down">
          <h5 className="text-[#888888] text-lg">
            Feel Free To Contact Me Anytimes
          </h5>
          <div className="flex gap-5">
            <h1 className="text-[60px] font-semibold text-white">My</h1>
            <h1 className="text-[60px] font-semibold text-[#00ff85]">
              Contact
            </h1>
          </div>
          <span className="w-[140px] h-[4px] rounded-full bg-[#00ff85] mt-3 custom-loader"></span>
        </div>
        <div className="flex gap-[4%] w-[100%]">
          <form
            className="w-[55%] relative flex flex-col gap-5"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            <h2 className="text-[28px] font-bold text-white">Contact Me</h2>
            <div className="flex gap-[4%]">
              <input
                type="text"
                placeholder="Name"
                className=" w-[48%] px-4 py-3 text-white border-transparent border shadow-md shadow-black transition-all focus:shadow-none focus:border focus:border-[#00ff85]"
              />
              <input
                type="text"
                placeholder="Email"
                className=" w-[48%] px-4 py-3 text-white border-transparent border shadow-md shadow-black transition-all focus:shadow-none focus:border focus:border-[#00ff85]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className=" w-[100%] px-4 py-3 text-white border-transparent border shadow-md shadow-black transition-all focus:shadow-none focus:border focus:border-[#00ff85]"
            />
            <textarea
              type="text"
              rows="8"
              placeholder="Message"
              className=" w-[100%] px-4 py-3 text-white border-transparent border shadow-md shadow-black transition-all focus:shadow-none focus:border focus:border-[#00ff85]"
            />
            <button className="px-5 py-3 bg-[#00ff85]" disabled>
              SEND MESSAGE
            </button>
          </form>
          <div
            className="flex flex-col gap-5"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            <h2 className="text-[28px] font-bold text-white">Contact Info</h2>
            <span className="text-lg font-medium text-gray-500">
              Always available for freelance work if the right project comes
              along, Feel free to contact me!
            </span>
            <div className="flex items-center gap-8">
              <span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.146 12.1123 0.438 11.637C0.73 11.1617 1.11733 10.7993 1.6 10.55C2.63333 10.0333 3.68333 9.64567 4.75 9.387C5.81667 9.12833 6.9 8.99933 8 9C9.1 9 10.1833 9.12933 11.25 9.388C12.3167 9.64667 13.3667 10.034 14.4 10.55C14.8833 10.8 15.271 11.1627 15.563 11.638C15.855 12.1133 16.0007 12.634 16 13.2V16H0Z"
                    fill="#00ff85"
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-[6px]">
                <h4 className="font-bold text-white">Name</h4>
                <h4 className="font-semibold text-[#00ff85]">Le Duc Hai</h4>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <span>
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10C8.55 10 9.021 9.804 9.413 9.412C9.805 9.02 10.0007 8.54933 10 8C10 7.45 9.804 6.979 9.412 6.587C9.02 6.195 8.54933 5.99933 8 6C7.45 6 6.979 6.196 6.587 6.588C6.195 6.98 5.99933 7.45067 6 8C6 8.55 6.196 9.021 6.588 9.413C6.98 9.805 7.45067 10.0007 8 10ZM8 20C5.31667 17.7167 3.31267 15.596 1.988 13.638C0.663333 11.68 0.000666667 9.86733 0 8.2C0 5.7 0.804333 3.70833 2.413 2.225C4.02167 0.741667 5.884 0 8 0C10.1167 0 11.9793 0.741667 13.588 2.225C15.1967 3.70833 16.0007 5.7 16 8.2C16 9.86667 15.3373 11.6793 14.012 13.638C12.6867 15.5967 10.6827 17.7173 8 20Z"
                    fill="#00ff85"
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-[6px]">
                <h4 className="font-bold text-white">Location</h4>
                <h4 className="font-semibold text-[#00ff85]">
                  Ha Dong, Ha Noi, Viet Nam
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                    fill="#00ff85"
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-[6px]">
                <h4 className="font-bold text-white">Call Me</h4>
                <h4 className="font-semibold text-[#00ff85]">
                  +84 34 333 5657
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <span>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                    fill="#00ff85"
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-[6px]">
                <h4 className="font-bold text-white">Email</h4>
                <h4 className="font-semibold text-[#00ff85]">
                  duchaidev@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactStyled>
  );
};

export default Contact;
