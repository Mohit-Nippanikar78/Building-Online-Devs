import React from 'react'
import { ExploreProducts, Footer, FooterAnchor, Heropage, Journey, Whyus } from '../elements'
import ConsultationContact from './Consultation-contact'
import ConsultationCards from './Consultation-cards'
const Consultation = () => {
    return (
        <div className='bg-navy overflow-x-hidden' >
            <Heropage type="Consultation" />
            <div className='bg-cover' style={{ backgroundImage: "url('/images/main-bg.png')" }}>
                {/* <Journey />
            <AboutAboutus />
            <ExploreProducts dark={true} type="homepage" /> */}
                <ConsultationCards />
                <Whyus />
                <ConsultationContact />
                <Footer />
            </div>
        </div>
    )
}

export default Consultation