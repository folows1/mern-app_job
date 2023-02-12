import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Page not found</h3>
        <p>We are sorry, but the page you requested was not found.</p>
        <Link to="/">Go to Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
