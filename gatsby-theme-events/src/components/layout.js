import React from "react"
import { Link } from "gatsby"
import { Layout as ThemeLayout, Header, Main, Container } from "theme-ui";

const Layout = ({ children }) => {
  return (
    <ThemeLayout>
      <Header>
        <h1>BWB Events</h1>
        <nav>
          <Link to="/events">
            <a>Home</a>
          </Link>
          <Link to="/events">
            <a>About</a>
          </Link>
        </nav>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  );
};

export default Layout;
