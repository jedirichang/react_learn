import styled from 'styled-components';
import { useState } from 'react';
function Input({ label, type = "text" }: InputType) {
  const [focused, setFocused] = useState<Focused>(false);
  const isFocusedValue = (focused: Focused) => {
    setFocused((value: Focused) => {
      value = focused;
      return value;
    })
  }
  return (
    <Container>
      <Label focused={focused}>{label}</Label>
      <input onFocus={() => isFocusedValue(true)} onBlur={() => isFocusedValue(false)}
        type={type} />
    </Container>
  );
}

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label<Focused>`
  margin-top: 10px;
  color:${(props) => {
    return props.focused ? 'var(--color-brand-600)' : ''
  }};
  font-weight: var(--font-weight-heading2);
`

export declare interface InputType {
  label: string;
  type?: string;
}

declare type Focused = boolean;
