import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import Logo from "../logo"
import SectionTitle from "../section-title"

class Service extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  render() {
    return (
      <div id={this.props.id} className="w-100 relative bg-white relative">
        <div className="w-100 ml-auto lg:w-95 lg:ml-auto  relative overflow-hidden">
          <div className="w-100 h-100 bg-white absolute t-0 z-5 lg:t-0 lg:-l-45 md:hidden xs:hidden -l-55" />
          <div
            className="w-50 md:w-90 relative z-10 sm:mx-auto sm:w-85 xs:w-85 xs:mx-auto
          "
          >
            <div className="w-90 lg:w-100 xs:w-100 ml-auto sm:ml-0 py-6">
              <Logo />
              <div className="w-100 my-auto relative">
                <div className="text-left my-auto">
                  <SectionTitle>{this.props.title}</SectionTitle>
                  <div className="text-lg lg:text-sm font-secondary w-100 tracking-wider leading-relaxed pb-16 pr-16 sm:text-base sm:pr-0">
                    {ReactHtmlParser(this.props.description)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 md:w-85 md:mx-auto xl:absolute lg:absolute -r-15 t-0 h-100 xs:hidden">
            <img
              src={
                this.props.image && this.props.image.url
                  ? this.props.image.url
                  : null
              }
              className="w-80 relative"
            />
          </div>
        </div>
      </div>
    )
  }
}

Service.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.array,
}

Service.defaultProps = {
  id: null,
  title: ``,
  description: ``,
  services: [],
}

export default Service
