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
                {/* 🔎 Search Bar - Căn trái */}
                <div className="search-container me-auto w-50">
                    <SearchBar />
                </div>

                {/* 🔔 Notifications & 👤 User - Căn phải */}
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <NotificationHeader />
                    <UserDropdown />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
