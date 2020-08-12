import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 43 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-botttom: 1rem;
  a {
    color: black;
    text-decoration: none;
  }

  p {
    font-size: 0.8rem;
  }
  h2 {
    margin-bottom: 0;
  }
`

const LISTING_QUERY = graphql`
  query MyQuery {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`

const Listing = () => {
  return (
    <div>
      <StaticQuery
        query={LISTING_QUERY}
        render={({ allMarkdownRemark }) =>
          allMarkdownRemark.edges.map(({ node }) => (
            <Post key={node.id}>
              <h1>{node.frontmatter.title}</h1>
              <p>{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
              <Link to={`posts${node.frontmatter.slug}`}>Read More...</Link>
            </Post>
          ))
        }
      />
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default Listing
