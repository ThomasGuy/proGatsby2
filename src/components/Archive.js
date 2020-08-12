import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
    text-decoration: underline;
    color: #524766;
  }
`

const POST_ARCHIVE_QUERY = graphql`
  query PostsArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  const renderPosts = () => {
    const { edges } = data.allMarkdownRemark
    return edges.map((edge) => {
      const { title, slug } = edge.node.frontmatter
      return (
        <li key={slug}>
          <Link to={`/posts${slug}`}>{title}</Link>
        </li>
      )
    })
  }

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ArchiveList>{renderPosts()}</ArchiveList>
      </aside>
    </>
  )
}

export default Archive
