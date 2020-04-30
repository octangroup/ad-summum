import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactHtmlParser from "react-html-parser"
import AnimationWrapper from "../components/sections/animationWrapper"
import { connect } from "react-redux"
import Translator from "../utils/translator"
import Logo from "../images/logo-full.png"

class Service extends Component {
  render() {
    const post = Translator.process(
      this.props.lang,
      this.props.data.wordpressPost.translations
    )
    return (
      <Layout>
        <SEO title="Home" />
        <AnimationWrapper>
          <div className="z-10 px-0 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
            <div className="w-100 mx-auto pt-3 text-center">
              <div className="xl:flex md:flex lg:flex sm:flex sm:pt-12 min-h-screen">
                <div className="w-40 xs:w-90 py-18 sm:py-18 xs:py-12 xs:mx-auto">
                  <h1 className="xs:pt-8 md:pt-8 sm:pt-2 text-9xl text-left ml-auto xs:hidden sm:hidden xs:text-3xl md:text-sm sm:text-2xl w-90 xs:w-90 text-primary">
                    <img
                      src={Logo}
                      className="clip-full"
                      alt=""
                      className="w-35"
                    />
                  </h1>

                  <img src={"/img/Untitled-1.png"} className="" />
                </div>

                <div className="w-60 xs:w-100 py-32 sm:py-12 xs:py-12 bg-primary-dark text-left text-white">
                  <div className="px-16">
                    <h1 className="p-0 m-0 text-9xl sm:text-xl xs:text-2xl font-primary pb-24 xs:pb-0">
                      {post.title}
                    </h1>
                    <div className="text-left font-light leading-normal py-6 m-0 xs:text-sm sm:text-sm text-lg">
                      {ReactHtmlParser(post.content)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </Layout>
    )
  }
}

Service.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

const mapStateToProps = state => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(Service)

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      translations: polylang_translations {
        lang: polylang_current_lang
        title
        content
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
