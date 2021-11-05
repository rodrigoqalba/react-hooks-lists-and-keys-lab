import React from "react";

function NavBar() {
  const links = ["#home", "#about", "#projects"];

  const linkElements = links.map((link) => {
    return <a key={link} href={links}>{link}</a>
  })

  return (
    <nav>
      {linkElements}
    </nav>
  );
}

export default NavBar;
