import PropTypes from "prop-types"
import React from "react"

const Value = props => (
  <div
    id={props.id}
    class="panel z-10 px-0 py-20 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto"
  >
    <div class="panel mt-0 w-85 mx-auto md:w-95 xs:w-100 sm:w-100 centered">
      <h1 class=" font-semiBold text-4xl text-primary my-0">our core values</h1>
      <div class="w-50 py-12">
        <p>
          Discover where your leads come from, what it costs to getthem, .
          Discover where your leads come from, what it costs to getthem, .
        </p>
      </div>
      <div class="flex flex-wrap justify-center py-20">
        <div class="panel panel-default p-2 xl:w-30 lg:w-45 md:w-45 sm:w-45 md:mr-2  rounded-lg overflow-hidden bg-transparent xl:inline-block lg:inline-block md:inline-block sm:inline-block sm:m-2 xl:m-2 lg:m-2 mt-3">
          <div class="sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden centered mx-auto my-2">
            <img src={"/img/Group-5.png"} />
          </div>
          <div class="panel-body bg-white center text-left py-2 px-0">
            <h5 class=" my-1 color-accent xl:pt-4 lg:pt-3 font-bold font-primary text-xl md:text-base xs:text-xs sm:text-base sm:ml-3 xs:text-center sm:my-3 xs:my-3">
              {props.title}
            </h5>
            <div class="w-100  xl:pt-2 lg:pt-1 sm:ml-3 xs:text-center sm:text-xs md:text-sm text-lg left xs:text-xs xs:mx-auto xs:w-80 opacity-95">
              {props.children}
            </div>
          </div>
        </div>

        <div class="panel panel-default p-2 xl:w-30 lg:w-45 md:w-45 sm:w-45 md:mr-2  rounded-lg overflow-hidden bg-transparent xl:inline-block lg:inline-block md:inline-block sm:inline-block sm:m-2 xl:m-2 lg:m-2 mt-3">
          <div class="w-rem-30 sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden centered mx-auto my-2">
            <img src={"/img/Group-6.png"} />
          </div>
          <div class="panel-body bg-white center text-center py-2">
            <h5 class=" my-1 color-accent xl:pt-4 lg:pt-3 font-bold font-primary text-xl md:text-base xs:text-xs sm:text-base sm:ml-3 xs:text-center sm:my-3 xs:my-3">
              {props.title}
            </h5>
            <div class="w-100  xl:pt-2 lg:pt-1 sm:ml-3 xs:text-center sm:text-xs md:text-sm text-lg left xs:text-xs xs:mx-auto xs:w-80 opacity-95">
              {props.children}
            </div>
          </div>
        </div>

        <div class="panel panel-default p-2 xl:w-30 lg:w-45 md:w-45 sm:w-45 md:mr-2  rounded-lg overflow-hidden bg-transparent xl:inline-block lg:inline-block md:inline-block sm:inline-block sm:m-2 xl:m-2 lg:m-2 mt-3">
          <div class="sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden text-right mx-auto my-2">
            <img src={"/img/Group-7.png"} />
          </div>
          <div class="panel-body bg-white center text-right py-2 px-0">
            <h5 class=" my-1 color-accent xl:pt-4 lg:pt-3 font-bold font-primary text-xl md:text-base xs:text-xs sm:text-base sm:ml-3 xs:text-center sm:my-3 xs:my-3">
              {props.title}
            </h5>
            <div class="w-100  xl:pt-2 lg:pt-1 sm:ml-3 xs:text-center sm:text-xs md:text-sm text-lg left xs:text-xs xs:mx-auto xs:w-80 opacity-95">
              {props.children}
            </div>
          </div>
        </div>

        <div class="panel panel-default p-2 xl:w-30 lg:w-45 md:w-45 sm:w-45 md:mr-2  rounded-lg overflow-hidden bg-transparent xl:inline-block lg:inline-block md:inline-block sm:inline-block sm:m-2 xl:m-2 lg:m-2 mt-3">
          <div class="w-rem-30 sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden centered mx-auto my-2">
            <img src={"/img/Group-6.png"} />
          </div>
          <div class="panel-body bg-white center text-center py-2">
            <h5 class=" my-1 color-accent xl:pt-4 lg:pt-3 font-bold font-primary text-xl md:text-base xs:text-xs sm:text-base sm:ml-3 xs:text-center sm:my-3 xs:my-3">
              {props.title}
            </h5>
            <div class="w-100  xl:pt-2 lg:pt-1 sm:ml-3 xs:text-center sm:text-xs md:text-sm text-lg left xs:text-xs xs:mx-auto xs:w-80 opacity-95">
              {props.children}
            </div>
          </div>
        </div>

        <div class="panel panel-default p-2 xl:w-30 lg:w-45 md:w-45 sm:w-45 md:mr-2  rounded-lg overflow-hidden bg-transparent xl:inline-block lg:inline-block md:inline-block sm:inline-block sm:m-2 xl:m-2 lg:m-2 mt-3">
          <div class="sm:h-64 sm:w-rem-64 xxs:h-48 xxs:w-rem-48 overflow-hidden text-right mx-auto my-2">
            <img src={"/img/Group-7.png"} />
          </div>
          <div class="panel-body bg-white center text-right py-2 px-0">
            <h5 class=" my-1 color-accent xl:pt-4 lg:pt-3 font-bold font-primary text-xl md:text-base xs:text-xs sm:text-base sm:ml-3 xs:text-center sm:my-3 xs:my-3">
              {props.title}
            </h5>
            <div class="w-100  xl:pt-2 lg:pt-1 sm:ml-3 xs:text-center sm:text-xs md:text-sm text-lg left xs:text-xs xs:mx-auto xs:w-80 opacity-95">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Value.propTypes = {
  siteTitle: PropTypes.string,
  id: PropTypes.string,
}

Value.defaultProps = {
  siteTitle: ``,
  id: null,
}

export default Value
