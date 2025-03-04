import {useEffect, useState, MouseEvent} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

const Header = ({profile}: {profile: any}) => {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState<string>("");
    const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (menuCollapsed && !isHovered) {
            document.body.classList.add("layout-menu-collapsed");
        } else {
            document.body.classList.remove("layout-menu-collapsed");
        }
    }, [menuCollapsed, isHovered]);

    useEffect(() => {
        const currentPath = location.pathname;
        if (activeMenuItem !== currentPath) {
            setActiveMenuItem(currentPath);
        }
    }, [location.pathname]);

    const handleMenuItemClick = (path: string) => {
        setActiveMenuItem(path);
    };

    const toggleSubmenu = (
        e: MouseEvent<HTMLAnchorElement>,
        submenuId: string,
    ) => {
        e.preventDefault();
        if (openSubmenus.includes(submenuId)) {
            setOpenSubmenus(openSubmenus.filter((id) => id !== submenuId));
        } else {
            setOpenSubmenus([...openSubmenus, submenuId]);
        }
    };

    const toggleSidebar = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // If sidebar is collapsed, expand it
        // If sidebar is expanded, collapse it
        setMenuCollapsed(!menuCollapsed);
    };

    const handleMouseEnter = () => {
        if (menuCollapsed) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (menuCollapsed) {
            setIsHovered(false);
        }
    };

    const isActive = (path: string) => {
        return activeMenuItem === path;
    };

    const isSubmenuOpen = (submenuId: string) => {
        return openSubmenus.includes(submenuId);
    };

    // Fixed function: When collapsed, show right chevron; when expanded, show left chevron
    const getChevronIcon = () => {
        if (menuCollapsed) {
            return "bx-chevron-right";
        } else {
            return "bx-chevron-left";
        }
    };

    return (
        <aside
            id="layout-menu"
            className={`layout-menu menu-vertical menu ${menuCollapsed && !isHovered ? "collapsed" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                    <span className="app-brand-logo demo">
                        <span className="text-primary">
                            <svg width="25" viewBox="0 0 25 42" version="1.1">
                                {/* SVG content */}
                            </svg>
                        </span>
                    </span>
                </a>
                <a
                    href="#"
                    onClick={toggleSidebar}
                    className="layout-menu-toggle menu-link text-large ms-auto"
                >
                    <i className={`icon-base bx ${getChevronIcon()}`}></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                <li className={`menu-item ${isActive("/") ? "active" : ""}`}>
                    <Link
                        to="/"
                        className="menu-link"
                        onClick={() => handleMenuItemClick("/")}
                    >
                        <i className="menu-icon icon-base bx bx-home-smile"></i>
                        <div data-i18n="Home">Home</div>
                        <div className="badge text-bg-danger rounded-pill ms-auto">
                            5
                        </div>
                    </Link>
                </li>

                {profile ? (
                    <>
                        <li className="menu-header small">
                            <span
                                className="menu-header-text"
                                data-i18n="Charts & Maps"
                            >
                                Lession
                            </span>
                        </li>

                        <li
                            className={`menu-item ${
                                isActive("/courses") ||
                                isActive("/classes") ||
                                isActive("/quizzes")
                                    ? "active"
                                    : ""
                            } ${isSubmenuOpen("my-category") ? "open" : ""}`}
                        >
                            <a
                                href="#"
                                className="menu-link menu-toggle"
                                onClick={(e) => toggleSubmenu(e, "my-category")}
                            >
                                <i className="menu-icon icon-base bx bx-chart"></i>
                                <div data-i18n="My Category">My Category</div>
                            </a>
                            <ul className="menu-sub">
                                <li
                                    className={`menu-item ${isActive("/courses") ? "active" : ""}`}
                                >
                                    <Link
                                        to="/courses"
                                        className="menu-link"
                                        onClick={() =>
                                            handleMenuItemClick("/courses")
                                        }
                                    >
                                        <div data-i18n="Courses">Courses</div>
                                    </Link>
                                </li>
                                <li
                                    className={`menu-item ${isActive("/classes") ? "active" : ""}`}
                                >
                                    <Link
                                        to="/classes"
                                        className="menu-link"
                                        onClick={() =>
                                            handleMenuItemClick("/classes")
                                        }
                                    >
                                        <div data-i18n="Classes">Classes</div>
                                    </Link>
                                </li>
                                <li
                                    className={`menu-item ${isActive("/quizzes") ? "active" : ""}`}
                                >
                                    <Link
                                        to="/quizzes"
                                        className="menu-link"
                                        onClick={() =>
                                            handleMenuItemClick("/quizzes")
                                        }
                                    >
                                        <div data-i18n="Quizzes">Quizzes</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li
                            className={`menu-item ${isActive("/achievements") ? "active" : ""}`}
                        >
                            <Link
                                to="/achievements"
                                className="menu-link"
                                onClick={() =>
                                    handleMenuItemClick("/achievements")
                                }
                            >
                                <i className="menu-icon icon-base bx bx-map-alt"></i>
                                <div data-i18n="Achievements">Achievements</div>
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="menu-header small">
                            <span
                                className="menu-header-text"
                                data-i18n="More infomation"
                            >
                                More infomation
                            </span>
                        </li>
                        <div className="d-flex justify-content-center align-items-center p-3 w-100">
                            <button
                                onClick={() => navigate("/login")}
                                className=" btn btn-primary w-100"
                            >
                                Login
                            </button>
                        </div>
                    </>
                )}
            </ul>
        </aside>
    );
};

export default Header;
