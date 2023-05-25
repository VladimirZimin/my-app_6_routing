import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    background-color: #0c142d;
    color: #ffd166;
  }
`;

const List = styled.ul`
  display: flex;
  margin-top: 15px;
`;

// localhost:3000/
//localhost:3000/dogs
//localhost:3000/dogs/dog-5

export const Layout = () => {
  return (
    <>
      <header>
        <List>
          <li>
            <StyledLink to="/">Домашняя</StyledLink>
          </li>
          <li>
            <StyledLink to="/dogs">Коллекция</StyledLink>
          </li>
        </List>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
