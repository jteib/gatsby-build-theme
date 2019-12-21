import React from "react"
import { Link } from "gatsby";

const Nav = () => {
return (
<>
    <Link to="/home">
          <a>Home</a>
        </Link>
        <Link to="/about">
          <a>About</a>
        </Link>
</>
        )
    }

export default Nav;