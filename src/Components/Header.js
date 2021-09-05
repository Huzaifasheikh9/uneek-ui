import "./Header.css";

import { Box , Link } from "@material-ui/core";

const Header = (props) => {
  const preventDefault = (event) => event.preventDefault();
  return (
    <Box className="Links-Container">
        <Link className="nav-links1" href="#" onClick={preventDefault}>
          <div className="logo-image"></div>
        </Link>
        <Link className="nav-links" href="#" onClick={preventDefault} >
          <Box>Home </Box>
        </Link>
        <Link className="nav-links" href="#" onClick={preventDefault} >
         Features
        </Link>
        <Link className="nav-links" href="#" onClick={preventDefault}>
          Contact👋
        </Link>
        <Link className="nav-links-bold " href="#" onClick={preventDefault}>
          Log In
        </Link>
    </Box>
  );
}; 

export default Header;
