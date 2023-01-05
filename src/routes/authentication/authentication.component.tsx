import { SignInForm } from "../../components/SignInForm/sign-in-form.component";
import { SignUpForm } from "../../components/SignUpForm/sign-up-form.component";
import { AuthenticationContainer } from "./authentication.styles";

const SignIn = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default SignIn;
