import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Test Google</button>
    </>
  );
};
