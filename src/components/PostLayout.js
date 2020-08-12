import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from './layout'

const PostStyle = styled.div`
  margin: 0 1rem;
`

const PostLayout = (props) => {
  const { html, frontmatter } = props.data.markdownRemark
  const { location } = props
  return (
    <Layout location={location}>
      <PostStyle>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PostStyle>
    </Layout>
  )
}

export default PostLayout
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`
