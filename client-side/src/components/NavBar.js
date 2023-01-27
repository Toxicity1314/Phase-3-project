import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

function NavBar({ NavBarName, setNavBarName }) {
  const navigate = useNavigate();

  return (
    <div>
      <br />
      {window.location.pathname !== "/" && (
        <Button onClick={() => {
          navigate("/")
          setNavBarName("Restaurant App")
        }}>back to home</Button>
      )}
      <br />
      <h1>{NavBarName}</h1>
    </div>
  );
}

export default NavBar;
