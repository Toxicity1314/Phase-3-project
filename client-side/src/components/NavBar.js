import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

function NavBar({ NavBarName }) {
  const navigate = useNavigate();

  return (
    <div>
      <br />
      {window.location.pathname !== "/" && (
        <Button onClick={() => navigate("/")}>back to home</Button>
      )}
      <br />
      <h1>{NavBarName}</h1>
    </div>
  );
}

export default NavBar;
