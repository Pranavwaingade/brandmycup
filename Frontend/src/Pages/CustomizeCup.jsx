import React from 'react'
import '../Style/CustomizeCup.css'
import Navbar from '../Components/Navbar'
import CupPreview from '../Components/CupPreview'
import UploadLogo from '../Components/UploadLogo'
import BrandingDetails from '../Components/BrandingDetails'
import CupSpecifications from '../Components/CupSpecifications'
import OrderSummary from '../Components/OrderSummary'
import DesignActions from '../Components/DesignActions'
import Footer from '../Components/Footer'

const CustomizeCup = () => {
    return (
        <>
            <Navbar />
            <div className="cupdeisginlayout">
                <div className='heading'>
                    <h2>Design Your Custom Paper Cup</h2>
                    <p>Customize your cup with your logo, brand name and premium paper quality.</p>
                </div>
                <div className='layout'>
                    <div className="cuppreview">
                        <CupPreview />
                    </div>
                    <div className="cupoperation">
                        <BrandingDetails />
                        <UploadLogo />
                        <CupSpecifications />
                        <OrderSummary />
                        <DesignActions />
                    </div>
                </div>

            </div>
            <br />
            <br />
            <Footer />


        </>
    )
}

export default CustomizeCup