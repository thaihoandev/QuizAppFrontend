import HeaderProfile from "@/components/HeaderProfile";
import NavigationMenuProfile from "@/components/NavigationMenuProfile";
import React from "react";
import {useEffect, useState} from "react";
import {getCurrentUser} from "@/services/userService";
import {useAuth} from "@/hooks/useAuth";

const ClassesPage = () => {
    const classMenuItems = [
        {path: "/profile", icon: "bx-user", label: "Profile"},
        {path: "/classes", icon: "bx-chalkboard", label: "Lớp Học"},
        {path: "/courses", icon: "bx-book", label: "Học Phần"},
        {path: "/tests", icon: "bx-task", label: "Bài Kiểm Tra"},
    ];
    const {user} = useAuth(); // Lấy thông tin user từ Zustand
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await getCurrentUser();
                console.log("data", data);
                setProfile(data);
            } catch (err: any) {
                setError("Không thể tải thông tin người dùng");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []); // Không cần phụ thuộc vào `user?.id` vì API `/me` tự lấy từ token

    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <HeaderProfile profile={profile} />
            {/* <!--/ Header --> */}

            {/* <!-- Navbar pills --> */}
            <NavigationMenuProfile menuItems={classMenuItems} />
        </div>
    );
};

export default ClassesPage;
