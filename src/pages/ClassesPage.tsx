import HeaderProfile from "@/components/HeaderProfile"
import NavigationMenuProfile from "@/components/NavigationMenuProfile"
import React from "react"

const ClassesPage = () => {
    const classMenuItems = [
        {path: "/profile", icon: "bx-user", label: "Profile"},
        {path: "/classes", icon: "bx-chalkboard", label: "Lớp Học"},
        {path: "/courses", icon: "bx-book", label: "Học Phần"},
        {path: "/tests", icon: "bx-task", label: "Bài Kiểm Tra"},
    ]
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <HeaderProfile />
            {/* <!--/ Header --> */}

            {/* <!-- Navbar pills --> */}
            <NavigationMenuProfile menuItems={classMenuItems} />
        </div>
    )
}

export default ClassesPage
