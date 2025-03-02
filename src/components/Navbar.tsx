import React from "react";
import UserDropdown from "./UserDropdown";
import NotificationHeader from "./NotificationHeader";
import SearchBar from "./SearchBar"; // Import SearchBar

const Navbar = () => {
    return (
        <nav className="layout-navbar container-xxl navbar-detached navbar navbar-expand-xl align-items-center bg-navbar-theme">
            <div
                className="navbar-nav-right d-flex align-items-center w-100"
                id="navbar-collapse"
            >
                {/* 🔎 Search Bar Component */}
                <SearchBar />

                <ul className="navbar-nav flex-row align-items-center ms-5">
                    {/* 🔔 Notifications Component */}
                    <NotificationHeader />

                    {/* 👤 User Dropdown */}
                    <UserDropdown />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
