import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const MainLayout = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script) // Cleanup khi unmount
        }
    }, [])
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Header />
                <div className="layout-page">
                    <Navbar />
                    <div className="wrapper-content">
                        <Outlet /> {/* Render trang con */}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default MainLayout
