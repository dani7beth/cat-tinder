import Axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const FetchUser = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { authenicated, setUser } = useContext(AuthContext);

  useEffect(() => {
    //do axios call to check token, setLoaded to true when done
    //with call
    checkUser();
  }, []);

  const checkUser = async () => {
    if (authenicated || !localStorage.getItem("access-token")) {
      setLoaded(true);
      return;
    }

    try {
      const res = await Axios.get("/api/auth/validate_token");
      setUser(res.data.data);
    } catch (err) {
      console.log("invalid token");
    } finally {
      setLoaded(true);
    }
  };

  return loaded ? props.children : null;
};
export default FetchUser;
