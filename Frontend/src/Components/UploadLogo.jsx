import React, { useState } from "react";
import "../Style/UploadLogo.css";

const UploadLogo = ({ setlogo }) => {

  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setlogo(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  return (
    <div className="upload-wrapper">

      <h3>Upload Brand Logo</h3>

      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="custom-file-input"
        onChange={handleFileChange}
      />

      {fileName && (
        <p className="file-name">
          Selected: {fileName}
        </p>
      )}

    </div>
  );
};

export default UploadLogo;