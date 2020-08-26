import PropTypes from "prop-types"
import React from "react"
import Translator from "../../utils/translator"
import { connect } from "react-redux"

class Member extends React.Component {
  render() {
    const details = Translator.process(
      this.props.lang,
      this.props.details.translations
    )

    const defaultTranslation = Translator.process(
      "en_US",
      this.props.details.translations
    )
    return (
      <div className="rounded-lg  bg-transparent w-100 relative">
        <div className="h-rem-84 w-rem-74 xs:w-100 sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden relative centered  mb-0">
          <img
            src={
              defaultTranslation.image && defaultTranslation.image.url
                ? defaultTranslation.image.url
                : null
            }
            alt="team-member"
            class="clip-full"
          />
        </div>
        <div className="bg-primary lg:h-rem-24 text-white p-4 absolute r-5 -b-5 w-80 md:r-0 md:w-100 md:l-35 md:p-1">
          <h5 className="mb-0 mt-0 text-xl lg:text-sm my-0 uppercase text-center leading-relaxed">
            {details.name}
          </h5>
          <div className="text-right relative">
            <div className="line absolute bg-white mt-3 inline-block xs:-mx-1"></div>
            <p className="text-base lg:w-100 xs:text-sm lg:text-xs md:text-base sm:text-sm my-0 inline-block mx-8 xs:mx-2 lg:mx-2">
              {details.attributes.position}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

Member.propTypes = {
  details: PropTypes.object,
}

Member.defaultProps = {
  details: {
    translations: [],
  },
}

const mapStateToProps = (state) => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(Member)
