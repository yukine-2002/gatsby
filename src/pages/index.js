import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"


const BlogLink = styled(Link)`
  text-decoration : none;
`

const BlogTitle = styled.h3`
  margin-bottom:20px;
  color:blue;

`

export default  ({data}) => {
  return(
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Yuki</h1>
      <h4>{data.allMarkdownRemark.totalCount} posts.</h4>
      {
        data.allMarkdownRemark.edges.map( ({node}) => (
        
             <div key = {node.id}>
                 <BlogLink to={node.fields.slug}>
                    <BlogTitle>
                          <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
                    </BlogTitle>
                    <p>{node.excerpt}</p>
                   </BlogLink>
          </div>
        
         
        ))
      }
    </div>
  
  </Layout>
)}

export const query = graphql `
  query{
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            title
            description
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }

`