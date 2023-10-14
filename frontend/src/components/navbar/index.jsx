import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 5rem;

  p {
    font-family: 'Russo One';
    font-size: 2rem;
    color: #5E17EB;
  }

  div a {
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.3rem;
    font-family: 'Lato';
    font-weight: bold;
    color: #1a1a1a;
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <p>Party Manager</p>
      <div>
        <Link to="/">Minhas Festas</Link>
        <Link to="/party/create">Criar Festa</Link>
      </div>
    </StyledNavbar>
  );
}
