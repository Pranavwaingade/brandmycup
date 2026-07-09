import React from 'react'
import '../Style/UploadLogo.css'

const UploadLogo = () => {
  return (
    <div class="upload-wrapper" style={{paddingBottom:'15px',borderBottom:'2px solid #A5B29A'}}>
      <input type="file" id="file-upload" class="custom-file-input" />
    </div>


  )
}

export default UploadLogo