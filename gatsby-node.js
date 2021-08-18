/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const results = await graphql(`
    query {
      services: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "services" } } } }
        }
      ) {
        list: nodes {
          id
          slug
          title
          content
          images: featuredImage {
            node {
              url: sourceUrl
            }
          }
          button: general_attributes {
            text: buttonText
            summary
          }
        }
      }
      team: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "team-member" } } } }
        }
      ) {
        members: nodes {
          id
          slug
          name: title
          description: content
          attributes: team_member_attributes {
            position
          }
          images: featuredImage {
            node {
              url: sourceUrl
            }
          }
        }
      }
      bulletin: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "bulletin" } } } }
        }
      ) {
        posts: nodes {
          id
          slug
          name: title
          description: content
          images: featuredImage {
            node {
              url: sourceUrl
            }
          }
        }
      }
    }
  `)
  const serviceTemplate = path.resolve(`./src/templates/service.js`)
  results.data.services.list.forEach((edge) => {
    createPage({
      // will be the url for the page
      path: "/service/" + edge.slug,
      // specify the component template of your choice
      component: serviceTemplate,
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.id,
      },
    })
  })

  const memberTemplate = path.resolve(`./src/templates/member.js`)
  results.data.team.members.forEach((edge) => {
    createPage({
      // will be the url for the page
      path: "/members/" + edge.slug,
      // specify the component template of your choice
      component: memberTemplate,
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.id,
      },
    })
  })

  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  results.data.bulletin.posts.forEach((edge) => {
    createPage({
      // will be the url for the page
      path: "/bulletin/" + edge.slug,
      // specify the component template of your choice
      component: blogTemplate,
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.id,
      },
    })
  })
}
