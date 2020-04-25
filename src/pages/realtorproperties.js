import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import SEO from '../hooks/SEO';
import { Section1 } from '../components/realtorPropertiesPage/Section1/_Section1';

export const query = graphql`
  {
    allWordpressPage {
      nodes {
        id
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
    }
  }
`;

const RealtorPropertiesPage = ({ data }) => {
  const properties = data.allWordpressPage.nodes;
  return (
    <Layout>
      <SEO
        title="Realtor Properties"
        description="Realtor properties for our site"
      />
      <Section1 properties={properties} />
    </Layout>
  );
};

export default RealtorPropertiesPage;
