import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

function NavBar({NavBarName}) {
  const navigate = useNavigate()

  return( 
  <div>
      {window.location.pathname !== "/" && <Button onClick={()=>navigate("/")}>back to home</Button>}
      <h1>{NavBarName}</h1>
  </div>
)}

export default NavBar;
