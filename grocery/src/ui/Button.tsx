import styled from "styled-components";

function Button({
  className,
  children,
  onClick,
  disabled,
}: ButtonPropsInterface) {
  return (
    <Container disabled={disabled} onClick={onClick} className={className}>
      {children}
    </Container>
  );
}

export default Button;

const Container = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  background-color: var(--color-brand-600);
  color: white;
  width: 15rem;
  height: 5rem;
  text-transform: uppercase;
  border-radius: 5px;
  letter-spacing: 2px;
  transition: cubic-bezier(0.95, 0.05, 0.795, 0.035) all;
  /* transition-duration: 150ms; */
  box-shadow: rgb(0 0 0 / 69%) 0px 10px 10px -10px,
    rgb(0 0 0 / 73%) 0px 5px 10px -10px;
  &:hover {
    /* box-shadow: rgb(0 0 0 / 69%) 0px 15px 25px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
    background-color: var(--color-brand-800);
  }
`;

interface ButtonPropsInterface {
  className?: string;
  buttonText: string;
  children: React.ReactNode;
  onClick: React.MouseEvent;
  disabled: boolean;
}
