import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  padding: 10px;
  &:hover {
    color: purple;
  }
`;

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-around;

  width: 100%;
  border: 1px solid black;
`;

export const Navigation = () => {
  return (
    <Layout>
      <NavigationContainer>
        {/*
         * TODO: add a redirect to the homepage from clicking the name/logo.
         */}
        <Link>Jacob Pagan</Link>
        <Link href="https://github.com/Alto1988">Github</Link>
        <Link href="http://google.com/">LinkedIN</Link>
      </NavigationContainer>
    </Layout>
  );
};
