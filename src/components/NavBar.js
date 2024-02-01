import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  return <nav>
    {links.map((link) => {
      return (
        <a key={link} href={`#${link}`}>{link[0].toUpperCase() + link.slice(1)}</a>
      );
    })
    }
  </nav>  
}

export default NavBar;


