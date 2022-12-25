import { Link } from "react-router-dom";
import ErrorImage from "../../assets/error.jpeg";
import { Image, Title } from "./error.styles";
export const Error = () => {
  return (
    <>
      <Title>ACCESS DENIED. INSUFFICIENT ACCESS PERMISSIONS.</Title>
      <Link to="/">
        <Image src={ErrorImage} />
      </Link>
    </>
  );
};
