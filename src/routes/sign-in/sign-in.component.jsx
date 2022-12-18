import { SignUpForm } from "../../components/SignUpForm/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Test Google</button>
      <SignUpForm />
    </>
  );
};
