import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../hooks/store.hook";
import { AuthState, signupUser } from "../store/auth.store";
import { useLocalStorageState } from "../hooks/localStorage.hook";

interface IFormSignup {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IFormSignup>({ mode: "onTouched" });

  const auth: AuthState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { setValue } = useLocalStorageState(auth.userInfo, 'auth');


  console.log(errors);
  const onSubmit: SubmitHandler<IFormSignup> = (data: IFormSignup) => {
    dispatch(signupUser({ email: data.email, password: data.password, name: data.name })).then(res => {
      setValue(res.payload);
      navigate("/dashboard");
    }, (err) => {
    })
  };

  console.log("auth", auth);

  const isValidEmail = (email: string): boolean | string =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
      ? true
      : "Email should be valid";
  return (
    <Container>
      {auth.loading}
      <Title>SIGN UP</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          name="name"
          register={register}
          error={errors.name?.message}
          validations={{
            required: { value: true, message: "Name is Required" },
            maxLength: 50,
          }}
        />
        <Input
          label="Email"
          register={register}
          error={errors.email?.message}
          name="email"
          validations={{
            required: "Email is Required",
            validate: isValidEmail,
          }}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          error={errors.password?.message}
          register={register}
          validations={{ required: "Password is required" }}
        />
        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="text"
          error={errors.confirmPassword?.message}
          register={register}
          validations={{ required: "Confirm password is required" }}
        />
        <StyledButton disabled={!isValid | auth.loading}>{auth.loading ? 'Loading...' : 'Submit'}</StyledButton>
      </form>
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

const StyledButton = styled(Button)`
  margin-top: 20px;
`;
