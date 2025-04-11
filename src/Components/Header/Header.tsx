import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Sign in</Link>
        </nav>
      </header>
    </>
  );
}
export default Header;
