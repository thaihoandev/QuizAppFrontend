import React from "react"
import UserDropdown from "./UserDropdown"

const Navbar = () => {
    return (
        <nav
            className="layout-navbar container-xxl navbar-detached navbar navbar-expand-xl align-items-center bg-navbar-theme"
            id="layout-navbar"
        >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0   d-xl-none ">
                <a
                    className="nav-item nav-link px-0 me-xl-6"
                    href="javascript:void(0)"
                >
                    <i className="icon-base bx bx-menu icon-md"></i>
                </a>
            </div>

            <div
                className="navbar-nav-right d-flex align-items-center justify-content-end"
                id="navbar-collapse"
            >
                {/* <!-- Search --> */}
                <div className="navbar-nav align-items-center">
                    <div className="nav-item navbar-search-wrapper mb-0">
                        <a
                            className="nav-item nav-link search-toggler px-0"
                            href="javascript:void(0);"
                        >
                            <span
                                className="d-inline-block text-body-secondary fw-normal"
                                id="autocomplete"
                            ></span>
                        </a>
                    </div>
                </div>

                {/* <!-- /Search --> */}

                <ul className="navbar-nav flex-row align-items-center ms-md-auto">
                    {/* <!-- Language --> */}
                    <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                        <a
                            className="nav-link dropdown-toggle hide-arrow"
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                        >
                            <i className="icon-base bx bx-globe icon-md"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                    data-language="en"
                                    data-text-direction="ltr"
                                >
                                    <span>English</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                    data-language="fr"
                                    data-text-direction="ltr"
                                >
                                    <span>French</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                    data-language="ar"
                                    data-text-direction="rtl"
                                >
                                    <span>Arabic</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                    data-language="de"
                                    data-text-direction="ltr"
                                >
                                    <span>German</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* <!--/ Language --> */}

                    {/* <!-- Style Switcher --> */}
                    <li className="nav-item dropdown me-2 me-xl-0">
                        <a
                            className="nav-link dropdown-toggle hide-arrow"
                            id="nav-theme"
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                        >
                            <i className="icon-base bx bx-sun icon-md theme-icon-active"></i>
                            <span className="d-none ms-2" id="nav-theme-text">
                                Toggle theme
                            </span>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="nav-theme-text"
                        >
                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item align-items-center active"
                                    data-bs-theme-value="light"
                                    aria-pressed="false"
                                >
                                    <span>
                                        <i
                                            className="icon-base bx bx-sun icon-md me-3"
                                            data-icon="sun"
                                        ></i>
                                        Light
                                    </span>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item align-items-center"
                                    data-bs-theme-value="dark"
                                    aria-pressed="true"
                                >
                                    <span>
                                        <i
                                            className="icon-base bx bx-moon icon-md me-3"
                                            data-icon="moon"
                                        ></i>
                                        Dark
                                    </span>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item align-items-center"
                                    data-bs-theme-value="system"
                                    aria-pressed="false"
                                >
                                    <span>
                                        <i
                                            className="icon-base bx bx-desktop icon-md me-3"
                                            data-icon="desktop"
                                        ></i>
                                        System
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- / Style Switcher--> */}

                    {/* <!-- Quick links  --> */}
                    <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                        <a
                            className="nav-link dropdown-toggle hide-arrow"
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                        >
                            <i className="icon-base bx bx-grid-alt icon-md"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end p-0">
                            <div className="dropdown-menu-header border-bottom">
                                <div className="dropdown-header d-flex align-items-center py-3">
                                    <h6 className="mb-0 me-auto">Shortcuts</h6>
                                    <a
                                        href="javascript:void(0)"
                                        className="dropdown-shortcuts-add py-2"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Add shortcuts"
                                    >
                                        <i className="icon-base bx bx-plus-circle text-heading"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="dropdown-shortcuts-list scrollable-container">
                                <div className="row row-bordered overflow-visible g-0">
                                    <div className="dropdown-shortcuts-item col">
                                        <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                            <i className="icon-base bx bx-calendar icon-26px text-heading"></i>
                                        </span>
                                        <a
                                            href="app-calendar.html"
                                            className="stretched-link"
                                        >
                                            Calendar
                                        </a>
                                        <small>Appointments</small>
                                    </div>
                                    <div className="dropdown-shortcuts-item col">
                                        <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                            <i className="icon-base bx bx-food-menu icon-26px text-heading"></i>
                                        </span>
                                        <a
                                            href="app-invoice-list.html"
                                            className="stretched-link"
                                        >
                                            Invoice App
                                        </a>
                                        <small>Manage Accounts</small>
                                    </div>
                                </div>
                                <div className="row row-bordered overflow-visible g-0">
                                    <div className="dropdown-shortcuts-item col">
                                        <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                            <i className="icon-base bx bx-user icon-26px text-heading"></i>
                                        </span>
                                        <a
                                            href="app-user-list.html"
                                            className="stretched-link"
                                        >
                                            User App
                                        </a>
                                        <small>Manage Users</small>
                                    </div>
                                    <div className="dropdown-shortcuts-item col">
                                        <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                            <i className="icon-base bx bx-check-shield icon-26px text-heading"></i>
                                        </span>
                                        <a
                                            href="app-access-roles.html"
                                            className="stretched-link"
                                        >
                                            Role Management
                                        </a>
                                        <small>Permission</small>
                                    </div>
                                </div>
                                <div className="row row-bordered overflow-visible g-0">
                                    <div className="dropdown-shortcuts-item col">
                                        <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                            <i className="icon-base bx bx-pie-chart-alt-2 icon-26px text-heading"></i>
                                        </span>
                                        <a
                                            href="index.html"
                                            className="stretched-link"
                                        >
                                            Dashboard
                                        </a>
                                        <small>User Dashboard</small>
                                    </div>
                                    <div className="dropdown-shortcuts-item col">
                                        <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                            <i className="icon-base bx bx-cog icon-26px text-heading"></i>
                                        </span>
                                        <a
                                            href="pages-account-settings-account.html"
                                            className="stretched-link"
                                        >
                                            Setting
                                        </a>
                                        <small>Account Settings</small>
                                    </div>
                                </div>
                                <div className="row row-bordered overflow-visible g-0">
                                    <div className="dropdown-shortcuts-item col">
                                        <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                            <i className="icon-base bx bx-help-circle icon-26px text-heading"></i>
                                        </span>
                                        <a
                                            href="pages-faq.html"
                                            className="stretched-link"
                                        >
                                            FAQs
                                        </a>
                                        <small>FAQs & Articles</small>
                                    </div>
                                    <div className="dropdown-shortcuts-item col">
                                        <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                            <i className="icon-base bx bx-window-open icon-26px text-heading"></i>
                                        </span>
                                        <a
                                            href="modal-examples.html"
                                            className="stretched-link"
                                        >
                                            Modals
                                        </a>
                                        <small>Useful Popups</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <!-- Quick links -->

      <!-- Notification --> */}
                    <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                        <a
                            className="nav-link dropdown-toggle hide-arrow"
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                        >
                            <span className="position-relative">
                                <i className="icon-base bx bx-bell icon-md"></i>
                                <span className="badge rounded-pill bg-danger badge-dot badge-notifications border"></span>
                            </span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end p-0">
                            <li className="dropdown-menu-header border-bottom">
                                <div className="dropdown-header d-flex align-items-center py-3">
                                    <h6 className="mb-0 me-auto">
                                        Notification
                                    </h6>
                                    <div className="d-flex align-items-center h6 mb-0">
                                        <span className="badge bg-label-primary me-2">
                                            8 New
                                        </span>
                                        <a
                                            href="javascript:void(0)"
                                            className="dropdown-notifications-all p-2"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Mark all as read"
                                        >
                                            <i className="icon-base bx bx-envelope-open text-heading"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown-notifications-list scrollable-container">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <img
                                                        src="../../assets/img/avatars/1.png"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="small mb-0">
                                                    Congratulation Lettie 🎉
                                                </h6>
                                                <small className="mb-1 d-block text-body">
                                                    Won the monthly best seller
                                                    gold badge
                                                </small>
                                                <small className="text-body-secondary">
                                                    1h ago
                                                </small>
                                            </div>
                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-read"
                                                >
                                                    <span className="badge badge-dot"></span>
                                                </a>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-archive"
                                                >
                                                    <span className="icon-base bx bx-x"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <span className="avatar-initial rounded-circle bg-label-danger">
                                                        CF
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="small mb-0">
                                                    Charles Franklin
                                                </h6>
                                                <small className="mb-1 d-block text-body">
                                                    Accepted your connection
                                                </small>
                                                <small className="text-body-secondary">
                                                    12hr ago
                                                </small>
                                            </div>
                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-read"
                                                >
                                                    <span className="badge badge-dot"></span>
                                                </a>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-archive"
                                                >
                                                    <span className="icon-base bx bx-x"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <img
                                                        src="../../assets/img/avatars/2.png"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="small mb-0">
                                                    New Message ✉️
                                                </h6>
                                                <small className="mb-1 d-block text-body">
                                                    You have new message from
                                                    Natalie
                                                </small>
                                                <small className="text-body-secondary">
                                                    1h ago
                                                </small>
                                            </div>
                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-read"
                                                >
                                                    <span className="badge badge-dot"></span>
                                                </a>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-archive"
                                                >
                                                    <span className="icon-base bx bx-x"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <span className="avatar-initial rounded-circle bg-label-success">
                                                        <i className="icon-base bx bx-cart"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="small mb-0">
                                                    Whoo! You have new order 🛒
                                                </h6>
                                                <small className="mb-1 d-block text-body">
                                                    ACME Inc. made new order
                                                    $1,154
                                                </small>
                                                <small className="text-body-secondary">
                                                    1 day ago
                                                </small>
                                            </div>
                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-read"
                                                >
                                                    <span className="badge badge-dot"></span>
                                                </a>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-archive"
                                                >
                                                    <span className="icon-base bx bx-x"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <img
                                                        src="../../assets/img/avatars/9.png"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="small mb-0">
                                                    Application has been
                                                    approved 🚀
                                                </h6>
                                                <small className="mb-1 d-block text-body">
                                                    Your ABC project application
                                                    has been approved.
                                                </small>
                                                <small className="text-body-secondary">
                                                    2 days ago
                                                </small>
                                            </div>
                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-read"
                                                >
                                                    <span className="badge badge-dot"></span>
                                                </a>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-archive"
                                                >
                                                    <span className="icon-base bx bx-x"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <span className="avatar-initial rounded-circle bg-label-success">
                                                        <i className="icon-base bx bx-pie-chart-alt"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="small mb-0">
                                                    Monthly report is generated
                                                </h6>
                                                <small className="mb-1 d-block text-body">
                                                    July monthly financial
                                                    report is generated{" "}
                                                </small>
                                                <small className="text-body-secondary">
                                                    3 days ago
                                                </small>
                                            </div>
                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-read"
                                                >
                                                    <span className="badge badge-dot"></span>
                                                </a>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-archive"
                                                >
                                                    <span className="icon-base bx bx-x"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <img
                                                        src="../../assets/img/avatars/5.png"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="small mb-0">
                                                    Send connection request
                                                </h6>
                                                <small className="mb-1 d-block text-body">
                                                    Peter sent you connection
                                                    request
                                                </small>
                                                <small className="text-body-secondary">
                                                    4 days ago
                                                </small>
                                            </div>
                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-read"
                                                >
                                                    <span className="badge badge-dot"></span>
                                                </a>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-archive"
                                                >
                                                    <span className="icon-base bx bx-x"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <img
                                                        src="../../assets/img/avatars/6.png"
                                                        className="rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="small mb-0">
                                                    New message from Jane
                                                </h6>
                                                <small className="mb-1 d-block text-body">
                                                    Your have new message from
                                                    Jane
                                                </small>
                                                <small className="text-body-secondary">
                                                    5 days ago
                                                </small>
                                            </div>
                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-read"
                                                >
                                                    <span className="badge badge-dot"></span>
                                                </a>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-archive"
                                                >
                                                    <span className="icon-base bx bx-x"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar">
                                                    <span className="avatar-initial rounded-circle bg-label-warning">
                                                        <i className="icon-base bx bx-error"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="small mb-0">
                                                    CPU is running high
                                                </h6>
                                                <small className="mb-1 d-block text-body">
                                                    CPU Utilization Percent is
                                                    currently at 88.63%,
                                                </small>
                                                <small className="text-body-secondary">
                                                    5 days ago
                                                </small>
                                            </div>
                                            <div className="flex-shrink-0 dropdown-notifications-actions">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-read"
                                                >
                                                    <span className="badge badge-dot"></span>
                                                </a>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="dropdown-notifications-archive"
                                                >
                                                    <span className="icon-base bx bx-x"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="border-top">
                                <div className="d-grid p-4">
                                    <a
                                        className="btn btn-primary btn-sm d-flex"
                                        href="javascript:void(0);"
                                    >
                                        <small className="align-middle">
                                            View all notifications
                                        </small>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    {/* <!--/ Notification -->
      <!-- User --> */}
                    <UserDropdown />
                    {/* <!--/ User --> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
