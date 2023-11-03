import styled from "styled-components";
import { useState } from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

function Input({
  label,
  type = "text",
  register,
  validations = {},
  name = "",
  error = "",
}: InputType) {
  const [focused, setFocused] = useState<Focused>(false);
  const isFocusedValue = (focused: Focused) => {
    setFocused((value: Focused) => {
      value = focused;
      return value;
    });
  };
  return (
    <Container>
      <Label error={error} focused={focused}>
        {label}
      </Label>
      <StyledInput
        error={error}
        onFocus={() => isFocusedValue(true)}
        type={type}
        name={name}
        {...register(name, {
          ...validations,
          onBlur: () => isFocusedValue(false),
        })}
      />
      <StyledError>{error}</StyledError>
    </Container>
  );
}

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<Focused>`
  margin-top: 10px;
  color: ${(props) => {
    if (!props.error && props.focused) return "var(--color-brand-600)";
    else if (props.error) {
      return "var(--color-red-700)";
    } else {
      return "inhert";
    }
  }};
  font-weight: var(--font-weight-heading2);
`;

const StyledInput = styled.input`
  border: ${(props) => (props.error ? "1px solid var(--color-red-700)" : "")};
`;

const StyledError = styled.p`
  color: var(--color-red-700);
`;

export declare interface InputType {
  label: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  validations?: RegisterOptions;
  error?: string;
  name: string;
}

declare type Focused = boolean;
