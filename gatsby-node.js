const path = require("path")
exports.createPages = async({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
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
              content {
                childMarkdownRemark {
                  html
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
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result.data.allContentfulPost

  edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}/`,
      component: path.resolve('./src/templates/post.js'),
      context: { post: edge.node }
    })
  })
}
