/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../utils/fontawesome"

import Navbar from "./nav"
import NavMobile from "./navMobile"
import "../styles/app.scss"
import Footer from "../components/sections/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQuery {
      footer: wpPost(slug: {eq: "footer"}) {
        id
        attributes: footer_attributes {
          address
          email
          phoneNumber
        }
      }
      navbar: allWpMenu {
        translations: nodes {
          id
          lang: name
          slug
          items: menuItems {
            nodes {
              title
              url
            }
          }
        }
      }
      site: wp {
        generalSettings {
          description
          title
        }
        id
      }
    }
  `)

  return (
    <>
      <div className="relative">
        <Navbar details={data.navbar} />
        <NavMobile details={data.navbar} />
        <main className="relative">{children}</main>
        <Footer
          siteTitle={data.site.name}
          address={data.footer.attributes.address}
          email={data.footer.attributes.email}
          phoneNumber={data.footer.attributes.phone_number}
        />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
