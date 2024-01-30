import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='container p-5' style={{ minHeight: "5.34in" }}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout