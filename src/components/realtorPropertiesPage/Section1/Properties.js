import React from 'react';
import { Property } from './Property';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Properties = ({ properties }) => {
  return (
    <Container>
      {properties.map((property, i) => (
        <Property key={i} property={property.acf} />
      ))}
    </Container>
  );
};
