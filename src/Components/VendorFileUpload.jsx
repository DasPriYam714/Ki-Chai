import React, { useState } from 'react';

const VendorFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="fileUpload" className="cursor-pointer mb-4">
        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          {/* File upload button component */}
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
            {/* Icon */}
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 15.5l-3-3v-7h6v7l-3 3zm4.03-10.38L13 3.09 10.97 5.12 9.55 3.71 12 1.25l2.45 2.46zm-8.06 0l-1.41 1.41L11.03 8.9 12 9.88l1.97-1.97 1.41-1.41L12 0 7.97 3.13zM21 18v3H3v-3h2v-1c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v1h2zm-5-6v-2h-2v2H8l4 4 4-4h-3z" />
          </svg>
          Upload File
        </button>
      </label>
      <input
        type="file"
        id="fileUpload"
        className="hidden"
        onChange={handleChange}
      />
      {selectedFile && (
        <div className="text-sm text-gray-500">
          Selected file: {selectedFile.name}
        </div>
      )}
    </div>
  );
};

export default VendorFileUpload;
