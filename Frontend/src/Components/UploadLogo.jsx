import React from 'react'
import '../Style/UploadLogo.css'

const UploadLogo = ({ setlogo }) => {
  return (
    <div className="upload-wrapper" style={{ paddingBottom: '15px', borderBottom: '2px solid #A5B29A' }}>
      <input type="file" accept='image/*' onChange={(e) => {
        const file = e.target.files[0];
        if (file) {
          setlogo(URL.createObjectURL(file));
        }
      }
      } id="file-upload" className="custom-file-input" />
    </div>


  )
}

export default UploadLogo