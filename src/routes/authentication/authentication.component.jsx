import { SignInForm } from "../../components/SignInForm/sign-in-form.component";
import { SignUpForm } from "../../components/SignUpForm/sign-up-form.component";
import "./authentication.styles.scss";
export const SignIn = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
