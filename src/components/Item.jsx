import styled from "styled-components";
import { PropTypes } from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
const ItemStyled = styled.div`
  --border-size: 3px;
  --border-angle: 0turn;
  background-image: conic-gradient(
      from var(--border-angle),
      #212121,
      #212121 50%,
      #212121
    ),
    conic-gradient(from var(--border-angle), transparent 20%, #08f, #00ff85);
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }

  &:hover {
    animation-play-state: paused;
  }

  @property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
  }
`;

const Item = ({ delay, image, name }) => {
  AOS.init();
  return (
    <ItemStyled
      className="box w-[220px] h-[250px] bg-[#212121] shadow-md shadow-black transition-all flex flex-col items-center pt-4 justify-around cursor-pointer"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="600"
    >
      <img src={image} alt="img" className="w-[80%]" />
      <div className="text-2xl font-bold text-white">{name}</div>
    </ItemStyled>
  );
};
Item.propTypes = {
  delay: PropTypes.any.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Item;
