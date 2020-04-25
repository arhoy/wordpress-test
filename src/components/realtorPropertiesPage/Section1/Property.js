import React from 'react';
import styled from '@emotion/styled';
import { NoStyleLink } from '../../resusableStyles/Links/LinkStyles';

const Container = styled(NoStyleLink)`
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  & img {
    object-fit: cover;
    width: 20rem;
    height: 15rem;
  }
`;

const ContentContainer = styled.div`
  & .row {
    display: flex;
    width: 100%;
  }
  & .price {
    justify-content: space-between;
  }

  & .bdba {
    margin-right: 1rem;
  }
  font-size: 0.9rem;
  & span {
    opacity: 0.9;
  }
  & button {
    outline: none;
    border: none;
    margin: 2px;
    background: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.white};
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.colors.primaryDark};
    }
  }
`;

export const Property = ({ property }) => {
  return (
    <Container to={`/${property.slug}`}>
      <ImageContainer>
        <img src={property.mainimage} />
      </ImageContainer>

      <ContentContainer>
        <div className="row">
          <address>{property.address}</address>
        </div>
        <div className="row">
          <div className="bdba">
            <span>
              {property.numbedroom} {` `} bd
            </span>{' '}
            <span>
              {property.numbathroom} {` `} ba
            </span>
          </div>
          <div className="sqft">
            <span>
              {property.floorsizevalue} {` `} {property.floorsizeunit}{' '}
            </span>
          </div>
        </div>
        <div className="row price">
          <span>${property.listedprice}</span>
          <button> Get Tour </button>
        </div>
      </ContentContainer>
    </Container>
  );
};
