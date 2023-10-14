import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled.article`
  max-width:350px;
  margin: 1rem 0;
  img {
    width: 300px;
    height: 300px;
    border-radius: 3px;
  }
`;

const StyledH2 = styled.h2`
  font-family: "Roboto";
  font-weight: bold;
  margin: .3rem 0;
`;

const StyledButton = styled.button`
  cursor: pointer;
  align-self: center;
  background-color: transparent;
  border: 2px solid #5E17EB;
  border-radius: 7px;
  font-size: 1rem;
  transition: all .5s ease;


  a {
    text-decoration: none;
  }
 &:hover {
  background-color: #5E17EB;
 }
  &:hover a {
    color: #FFF;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export default function Card({ image, title, id }) {
  const url = `/party/${id}`;

  return (
    <StyledCard>
      <img src={image} alt="imagem da festa" />

      <StyledText>
        <StyledH2>{title}</StyledH2>
        <StyledButton type="button">
          <Link to={url}>
            Detalhes
          </Link>
        </StyledButton>
      </StyledText>

    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
};
