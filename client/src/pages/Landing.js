import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby scenester succulents sriracha affogato wayfarers
              portland, bitters leggings same wolf. Mlkshk biodiesel four loko
              ethical, marfa yuccie poutine brunch schlitz listicle
              farm-to-table everyday carry echo park.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="jobhunt" className="img main-img" />
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
