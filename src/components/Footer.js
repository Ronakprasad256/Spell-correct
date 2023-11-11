import React from 'react'

export default function Footer() {
  const footerStyle = {
    marginTop: '0px',
    fontSize: "12px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <>
      <div className="position-relative bg-dark py-4">
        <p style={footerStyle} className='position-absolute top-95 start-50 translate-middle text-white'>&#169; .LITE Pvt Ltd- with  &#128147; By Ronak</p>
      </div>
    </>
  )
}