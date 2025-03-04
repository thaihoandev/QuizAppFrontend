import {Outlet} from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {getCurrentUser} from "@/services/userService";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

const MainLayout = () => {
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await getCurrentUser();
                setProfile(data);
            } catch (err: any) {
                setError("Không thể tải thông tin người dùng");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup khi unmount
        };
    }, []);
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Header profile={profile} />
                <div className="layout-page">
                    <Navbar profile={profile} />
                    <div className="wrapper-content">
                        <Outlet /> {/* Render trang con */}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
