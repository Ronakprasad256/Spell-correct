import React from 'react'

export default function Footer() {
  const footerStyle = {
    marginTop: '0px',
    fontSize: "12px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const container = {
    marginTop: '33.6vh',
  }
  return (
    <>
      <div style={container} className="position-relative bg-dark py-4">
        <p style={footerStyle} className='position-absolute top-95 start-50 translate-middle text-white'>&#169; .LITE with &#128147; By Ronak</p>
      </div>
    </>
  )
}