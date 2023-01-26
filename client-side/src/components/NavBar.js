import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

function NavBar({ NavBarName, setNavBarName }) {
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/")
    setNavBarName("Restaurant App")
  }

  return (
    <div>
      <br />
      {window.location.pathname !== "/" && (
        <Button onClick={handleClick}>back to home</Button>
      )}
      <br />
      <h1>{NavBarName}</h1>
    </div>
  );
}

export default NavBar;
