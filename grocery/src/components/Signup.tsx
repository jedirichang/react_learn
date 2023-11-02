import { styled } from "styled-components";
import Input from "../ui/Input";

function Signup() {
  return (
    <Container>
      <Title>SIGN UP</Title>
      <Input label="Email" />
    </Container>
  );
}

export default Signup;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: var(--font-heading1);
  font-weight: var(--font-weight-heading1);
  letter-spacing: 5px;
`;
