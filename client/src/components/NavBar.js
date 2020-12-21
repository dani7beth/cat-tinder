import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export default () => {
  const auth = useContext(AuthContext);
  const { user, handleLogout } = auth;

  const rightNavItem = () => {
    if (user) {
      return <Menu.Item name="logout" onClick={() => handleLogout()} />;
    } else {
      return (
        <>
          <Link to="/login">
            <Menu.Item
              name="login"
              id="login"
              // active={(location.pathname = "/login")}
            />
          </Link>
          <Link to="/register">
            <Menu.Item
              name="register"
              id="register"
              // active={(location.pathname = "/register")}
            />
          </Link>
        </>
      );
    }
  };

  return (
    <Menu>
      <Link to="/">
        <Menu.Item>Home</Menu.Item>
      </Link>
      <Menu.Menu position="right">{rightNavItem()}</Menu.Menu>
    </Menu>
  );
};
