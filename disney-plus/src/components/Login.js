import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <BackgroundImage>
        <img src="images/login-background.jpg" />
      </BackgroundImage>
      <LoginContainer>
        <ImageLarge>
          <img src="images/cta-logo-one.svg" />
        </ImageLarge>
        <GetStartedButton>GET ALL THERE</GetStartedButton>
        <Description>
          Get Premeir Access to Raye and the Last Dragon for an additional free
          with a Desiney+ subscription.
          <br /> As of 03/26/21, the price of Disney+ and The Desiney Bundle
          will increase by $1
        </Description>
        <ImageSmall>
          <img src="images/cta-logo-two.png" />
        </ImageSmall>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
`;
const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImageLarge = styled.div`
  display: flex;
  margin-bottom: 20px;
  img {
    width: 40rem;
  }
`;

const GetStartedButton = styled.button`
  width: 100%;
  border: none;
  height: 3rem;
  border-radius: 5px;
  border: none;
  background-color: #075de6;
  color: white;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;
  }
`;

const Description = styled.div`
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
`;

const ImageSmall = styled(ImageLarge)`
  margin-top: 20px;
`;
