import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Service = ({ siteTitle }) => (

    <div class="panel z-10 px-0 pt-32 bg-white t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
  <div class="panel-body min-h-screen  sm:min-h-auto xs:min-h-auto h-100 w-90 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 mx-auto md:w-90 xs:w-100 sm:w-95 relative">
      
  <h1 class="text-center font-semiBold text-4xl pb-24">What We Do</h1>
      <div class="flex align-items-end relative w-100 md:w-55 pb-4 xs:w-95 mx-auto">
        <div class="w-60 text-center">
        <img src={'/img/Untitled-1.png'}/>
        </div>
        <div class="w-40">
            <div class="pt-16">
                <h4 class="text-primary text-2xl font-bold text-center font-secondary">Information Consulting</h4>
                <p class="text-center font-light pt-4 leading-loose">
                Discover where your leads come from, what it costs to 
getthem,  and how they interact with your website before contacting you. 
Discover where  your leads come from, them.
                </p>
                <div class="w-100 text-center pt-12">
            <button class="btn bg-none  py-3 px-8 text-primary rounded-full border-1 border-solid border-primary text-xs text-light mx-auto">READ MORE</button>
          </div>
            </div>
        </div>

    </div>

    <div >

    </div>

       
  </div>


</div>

    
)

Service.propTypes = {
  siteTitle: PropTypes.string,
}

Service.defaultProps = {
  siteTitle: ``,
}

export default Service
