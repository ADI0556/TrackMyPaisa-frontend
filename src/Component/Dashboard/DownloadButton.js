import React from 'react'

const DownloadButton = (props) => {
    const handleDownload = () => {
        const blob = new Blob([props.htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = props.filename;
        a.click();
        URL.revokeObjectURL(url);
      };
    return (
    
    <>
        <button className="btn btn-info"style={{marginTop:"70px",fontSize:"13px",marginLeft:"10px"}} onClick={handleDownload}>
            
            Generate Monthly report
          </button>
    </>
  )
}

export default DownloadButton