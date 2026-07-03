import React from 'react'
import CupPreview from '../Components/CupPreview'
import DesignOptions from '../Components/DesignOptions'
import UploadLogo from '../Components/UploadLogo'
import BrandingDetails from '../Components/BrandingDetails'
import CupSpecifications from '../Components/CupSpecifications'
import OrderSummary from '../Components/OrderSummary'
import DesignActions from '../Components/DesignActions'

const CustomizeCup = () => {
  return (
    <div>CustomizeCup
        <CupPreview/>
        <DesignOptions/>
        <UploadLogo/>
        <BrandingDetails/>
        <CupSpecifications/>
        <OrderSummary/>
        <DesignActions/>
    </div>
  )
}

export default CustomizeCup