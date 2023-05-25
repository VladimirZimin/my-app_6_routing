import React, { Suspense, useEffect, useRef } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { styled } from "styled-components";

// 1. http://localhost:3000/dogs?dogId=2
// 2. http://localhost:3000/dogs/dog-2
// 3. const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
// 4. http://localhost:3000/dogs/dog-2/gallery
// 5. backLinkLocationRef не меняется и все еще ведет на http://localhost:3000/dogs?dogId=2

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    background-color: #0c142d;
    color: #ffd166;
  }
`;

const DogDetails = () => {
  const { dogId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/dogs");

  useEffect(() => {
    // http запрос
  }, []);
  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>
      <ul>
        <li>
          <StyledLink to="subbreeds">Подподроды</StyledLink>
        </li>
        <li>
          <StyledLink to="gallery">Галерея</StyledLink>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
