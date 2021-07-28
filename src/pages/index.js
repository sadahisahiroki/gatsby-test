import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Home({data}) {
  return (
    <Layout>
      <SEO title="Dev Blog" description="test" />
      <Hero />
      {data.allContentfulPost.edges.map(edge => <PostLink key={edge.node.slug} post={edge.node} />)}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulPost {
      edges {
        node {
          title
          thumbnail {
            title
            file {
              url
            }
          }
          excerpt {
            excerpt
          }
          slug
          updatedAt(locale: "ja-JP", formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`
