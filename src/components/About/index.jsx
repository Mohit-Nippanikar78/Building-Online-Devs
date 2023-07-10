import React from 'react'
import { ExploreProducts, Footer, FooterAnchor, Heropage, Journey, Whyus } from '../elements'
import AboutAboutus from './About-aboutus'
const About = () => {
    return (<div className='bg-navy overflow-x-hidden' >
        <Heropage type="About" />
        <div className='bg-cover' style={{ backgroundImage: "url('/images/main-bg.png')" }}>
            <Journey />
            <AboutAboutus />
            <ExploreProducts dark={true} type="homepage" />
            <Whyus />
            <FooterAnchor />
            <Footer />
        </div>
    </div>
    )
}

export default About