import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import Logo from "../logo"

const Main = props => (
  <div className="panel z-10 px-0 pt-32 xs:pt-0 sm:pt-12 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto sm:h-auto">
    <div className="min-h-screen  sm:min-h-auto xs:min-h-auto h-100 w-95 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3 xs:pt-0 xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 ml-auto md:w-95 xs:w-100 sm:w-95 xl:flex md:flex  lg:flex sm:flex relative">
      <div className="text-left -l-10 absolute">
        <img src={"/img/shapes.png"} className="w-100 relative" />
      </div>

      <div className="xl:flex md:flex lg:flex sm:flex xs:block align-items-end relative pt-16 sm:pt-0 md:pt-12 w-100 md:w-100 pb-4 xs:w-90 xs:ml-auto ml-auto">
        <div className="w-100 xl:hidden lg:hidden md:hidden sm:hidden text-right">
          <div className="text-right">
            <img src={props.image.url} className="clip-full" />
          </div>
        </div>
        <div className="w-55 xs:w-100 xs:pt-0">
          <div className=" xs:pt-0">
            <div className="w-90 h-px-500 text-lg xs:pt-0 xs:w-100 font-normal tracking-wide">
              <Logo />
              <div className="xl:leading-relaxed tracking-wider xl:text-lg xs:text-base md:text-sm sm:text-sm xs:w-90">
                {ReactHtmlParser(props.children)}
              </div>
            </div>
          </div>
          <div className="w-100 pt-16 xs:pt-5 text-right xs:text-left"></div>
        </div>
        <div className="w-45  xs:hidden text-right">
          <div className="text-right">
            <img src={props.image.url} className="clip-full" />
          </div>
        </div>
      </div>

      <div className="text-left r-0 b-0 absolute">
        <img src={"/img/shapes.png"} className="w-100 relative" />
      </div>
    </div>
  </div>
)

Main.propTypes = {
  siteTitle: PropTypes.string,
  buttonText: PropTypes.string,
  image: PropTypes.object,
}

Main.defaultProps = {
  siteTitle: ``,
  image: {
    url: "",
  },
  buttonText: `Read more`,
}

export default Main
