import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="container px-4 lg:px-0 py-3 mx-auto">
          <div className="flex justify-between">
            <Link to="/">
              <img
                src="/images/logo/logo-light.png"
                alt="LOGO"
                className="h-20"
              />
            </Link>
            <div className="flex justify-end items-center gap-4">
              <NavLink to="login">Log in</NavLink>
              <NavLink to="login">Register</NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
