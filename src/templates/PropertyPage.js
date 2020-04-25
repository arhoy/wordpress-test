import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../layouts/Layout';

const Container = styled.div``;

export const query = graphql`
  query getPage($id: String!) {
    property: wordpressPage(id: { eq: $id }) {
      acf {
        title
        slug
        floorsizeunit
        floorsizevalue
        numbedroom
        numbathroom
        address
        listedprice
        mainimage
      }
    }
    getSiteData: site {
      siteMetadata {
        url
      }
    }
  }
`;

const PropertyPage = (props) => {
  const property = props.data.property.acf;
  console.log('property is', property);
  return (
    <Layout>
      <Container>
        <h1>{property.title}</h1>
      </Container>
    </Layout>
  );
};
export default PropertyPage;
