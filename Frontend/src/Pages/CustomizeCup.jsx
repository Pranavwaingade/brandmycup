import React, { useState } from 'react'
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
    const [brandname, setbrandname] = useState("");
    const [tagline, settagline] = useState("");
    const [brandcolor, setbrandcolor] = useState("#8B5E3C");
    const [logo, setlogo] = useState(null);

    const [cupSize, setCupSize] = useState("250ml");
    const [cupShape, setCupShape] = useState("Cylindrical");
    const [paperQuality, setPaperQuality] = useState("Standard");
    const [quantity, setQuantity] = useState("100");


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
                        <CupPreview brandname={brandname} tagline={tagline} brandcolor={brandcolor} logo={logo} />
                    </div>
                    <div className="cupoperation">
                        <BrandingDetails setbrandname={setbrandname} setbrandcolor={setbrandcolor} settagline={settagline} />
                        <UploadLogo setlogo={setlogo} />
                        <CupSpecifications setCupSize={setCupSize} setCupShape={setCupShape} setPaperQuality={setPaperQuality} setQuantity={setQuantity} cupSize={cupSize} cupShape={cupShape} quantity={quantity} paperQuality={paperQuality} />
                        <OrderSummary cupSize={cupSize} cupShape={cupShape} quantity={quantity} paperQuality={paperQuality} />
                        <DesignActions brandname={brandname}
                            tagline={tagline}
                            brandcolor={brandcolor}
                            logo={logo}
                            cupSize={cupSize}
                            cupShape={cupShape}
                            paperQuality={paperQuality}
                            quantity={quantity} />
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