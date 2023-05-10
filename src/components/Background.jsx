import styled from "styled-components";

const BackgroundStyled = styled.div`
  .line {
    position: fixed;
    height: 100%;
    width: 100%;
    transform: rotate(-57deg);
    left: -63%;
    box-shadow: 0 0 7px #fffffff2;
    background-color: #00ff85;
  }
`;

const Background = () => {
  return (
    <BackgroundStyled className="h-screen" data-aos="zoom-in">
      <div className="line"></div>
    </BackgroundStyled>
  );
};

export default Background;
